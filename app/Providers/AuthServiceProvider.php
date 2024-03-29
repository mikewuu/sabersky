<?php

namespace App\Providers;

use App\Address;
use App\Extensions\ExtendedEloquentUserProvider;
use App\Item;
use App\LineItem;
use App\Note;
use App\Permission;
use App\Policies\AddressPolicy;
use App\Policies\ItemPolicy;
use App\Policies\NotePolicy;
use App\Policies\ProjectPolicy;
use App\Policies\PurchaseOrderPolicy;
use App\Policies\PurchaseRequestPolicy;
use App\Policies\RolePolicy;
use App\Policies\UserPolicy;
use App\Policies\VendorPolicy;
use App\Project;
use App\PurchaseOrder;
use App\PurchaseRequest;
use App\Role;
use App\User;
use App\Vendor;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *x
     * @var array
     */
    protected $policies = [
        PurchaseOrder::class => PurchaseOrderPolicy::class,
        Item::class => ItemPolicy::class,
        Project::class => ProjectPolicy::class,
        User::class => UserPolicy::class,
        Role::class => RolePolicy::class,
        PurchaseRequest::class => PurchaseRequestPolicy::class,
        Vendor::class => VendorPolicy::class,
        Address::class => AddressPolicy::class,
        Note::class => NotePolicy::class
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @param  \Illuminate\Contracts\Auth\Access\Gate $gate
     * @return void
     */
    public function boot(GateContract $gate)
    {
        $this->registerPolicies($gate);

        // If we are not migrating
        if (Schema::hasTable('permissions'))
        {
            foreach ($this->getPermissions() as $permission) {
                $gate->define($permission->name, function ($user) use ($permission) {
                    if($user->role) return $permission->roles->contains('position', $user->role->position);
                    return false;
                });
            }
        }

//        // Define custom provider: extended - DEPRACATED * Using auth middleware instead
//        \Auth::provider('extended', function($app, array $config) {
//            return new ExtendedEloquentUserProvider($this->app['hash'], $config['model']);
//        });

    }

    /**
     * Retrieves all the permissions eager loading roles.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    protected function getPermissions()
    {
        return Permission::with('roles')->get();
    }
}
