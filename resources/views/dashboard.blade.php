@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2 class="page-title">{{ ucfirst(Auth::user()->role->position) }} Dashboard</h2>
                <div id="dashboard-nav">
                    <div class="row">
                        <div class="col-sm-4"><a class="dashboard-link" href="/projects">Projects</a></div>
                        <div class="col-sm-4"><a class="dashboard-link" href="/purchase_requests">Purchase Requests</a>
                        </div>
                        <div class="col-sm-4"><a class="dashboard-link" href="/vendors">Vendors</a></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4"><a class="dashboard-link" href="/items">Items</a></div>
                        <div class="col-sm-4"><a class="dashboard-link" href="/purchase_orders">Purchase Orders</a>
                        </div>
                        @can('report_view')
                        <div class="col-sm-4"><a class="dashboard-link" href="/reports">Reports</a></div>
                        @endcan
                    </div>
                    <div class="row">
                        @can('settings_view')
                        <div class="col-sm-4"><a class="dashboard-link" href="/settings">Settings</a></div>
                        @endcan
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection