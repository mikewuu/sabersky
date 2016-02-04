@extends('layouts.app')
@section('content')
    <div id="purchase-orders-all" class="container">
        <a href="{{ route('dashboard') }}" class="back-link no-print"><i class="fa  fa-arrow-left fa-btn"></i>Dashboard</a>
        <div class="page-header">
            <h1 class="page-title">Purchase Orders</h1>
        </div>
        <p>Purchase orders which have been submitted by the Procurement team.</p>
        @can('po_submit')
        <a href="{{ route('submitPurchaseOrder') }}">
            <button class="btn btn-solid-green" id="button-submit-purchase-order">Submit Purchase Order</button>
        </a>
        @endcan
        <div class="purchase-orders-filters table-filters">
            <ul class="list-unstyled list-inline">
                <li
                        v-for="status in statuses"
                        class="unselectable"
                        @click="changeFilter(status.key)"
                        :class="{
                            'active': filter == status.key
                        }"
                >
                    @{{ status.label }}
                </li>
            </ul>
            <span class="filter-urgent unselectable"
            @click="toggleUrgent"
            :class="{ 'active': urgent}"
            >
            Urgent Only</span>
        </div>
        <div class="table-responsive">
            <!-- PO All Table -->
            <table class="table table-hover table-sort">
                <thead>
                <tr>
                    {{--<th>Date Submitted</th>--}}
                    {{--<th>Project</th>--}}
                    {{--<th>Item(s)</th>--}}
                    {{--<th>Order Total</th>--}}
                    {{--<th class="text-center">Approved</th>--}}
                    <template v-for="heading in headings">
                        <th v-if="heading[0] !== ''"
                        @click="changeSort(heading[0])"
                        class="unselectable"
                        :class="{
                                'active': field == heading[0],
                                'asc' : order == '',
                                'desc': order == '-1'
                        }"
                        >
                        @{{ heading[1] }}
                        </th>
                        <th v-else>
                            @{{ heading[1] }}
                        </th>
                    </template>

                </tr>
                </thead>
                <tbody>
                <template v-for="purchaseOrder in purchaseOrders | orderBy field order | filterBy filter in 'status'">
                    <tr
                        :class="{
                            'urgent': checkUrgent(purchaseOrder)
                        }"
                        v-show="! urgent || checkUrgent(purchaseOrder)"
                    >
                        <td>@{{ purchaseOrder.created_at | easyDate}}</td>
                        <td>@{{ purchaseOrder.project.name }}</td>
                        <td>
                            <ul class="po-item-list list-unstyled">
                                <li v-for="lineItem in purchaseOrder.line_items">
                                    - @{{ lineItem.purchase_request.item.name }}
                                </li>
                            </ul>
                        </td>
                        <td>
                            @{{ purchaseOrder.total | numberFormat }} Rp
                        </td>
                        <td class="text-center">
                            <span class="fa fa-check"
                            v-if="purchaseOrder.status =='approved'"
                            ></span>
                            <span class="fa fa-close"
                                  v-if="purchaseOrder.status == 'rejected'"
                            ></span>
                            <span class="fa fa-warning"
                                  v-if="purchaseOrder.status == 'pending'"
                            ></span>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
@endsection