<?php


namespace App\Repositories;


use App\Company;
use App\ProductCategory;
use App\Project;
use App\PurchaseRequest;
use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use ReflectionMethod;

/**
 * A Repo that helps us retrieve the
 * Purchase Requests for a Company, with
 * relevant fields and sort / filter
 *
 * Class CompanyPurchaseRequests
 * @package App\Utilities
 */
class UserPurchaseRequestsRepository extends apiRepository
{

    /**
     * The sortable PR fields
     *
     * @var array
     */
    protected $sortableFields = [
        'number',
        'item_name',
        'due',
        'created_at',
        'quantity',
        'project_name',
        'requester_name',
        'state'
    ];

    /**
     * Searchable fields for a PR
     * @var array
     */
    protected $searchableFields = [
        'number',
        'purchase_requests.project_id.projects.name',
        'purchase_requests.item_id.items.brand',
        'purchase_requests.item_id.items.name',
        'purchase_requests.user_id.users.name'
    ];

    /**
     * Finds relevant Purchase Requests for the projects that the
     * User is a part of. We join with relevant tables and then
     * select the columns for info, matching & sorting(name)
     *
     * @param User $user
     * @return mixed
     */
    protected function setQuery(User $user)
    {
        return PurchaseRequest::whereIn('project_id', $user->projects->pluck('id'))
                              ->join('projects', 'purchase_requests.project_id', '=', 'projects.id')
                              ->join('items', 'purchase_requests.item_id', '=', 'items.id')
                              ->join('users', 'purchase_requests.user_id', '=', 'users.id')
                              ->select(DB::raw('
                                purchase_requests.*,
                                IF(purchase_requests.quantity = 0, "fulfilled", purchase_requests.state) AS state,
                                items.name as item_name,
                                items.id as item_id,
                                projects.name as project_name,
                                projects.id as project_id,
                                users.name as requester_name,
                                users.id as requester_id
                               '));

        /*
        Old Query - fetches all PR for a given Company
        return PurchaseRequest::whereExists(function ($query) use ($company){
            $query->select(DB::raw(1))
                  ->from('projects')
                  ->where('company_id', '=', $company->id)
                  ->whereRaw('purchase_requests.project_id = projects.id');
        })
         */
    }

    /**
     * Fetch Purchase Requests that
     * have the given State (string)
     *
     * @param null $state
     * @return $this
     */
    public function whereState($state)
    {
        // Set filter property
        $this->{'state'} = ($state === 'open' || $state === 'cancelled' || $state === 'fulfilled' || $state === 'all') ? $state : 'open';

        // Filter our results
        switch ($this->state) {
            case 'open':
                $this->query->where('state', 'open')->where('quantity', '>', 0);
                break;
            case 'cancelled':
                $this->query->where('state', 'cancelled')->where('quantity', '>', 0);
                break;
            case 'fulfilled':
                $this->query->where('quantity', 0);
                break;
            case 'all':
                break;
            default:
                $this->query->where('state', 'open')->where('quantity', '>', 0);
        }

        return $this;
    }

    /**
     * Retrieving PRs for only a single given Project
     *
     * @param null $projectID
     * @return $this
     */
    public function forProject($projectID)
    {
        if ($projectID) {
            $project = Project::find($projectID);
            $this->{'project'} = $project;
            $this->query->where('project_id', $projectID);
        }
        return $this;
    }

    public function belongsToProductCategory($categoryId = null)
    {
        if ($categoryId) {

            $productCategory = ProductCategory::find($categoryId);
            $this->{'category'} = ProductCategory::find($categoryId)->label;

            $this->query->whereExists(function ($query) use ($productCategory) {
                $query->select(DB::raw(1))
                      ->from('items')
                      ->whereIn('product_subcategory_id', $productCategory->subcategories->pluck('id')->toArray())
                      ->whereRaw('purchase_requests.item_id = items.id');
            });

        }

        return $this;
    }

    /**
     * Single function that can perform a filter for a PR's Item using
     * either Item Name, Brand or Both (makes a unique combination)
     *
     * @param null $brand
     * @param null $name
     * @param null $sku
     * @return $this
     */
    public function filterByItem($brand = null, $name = null, $sku = null)
    {
        $ref = new ReflectionMethod($this, 'filterByItem');
        foreach ($ref->getParameters() as $param) {
            $column = $argName = $param->name;
            if ($term = $$argName) {
                $this->{'item_' . $column} = $term;
                $this->query->whereExists(function ($query) use ($column, $term) {
                    $query->select(DB::raw(1))
                          ->from('items')
                          ->where($column, $term)
                          ->whereRaw('purchase_requests.item_id = items.id');
                });
            }
        }
        return $this;
    }

    /**
     * Whether we only want 'urgent' PR's
     *
     * @param int $urgent
     * @return $this
     */
    public function onlyUrgent($urgent = 0)
    {
        $this->{'urgent'} = ($urgent == 1) ?: 0;
        if ($this->urgent) $this->query->where('urgent', 1);
        return $this;
    }

    /**
     * Only return open and unfulfilled Requests
     * 
     * @return $this
     */
    public function fulfillable()
    {
        $this->whereState('open');
        $this->query->where('quantity', '>', 0);
        return $this;
    }

}