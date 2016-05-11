<?php

namespace App\Http\Controllers;

use App\Http\Requests\AcceptInvitationRequest;
use App\Http\Requests\AddStaffRequest;
use App\Http\Requests\ChangeUserRoleRequest;
use App\Mailers\UserMailer;
use App\Role;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', [
            'except' => [
                'getAcceptView',
                'postAcceptInvitation',
                'getCheckEmailAvailability'
            ]
        ]);
        
        $this->middleware('api.only', [
            'only' => ['apiGetTeam', 'apiGetSearchTeamMembers', 'apiGetSearchCompanyEmployees', 'apiGetAllProjects']
        ]);
    }

    /**
     * Receives an invitation key and show the
     * Accept Invitation view if the key
     * successfully matches a user.
     *
     * @param $inviteKey
     * @return mixed
     */
    public function getAcceptView($inviteKey)
    {
        Auth::logout();
        if ($user = User::fetchFromInviteKey($inviteKey)) {
            return view('auth.accept', compact('user'));
        };
        flash()->error('Invite Key was incorrect or invalid');
        return redirect('/');
    }

    public function postAcceptInvitation(AcceptInvitationRequest $request, $inviteKey)
    {
        if ($user = User::fetchFromInviteKey($inviteKey)) {

            $user->setPassword($request->input('password'))
                 ->clearInviteKey();

            flash()->success('Accepted invitation, welcome aboard!');
            Auth::login($user);
            return redirect(route('singleProject', $user->projects()->first()->id));
        }
        flash()->error('Could join Team. Please request a new invitation key');
        return redirect('/');
    }

    /**
     * Accepts an email (string) and checks to see
     * if it is available.
     *
     * @param $email
     * @return mixed
     */
    public function getCheckEmailAvailability($email)
    {
        if (User::where('email', $email)->first()) return response("Email already taken", 409);
        return response("OK! Email available", 200);
    }

    /**
     * Returns the currently authenticated
     * user.
     *
     * @return mixed
     */
    public function getLoggedUser()
    {
        $user = Auth::user()->load('company', 'company.address', 'company.settings', 'role');
        return $user;
    }

    /**
     * Show View that contains all of the User's
     * Company's employees.
     *
     * @return mixed
     */
    public function getTeam()
    {
        $breadcrumbs = [
            ['<i class="fa fa-users"></i> Team', '/team']
        ];
        return view('team.all', compact('employees', 'breadcrumbs'));
    }

    /**
     * Fetches the Authorized Users's
     * Team Memembers
     *
     * @return mixed
     */
    public function apiGetTeam()
    {
        return Auth::user()->company->employees->load('role');
    }

    /**
     * Search for Users who are from the same Company as the logged-user. In other
     * words we're looking for other Employees from the Client's Company.
     * 
     * @param $query
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function apiGetSearchCompanyEmployees($query)
    {
        if(!$query) return response("No search term given", 500);
        return User::where('company_id', Auth::user()->company_id)
            ->where('name', 'LIKE', '%' . $query . '%')
            ->select(['id', 'name'])->get();
    }

    /**
     * Search for Team Members (Users from same Project)
     * by their name.
     *
     * @param $query
     * @return mixed
     */
    public function apiGetSearchTeamMembers($query)
    {
        if ($query) {
            $projectIDs = Auth::user()->projects->pluck('id');
            $users = User::where('company_id', Auth::user()->company_id)
                         ->whereExists(function ($query) use ($projectIDs) {
                             $query->select(DB::raw(1))
                                   ->from('project_user')
                                   ->whereIn('project_id', $projectIDs)
                                   ->whereRaw('users.id = user_id');
                         })
                         ->where('name', 'LIKE', '%' . $query . '%')
                         ->select(['id', 'name'])->get();
            return $users;
        }
        return response("No search term given", 500);
    }



    /**
     * Show Form to add a new User to
     * Company.
     *
     * @return mixed
     */
    public function getAddStaffForm()
    {
        if (!Gate::allows('team_manage')) abort(403, "Not authorized to add Staff");
        $breadcrumbs = [
            ['<i class="fa fa-users"></i> Team', '/team'],
            ['Add', '#']
        ];
        $roles = Auth::user()->company->getRolesNotAdmin();
        return view('team.add', compact('roles', 'breadcrumbs'));
    }

    /**
     * Handle Form POST req. to add a new
     * Staff (User) to the Company
     *
     * @param AddStaffRequest $request
     * @param UserMailer $userMailer
     * @return mixed
     */
    public function postSaveStaff(AddStaffRequest $request, UserMailer $userMailer)
    {
        $role = Role::find($request->input('role_id'));
        if (!Gate::allows('attaching', $role)) abort(403, "Selected Role is not allowed: does not belong to Company or is Admin");
        $user = User::make($request->input('name'), $request->input('email'), null, $request->input('role_id'), true);
        Auth::user()->company->addEmployee($user);
        $userMailer->sendNewUserInvitation($user);
        flash()->success('Sent invitation to join ' . ucwords(Auth::user()->company->name));
        return redirect('/team');
    }

    /**
     * Shows View for a single User that
     * is from the same Company
     *
     * @param User $user
     * @return mixed
     */
    public function getSingleUser(User $user)
    {
        if (!Gate::allows('edit', $user)) abort(403, "Not authorized to view that User");
        $breadcrumbs = [
            ['<i class="fa fa-users"></i> Team', '/team'],
            [$user->name, '#']
        ];
        $roles = Auth::user()->company->getRolesNotAdmin()->sortBy('position');
        return view('team.single_user', compact('user', 'breadcrumbs', 'roles'));
    }

    public function putChangeRole(ChangeUserRoleRequest $request, $userId)
    {
        User::find($userId)->setRole($role = Role::find($request->input('role_id')));
        flash()->success('Changed User Role to ' . ucwords($role->position));
        return redirect()->back();
    }

    public function deleteUser(User $user)
    {
        if (!Gate::allows('edit', $user) && !Gate::allows('team_manage') && $user->role->position !== 'admin') abort(403, "Can not delete that User");
        if ($user->delete()) {
            flash()->success('Permanently deleted user');
            return response("Deleted User", 200);
        }
        abort(500, "Something went sideways. Could not delete User");
    }

    /**
     * Returns all the Projects that the currently
     * Authenticated user is a part of
     *
     * @return mixed
     */
    public function apiGetAllProjects()
    {
        return Auth::user()->projects;
    }


}
