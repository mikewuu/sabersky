<?php

namespace App\Http\Controllers;

use App\BankAccount;
use App\Company;
use App\Http\Requests\AddBankAccountRequest;
use App\Http\Requests\AddNewVendorRequest;
use App\Http\Requests\LinkCompanyToVendorRequest;
use App\Vendor;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class VendorsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('company');
    }


    /**
     * show view for All vendors
     * @return mixed
     */
    public function getAll()
    {
        $breadcrumbs = [
            ['<i class="fa fa-truck"></i> Vendors', '#']
        ];

        $vendors = Auth::user()->company->vendors;

        return view('vendors.all', compact('vendors', 'breadcrumbs'));
    }

    /**
     * Shows Form for adding a New Vendor to the Company
     *
     * @return mixed
     */
    public function getAddForm()
    {
        if (Gate::allows('vendor_manage')) {
            $breadcrumbs = [
                ['<i class="fa fa-truck"></i> Vendors', '/vendors'],
                ['Add New', '#']
            ];
            return view('vendors.add', compact('breadcrumbs'));
        }
    }

    /**
     * Handle POST request to add a new Vendor
     *
     * @param AddNewVendorRequest $request
     */
    public function postAddCustomVendor(AddNewVendorRequest $request)
    {
        $vendor = Auth::user()->company->vendors()->create([
            'name' => $request->input('name'),
            'description' => $request->input('description')
        ]);

        flash()->success('Created a new custom vendor');

        return redirect('/vendors/' . $vendor->id);
    }

    /**
     * POST request to link a Company to the an currently authenticated
     * User's Company's Vendor.
     *
     * @param LinkCompanyToVendorRequest $request
     * @return static
     */
    public function postLinkCompanyToVendor(LinkCompanyToVendorRequest $request)
    {
        $company = Company::find($request->input('linked_company_id'));
        // Did we get a vendor_id in the request?
        if ($vendor = Vendor::find($request->input('vendor_id'))) {
            // Link company to an existing vendor
            return $vendor->linkCompany($company);
        } else {
            // Create new vendor and link it to the company
            return Vendor::createAndLinkFromCompany(Auth::user()->company, $company);
        }
    }

    /**
     * Retrieves the view for a single Vendor if
     * the Client is authorized to view it.
     *
     * @param Vendor $vendor
     * @return mixed
     */
    public function getSingle(Vendor $vendor)
    {
        if (Gate::allows('view', $vendor)) {
            $breadcrumbs = [
                ['<i class="fa fa-truck"></i> Vendors', '/vendors'],
                [$vendor->name, '#']
            ];
            return view('vendors.single', compact('breadcrumbs', 'vendor'));
        };
        return redirect('/vendors');
    }

    /**
     * Returns a Vendor model at the given ID
     * @param Vendor $vendor
     * @return $this
     */
    public function apiGetSingle(Vendor $vendor)
    {
        if (Gate::allows('view', $vendor)) {
            return $vendor->load('linkedCompany', 'addresses');
        }
        return response("Not authorized to view that Vendor");
    }

    /**
     * POST request to update a Vendor's description
     *
     * @param Vendor $vendor
     * @param Request $request
     * @return mixed
     */
    public function postSaveDescription(Vendor $vendor, Request $request)
    {
        if (Gate::allows('edit', $vendor)) {
            if ($vendor->update(['description' => $request->input('description')])) {
                return response("Updated vendor description", 200);
            };

            return response("Could not update vendor description", 500);
        }

        return response("Not authorized to edit that Vendor", 403);
    }

    /**
     * Handle POST request from form to save a Bank Account to
     * a Vendor
     *
     * @param Vendor $vendor
     * @param AddBankAccountRequest $request
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function postAddBankAccount(Vendor $vendor, AddBankAccountRequest $request)
    {
        return $vendor->bankAccounts()->create($request->all());
    }

    /**
     * DELETE request to remove a Vendor's associated Bank Account model
     *
     * @param Vendor $vendor
     * @param $bankAccountId
     * @return mixed
     */
    public function deleteBankAccount(Vendor $vendor, $bankAccountId)
    {
        if (Gate::allows('edit', $vendor)) {
            $deleted = BankAccount::where('id', $bankAccountId)// BankAccount model we're trying to modify
                                  ->where('vendor_id', '=', $vendor->id)// ...belongs to right vendor check
                                  ->firstOrFail()
                                  ->deleteOrDeactivate();
            if ($deleted) return response("Removed Bank Account", 200);
            return response("Could not delete Bank Account", 500);
        }

        return response("Not allowed to delete that Vendor's Bank Account", 403);
    }

    /**
     * POST req to set a Bank Account as the primary account
     * for a given Vendor
     *
     * @param Vendor $vendor
     * @param $bankAccountId
     * @return mixed
     */
    public function postBankAccountSetPrimary(Vendor $vendor, $bankAccountId)
    {
        if (Gate::allows('edit', $vendor)) {
            $set = BankAccount::where('id', $bankAccountId)
                              ->where('vendor_id', '=', $vendor->id)
                              ->firstOrFail()
                              ->setPrimary();
            if ($set) return response("Set Bank Account as primary", 200);
            return response("Could not set Bank Account as primary", 500);
        }

        return response("Not allowed to edit that Bank Account", 403);
    }

    /**
     * Handle POST request to either verify or dismiss
     * a Vendor that has linked to the User's Company
     *
     * @param Vendor $vendor
     * @param $action
     * @return mixed
     */
    public function postVerifyVendor(Vendor $vendor, $action)
    {
        // User must be allowed to accept reqeusts, as well as accept vendor
        if (Gate::allows('vendor_manage') && Gate::allows('handleRequest', $vendor)) {
            switch ($action) {
                case 'verify':
                    $vendor->verify();
                    return response("Verified vendor request", 200);
                    break;
                case 'dismiss':
                    $vendor->unlinkCompany();
                    return response("Dismissed vendor request", 200);
                    break;
                default:
                    return response("No action taken for request", 500);
            }
        }

        return response("Not authorized to verify that vendor", 403);
    }

    /**
     * Shows view for Requests page so that the client can accept / reject
     * Vendor requests that want to link the client's Company to a
     * Vendor model
     *
     * @return mixed
     */
    public function getRequestsPage()
    {
        if (Gate::allows('vendor_manage')) {
            $breadcrumbs = [
                ['<i class="fa fa-truck"></i> Vendors', '/vendors'],
                ['Requests', '#']
            ];
            return view('vendors.requests', compact('breadcrumbs'));
        }
        flash("Need permission to accept vendor requests");
        return redirect('/vendors');
    }

    /**
     * Handle api request to see Pending requests to be linked a Vendor
     * for the Client's Company
     *
     * @return mixed
     */
    public function apiGetPendingRequests()
    {
        if (Gate::allows('vendor_manage')) {
            return Auth::user()->company->customerVendors(0)->with('baseCompany')->get();
        }
        return response("Not allowed to manage vendors", 403);
    }
}
