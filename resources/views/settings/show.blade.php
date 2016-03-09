@extends('layouts.app')
@section('content')
    <div class="container" id="system-settings">
        <a href="{{ route('dashboard') }}" class="back-link no-print"><i class="fa  fa-arrow-left fa-btn"></i>Dashboard</a>
        <div class="page-header">
            <h1 class="page-title">
                System Settings
            </h1>
            <p class="page-intro">Change Application settings to determine what needs approval for whom. Defaults have
                been automatically set for you.</p>
        </div>
        <div class="page-body">
            @include('errors.list')
            <div class="triggers">
                <h5>Monitoring</h5>
                <p>Set triggers and limits for purchase orders. Ensures nothing out of the ordinary slips past, and
                    protocol is always followed.hah</p>
            <form id="form-settings">
                <div class="form-group">
                    <label for="field-po-high-max">
                        <strong>High PO Threshold</strong>
                        <br>
                        Purchase orders with totals over this amount will require <em>Director's</em> approval
                    </label>
                    <div class="input-group col-xs-2">
                        <input type="text" id="field-po-high-max" name="po_high_max"
                               v-model="settings.po_high_max | numberModel" class="form-control text-right">
                        <span class="input-group-addon">Rp</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="field-po-med-max">
                        <strong>Medium PO Threshold</strong>
                        <br>
                        Purchase orders with totals over this amount will require <em>Manager's</em> approval
                    </label>
                    <div class="input-group col-xs-2">
                        <input type="text" id="field-po-med-max" name="po_med_max"
                               v-model="settings.po_med_max | numberModel" class="form-control text-right">
                        <span class="input-group-addon">Rp</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="field-item-md-max">
                        <strong>Maximum Item Mean Difference</strong>
                        <br>
                        Items with a mean difference percentage over this amount will require <em>Manager's</em>
                        approval
                    </label>
                    <div class="input-group col-xs-2">
                        <input type="number" step="1" id="field-item-md-max" name="item_md_max"
                               v-model="settings.item_md_max | percentage" class="form-control text-right">
                        <span class="input-group-addon">%</span>
                    </div>
                </div>
                <!-- Submit -->
                <button type="button" class="btn btn-solid-blue form-control" @click="saveSettings"
                >@{{ saveButtonText }}</button>
            </form>
            </div>
            <div class="roles-permissions">
                <h5>Staff Roles & Permissions</h5>
                <p>Add new roles, then set or modify permissions for what each role can do. Changes are saved
                    automatically and reflected immediately.</p>
                <div class="table-responsive wrap-table-roles">
                    <!-- Roles Table Table -->
                    <table class="table table-bordered table-roles">
                        <thead>
                        <tr>
                            <th></th>
                            @foreach($permissions as $permission)
                                <th>{{ $permission->label }}</th>
                        @endforeach
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="role in roles | orderBy 'position'">
                            <tr class="role-row"
                            v-if="role.position === 'admin' "
                            >
                                <th class="role-position">@{{ role.position }}</th>
                                @foreach($permissions as $permission)
                                    <td><i class="fa fa-circle"></i></td>
                                @endforeach
                            </tr>
                            </tr>
                            <tr class="role-row changeable" v-else>

                                <th class="role-position removable"><span class="overlay clickable" @click="setRemoveRole(role)" data-toggle="modal" data-target="#modal-confirm-remove">Remove</span>@{{ role.position }}</th>

                                @foreach($permissions as $permission)
                                    <td v-if="hasPermission({{ $permission }}, role)"
                                        class="clickable td-has-permission"
                                    @click="removePermission({{ $permission }}, role)"
                                    >
                                    <i class="fa fa-circle"></i>
                                    <i class="fa fa-close"></i>
                                    </td>
                                    <td v-else
                                        class="clickable td-no-permission"
                                    @click="givePermission({{ $permission }}, role)"
                                    >
                                    <i class="fa fa-circle"></i>
                                    </td>
                                @endforeach
                            </tr>
                        </template>
                        <tr class="role-add-row"
                            @click="addRole">
                            <td colspan="10" id="role-add-cell" class="clickable editable editable-click"><a href="#" id="link-add-role">Add New Role</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-roles modal fade" id="modal-confirm-remove" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="vertical-alignment-helper">
                    <div class="modal-dialog vertical-align-center">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="text-center">Are you sure?</h5>
                            </div>
                            <div class="modal-body">
                                <p><strong>Removing a role is irreversible</strong>. Any team members that have those roles will lose all their permissions and won't be able to complete any tasks until you assign them a new role.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                <a class="btn btn-danger btn-ok" @click="removeRole" data-dismiss="modal">Remove</a>
                            </div>
                        </div>
                    </div>
                        </div>
                </div>

            </div>
        </div>
    </div>
@endsection
@section('scripts.footer')
    <script src="{{ asset('/js/page/settings/show.js') }}"></script>
@endsection