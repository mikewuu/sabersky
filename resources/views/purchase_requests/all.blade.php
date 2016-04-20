@extends('layouts.app')
@section('content')
    <purchase-requests-all inline-template>
        <div class="container" id="purchase-requests-all">
            @can('pr_make')
            <div class="top align-end">
                <a href="{{ route('makePurchaseRequest') }}" class="link-make-pr">
                    <button class="btn btn-solid-green" id="button-make-purchase-request">Make Purchase Request</button>
                </a>
            </div>
            @endcan
            <div class="page-body">
                <div class="pr-controls">
                    <div class="pr-filters dropdown" v-dropdown-toggle="showFilterDropdown">
                        <button type="button"
                                class="btn button-show-filter-dropdown button-toggle-dropdown"
                                v-if="response.data"
                        >@{{ response.data.filter | capitalize }} <i
                                    class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-filters dropdown-container left"
                             v-show="showFilterDropdown"
                        >
                            <span class="dropdown-title">View Status</span>
                            <ul class="list-unstyled">
                                <li class="pr-dropdown-item"
                                    v-for="filter in filters"
                                    @click="changeFilter(filter)"
                                    :class="{
                                        'all': filter.name === 'all'
                                    }"
                                >
                                @{{ filter.label }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="control-urgent">
                        <input type="checkbox"
                               id="checkbox-pr-urgent"
                               v-model="urgent"
                        @click="toggleUrgentOnly"
                        >
                        <label class="clickable"
                               for="checkbox-pr-urgent"
                        ><i class="fa fa-warning badge-urgent"></i> Urgent only</label>
                    </div>
                </div>
                <div class="has-purchase-requests" v-if="response.total > 0">
                    <div class="pr-bag table-responsive">
                        <table class="table table-bordered table-hover table-standard table-purchase-requests-all">
                            <thead>
                            <tr>
                                <th class="clickable"
                                @click="changeSort('number')"
                                :class="{
                                            'current_asc': sort === 'number' && order === 'asc',
                                            'current_desc': sort === 'number' && order === 'desc'
                                        }"
                                >
                                PR
                                </th>
                                <th class="clickable"
                                @click="changeSort('project_name')"
                                :class="{
                                            'current_asc': sort === 'project_name' && order === 'asc',
                                            'current_desc': sort === 'project_name' && order === 'desc'
                                        }"
                                >
                                Project
                                </th>
                                <th class="clickable heading-center"
                                @click="changeSort('quantity')"
                                :class="{
                                            'current_asc': sort === 'quantity' && order === 'asc',
                                            'current_desc': sort === 'quantity' && order === 'desc'
                                        }"
                                >
                                Qty
                                </th>
                                <th class="clickable"
                                @click="changeSort('item_name')"
                                :class="{
                                            'current_asc': sort === 'item_name' && order === 'asc',
                                            'current_desc': sort === 'item_name' && order === 'desc'
                                        }"
                                >
                                Item
                                </th>
                                <th class="clickable"
                                @click="changeSort('due')"
                                :class="{
                                            'current_asc': sort === 'due' && order === 'asc',
                                            'current_desc': sort === 'due' && order === 'desc'
                                        }"
                                >
                                Due</th>
                                <th class="clickable"
                                @click="changeSort('created_at')"
                                :class="{
                                            'current_asc': sort === 'created_at' && order === 'asc',
                                            'current_desc': sort === 'created_at' && order === 'desc'
                                        }"
                                >
                                Requested
                                </th>
                                <th class="clickable"
                                @click="changeSort('requester_name')"
                                :class="{
                                            'current_asc': sort === 'requester_name' && order === 'asc',
                                            'current_desc': sort === 'requester_name' && order === 'desc'
                                        }"
                                >
                                By
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="purchaseRequest in response.data">
                                <tr class="row-single-pr" v-if="purchaseRequest.id">
                                    <td class="no-wrap col-number"><a :href="'/purchase_requests/' + purchaseRequest.id"
                                                                      alt="Link to single PR"
                                                                      class="underline">#@{{ purchaseRequest.number }}</a><span
                                                v-if="purchaseRequest.urgent" class="badge-urgent"> <i
                                                    class="fa fa-warning"></i></span></td>
                                    <td class="col-project"><a :href="'/projects/' + purchaseRequest.project.id"
                                                               alt="project link">@{{ purchaseRequest.project.name }}</a>
                                    </td>
                                    <td class="col-quantity">@{{ purchaseRequest.quantity }}</td>
                                    <td class="col-item">
                                        <div class="item-sku"
                                             v-if="purchaseRequest.item.sku && purchaseRequest.item.sku.length > 0">@{{ purchaseRequest.item.sku }}</div>
                                        <a :href="'/items/' + purchaseRequest.item.id" alt="item link">
                                            <span class="item-brand"
                                                  v-if="purchaseRequest.item.brand.length > 0">@{{ purchaseRequest.item.brand }}</span>
                                            <span class="item-name">@{{ purchaseRequest.item.name }}</span>
                                        </a>
                                        <ul class="item-image-gallery list-unstyled list-inline"
                                            v-if="purchaseRequest.item.photos.length > 0">
                                            <li v-for="photo in purchaseRequest.item.photos">
                                                <a :href="photo.path" rel="group" class="fancybox"><img
                                                            :src="photo.thumbnail_path"
                                                            alt="Purchase Request Item Photo"></a>
                                            </li>
                                        </ul>
                                        <span class="item-specification">
                                        <text-clipper :text="purchaseRequest.item.specification"></text-clipper></span>
                                    </td>
                                    <td class="no-wrap">
                                        <span class="pr-due">@{{ purchaseRequest.due | easyDate }}</span>
                                    </td>
                                    <td>
                                        <span class="pr-requested">@{{ purchaseRequest.created_at | diffHuman }}</span>
                                    </td>
                                    <td>
                                        <span class="pr-requester">@{{ purchaseRequest.user.name | capitalize }}</span>
                                    </td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="page-controls">
                        <per-page-picker :response="response" :req-function="fetchPurchaseRequests"></per-page-picker>
                        <paginator :response="response" :req-function="fetchPurchaseRequests"></paginator>
                    </div>
                </div>
                <div class="no-purchase-requests empty-stage" v-else>
                    <i class="fa fa-shopping-basket"></i>
                    <h3>Could not find any Purchase Requests</h3>
                    <p>Try changing filters or create a new request</p>
                </div>

            </div>
        </div>
    </purchase-requests-all>
@endsection
