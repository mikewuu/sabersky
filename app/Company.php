<?php

namespace App;

use App\Role;
use App\User;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Company
 *
 * @property integer $id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $name
 * @property string $description
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $employees
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Project[] $projects
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Vendor[] $vendors
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Role[] $roles
 */
class Company extends Model
{
    protected $fillable = [
        'name',
        'description'
    ];

    /**
     * Company has many Employees (Users).
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function employees()
    {
        return $this->hasMany(User::class);
    }

    /**
     * A company can have many Projects.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    /**
     * Company has many Purchase Requests THROUGH the projects
     * that it has.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function purchaseRequests()
    {
        return $this->hasManyThrough(PurchaseRequest::class, Project::class);
    }

    /**
     * A company has many items that it has purchased.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items()
    {
        $itemsArray = [];
        foreach ($this->projects as $project) {
            array_push($itemsArray, $project->items->load('projects', 'photos')->all());
        }
        $itemsCollection = collect(array_flatten($itemsArray));

        return $itemsCollection;

    }

    public function getVendorsAttribute()
    {
        $vendorsArray = [];
        foreach ($this->purchaseOrders as $purchaseOrder) {
            array_push($vendorsArray, $purchaseOrder->vendor);
        }
        $vendorCollection = collect($vendorsArray)->unique('id')->reject(function ($value, $key) {
            return empty($value);
        });
        return $vendorCollection;
    }

    public function purchaseOrders()
    {
        return $this->hasManyThrough(PurchaseOrder::class, Project::class);
    }

    public function company()
    {
        return $this->projects()->first()->company;
    }

    public function roles() {
        return $this->hasMany(Role::class);
    }

    /**
     * Creates a admin role for a company
     * (if one doesn't already exist).
     *
     * @return Model
     */
    public function createAdmin() {
        if(! $this->roles->contains('position', 'admin')) {
            return $this->roles()->create([
                'position' => 'admin',
            ]);
        }
        abort(403, 'Already have an admin');
    }

    public function rules()
    {
        return $this->hasMany(Rule::class);
    }

}
