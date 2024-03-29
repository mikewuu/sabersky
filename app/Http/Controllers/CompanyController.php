<?php

namespace App\Http\Controllers;

use App\Company;
use App\CompanySettings;
use App\Country;
use App\Events\NewCompanySignedUp;
use App\Http\Requests\CompanyAddCurrencyRequest;
use App\Http\Requests\RegisterCompanyRequest;
use App\Http\Requests\SaveCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Permission;
use App\PurchaseOrder;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;

class CompanyController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth', [
            'except' => ['postRegisterCompany', 'apiGetPublicProfile']
        ]);
        $this->middleware('api.only', [
            'only' => ['apiGetOwn', 'apiGetCurrency', 'apiGetPublicProfile', 'apiGetSearchCompany']
        ]);
    }


    /**
     * POST request to register a new Company.
     * Will create a company as well as a
     * user for the new company.
     *
     * @param RegisterCompanyRequest $request
     * @return mixed
     */
    public function postRegisterCompany(RegisterCompanyRequest $request)
    {
        
        // Create Company
        $company = Company::register($request->input('company_name'));
        // Create User
        $user = User::make($request->input('name'), $request->input('email'), $request->input('password'));
        // Fire Event
        Event::fire(new NewCompanySignedUp($company, $user));
        // Add User as employee of company
        $company->addEmployee($user);

        // Create admin role for company
        $adminRole = $company->createAdmin();
        $adminRole->giveAdminPermissions();

        // Set user as admin
        $user->setRole($adminRole);

        Auth::logout();
        Auth::login($user);

        if (Auth::user()){
            flash()->success('Welcome to Sabersky!');
            return redirect('/');
        }

        flash()->error('Sorry, please try again.');
        return redirect()->back();
    }

    /**
     * Returns the Authenticated User's
     * company model.
     *
     * @return mixed
     */
    public function apiGetOwn()
    {
        if ($company = Auth::user()->company) return $company;
    }

    /**
     * PUT req. to update a user's company
     * information.
     *
     * @param UpdateCompanyRequest $request
     * @return mixed
     */
    public function putUpdate(UpdateCompanyRequest $request)
    {
        if (Gate::allows('settings_change')) {
            $company = Auth::user()->company;
            $company->update([
                'name' => $request->input('name'),
                'description' => $request->input('description')
            ]);
            $company->settings()->update([
                'currency_id' => $request->input('currency_id'),
                'currency_decimal_points' => $request->input('currency_decimal_points')
            ]);
            return response("Updated User Company", 200);
        }
        return response('Not authorized to change settings', 500);
    }
    

    /**
     * Add a currency to Company's list of selectable currencies
     *
     * @param CompanyAddCurrencyRequest $request
     * @return mixed
     */
    public function postAddCurrency(CompanyAddCurrencyRequest $request)
    {
        Auth::user()->company->settings->currencyCountries()->attach($request->input('currency_id'));
        return Auth::user()->company;
    }

    /**
     * Remove currency from Company's list of currencies
     *
     * @param $currencyId
     * @return mixed
     */
    public function deleteRemoveCurrency($currencyId)
    {
        if (Gate::allows('settings_change')) {
            if(! Auth::user()->company->settings->currencyCountries->count() > 1) return response("Can't remove only currency", 500);
            Auth::user()->company->settings->currencyCountries()->detach($currencyId);
            return Auth::user()->company;
        }
        return response('Not authorized to change settings', 500);
    }

    /**
     * Fetches a Company's Public info available for
     * anyone to access.
     *
     * @param $term
     * @return mixed
     */
    public function apiGetPublicProfile($term)
    {
        return Company::fetchPublicProfile($term);
    }


    /**
     * Performs a DB look-up for a Company
     *
     * @param $query
     * @return mixed
     */
    public function apiGetSearchCompany($query)
    {
        if ($query) {
            $companies = Company::where('id', '!=', Auth::user()->company->id)
                                ->where('name', 'LIKE', '%' . $query . '%')
                                ->with('address');
            /*
             * TODO ::: Add ability for more search parameters: address, industry etc.
             */
            return $companies->take(10)->get();
        }
        return response("No search term given", 500);
    }

}
