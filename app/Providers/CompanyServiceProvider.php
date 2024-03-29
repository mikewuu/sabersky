<?php

namespace App\Providers;

use App\Company;
use App\CompanySettings;
use App\CompanyStatistics;
use Illuminate\Support\ServiceProvider;

class CompanyServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        // Whenever we create Company model
        Company::created(function ($company) {
            // We also want to create it's statistics & settings table
            $company->statistics()->create([]);
            $company->settings()->create([]);
        });

        CompanySettings::created(function ($settings) {
            // set USD as default currency
            $settings->currencyCountries()->attach(['840']);
        });


        // ON delete
        Company::deleting(function ($company) {

            // Remove all addresses: Company, Vendor, Purchase Order(s)
                if ($address = $company->address) $address->delete();

                foreach ($company->purchaseOrders as $purchaseOrder) {
                    if ($billingAddress = $purchaseOrder->billingAddress) $billingAddress->delete();
                    if ($shippingAddress = $purchaseOrder->shippingAddress) $shippingAddress->delete();
                }

                foreach ($company->vendors as $vendor) {
                    foreach ($vendor->addresses as $address) {
                        if ($address) $address->delete();
                    }
                }

            // Remove all photos: User, Item
                foreach ($company->employees as $employee) {
                    if ($photo = $employee->photo) $photo->remove();
                }
                foreach ($company->items as $item) {
                    foreach ($item->photos as $photo) {
                        $photo->remove();
                    }
                }
        });

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
