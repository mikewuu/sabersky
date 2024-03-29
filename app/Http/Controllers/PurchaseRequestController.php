<?php

namespace App\Http\Controllers;

use App\Events\PurchaseRequestMade;
use App\Events\PurchaseRequestUpdated;
use App\Http\Requests\AddNoteRequest;
use App\Http\Requests\CancelPurchaseRequestRequest;
use App\Http\Requests\MakePurchaseRequestRequest;
use App\Item;
use App\Note;
use App\Project;
use App\PurchaseRequest;
use App\Repositories\UserPurchaseRequestsRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;

class PurchaseRequestController extends Controller
{

    use AuthorizesRequests;

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('company');
        $this->middleware('api.only', [
            'only' => ['apiGetAll', 'apiGetSingle']
        ]);
    }

    /**
     * Handle GET request to view all
     * relevant purchase requests.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getAll()
    {
        $breadcrumbs = [
            ['<i class="fa fa-shopping-basket"></i> Purchase Requests', '#']
        ];
        $purchaseRequests = Auth::user()->company->purchaseRequests()->paginate(15);
        return view('purchase_requests.all', compact('breadcrumbs', 'purchaseRequests'));
    }

    /**
     * GET All PRs that belongs to the Users
     * Company
     *
     * @param Request $request
     * @return mixed
     */
    public function apiGetAll(Request $request)
    {
        return UserPurchaseRequestsRepository::forUser(Auth::user())
                                             ->whereState($request->state)
                                             ->filterIntegerField('number', $request->number)
                                             ->forProject($request->project_id)
                                             ->filterIntegerField('quantity', $request->quantity)
                                             ->belongsToProductCategory($request->category)
                                             ->filterByItem($request->item_brand, $request->item_name, $request->item_sku)
                                             ->filterDateField('due', $request->due)
                                             ->filterDateField('purchase_requests.created_at', $request->requested)
                                             ->byUser($request->user_id)
                                             ->searchFor($request->search)
                                             ->onlyUrgent($request->urgent)
                                             ->sortOn($request->sort, $request->order)
                                             ->with(['item.photos', 'project', 'user'])
                                             ->paginate($request->per_page);
    }

    /**
     * Request to get a single Purchase Request as JSON
     *
     * @param PurchaseRequest $purchaseRequest
     * @return $this|Response
     */
    public function apiGetSingle(PurchaseRequest $purchaseRequest)
    {
        if (Gate::allows('view', $purchaseRequest)) return $purchaseRequest->load('item.photos', 'project', 'user');
        return response("Not allowed to view that Purchase Request", 403);
    }

    /**
     * Shows the form to make a
     * Purchase Request.
     *
     * @return mixed
     */
    public function getMakePRForm()
    {
        if (Gate::allows('pr_make')) {
            $breadcrumbs = [
                ['<i class="fa fa-shopping-basket"></i> Purchase Requests', '/purchase_requests'],
                ['Make', '#']
            ];
            return view('purchase_requests.make', compact('breadcrumbs'));
        }
        return redirect(route('showAllPurchaseRequests'));
    }

    /**
     * POST request to save a new
     * Purchase Request.
     *
     * @param MakePurchaseRequestRequest $request
     * @return mixed
     */
    public function postMakePR(MakePurchaseRequestRequest $request)
    {
        // Find Project
        $project = Project::findOrFail($request->input('project_id'));
        // Find Item
        $item = Item::findOrFail($request->input('item_id'));

        // Create the Purchase Request
        if ($purchaseRequest = PurchaseRequest::make($request, Auth::user())) {
            Event::fire(new PurchaseRequestMade($purchaseRequest, Auth::user()));
            return response("Made a new Purchase Request", 200);  
        } 
        return response("Could not make Purchase Request", 500);

    }

    /**
     * Fetches PR by id and loads view
     * for a Single Purchase Request
     *
     * @param PurchaseRequest $purchaseRequest
     * @return mixed
     */
    public function getSingle(PurchaseRequest $purchaseRequest)
    {
        if (Gate::allows('view', $purchaseRequest)) {
            $purchaseRequest = $purchaseRequest->load('user', 'project', 'project.purchaseRequests', 'project.teamMembers', 'item.photos', 'item.lineItems.purchaseOrder.vendor');
            return view('purchase_requests.single', compact('purchaseRequest'));
        }
        abort(403, "That Purchase Request does not belong to you.");
    }

    /**
     * Cancel a Request at a given route
     *
     * @param PurchaseRequest $purchaseRequest
     * @return mixed
     */
    public function deleteCancel(PurchaseRequest $purchaseRequest)
    {
        $this->authorize('view', $purchaseRequest);
        if ($purchaseRequest->cancel()) {
            Event::fire(new PurchaseRequestUpdated($purchaseRequest));
            return response("Cancelled PR", 200);
        }
        return response("Could not cancel PR", 500);
    }

    /**
     * GET route that re-opens a cancelled PR so that it can be
     * fulfilled again
     *
     * @param PurchaseRequest $purchaseRequest
     * @return Response
     * @throws \Exception
     */
    public function getReopen(PurchaseRequest $purchaseRequest)
    {
        $this->authorize('view', $purchaseRequest);
        if ($purchaseRequest->reopen()){
            Event::fire(new PurchaseRequestUpdated($purchaseRequest));
            return response("Reopened PR", 200);
        }
        return response("Could not reopen PR", 500);
    }

}
