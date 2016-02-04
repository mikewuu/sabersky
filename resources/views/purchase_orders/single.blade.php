@extends('layouts.app')
@section('content')
    <div class="container" id="purchase-order-single">
        <div class="po-single-status">
            <h2 class="{{ $purchaseOrder->status }}">{{ $purchaseOrder->status }}</h2>
            @if($purchaseOrder->status == 'pending')
                @can('approve', $purchaseOrder)
                <div class="buttons-approvals no-print">
                    <form action="{{ route('approvePurchaseOrder') }}" id="form-approve-po" method="POST">
                        {{ csrf_field() }}
                        <input name="purchase_order_id" type="hidden" value="{{ $purchaseOrder->id }}">
                        <button type="submit" class="btn btn-solid-green">Approve</button>
                    </form>
                    <form action="{{ route('rejectPurchaseOrder') }}" id="form-approve-po" method="POST">
                        {{ csrf_field() }}
                        <input name="purchase_order_id" type="hidden" value="{{ $purchaseOrder->id }}">
                        <button type="submit" class="btn btn-outline-red">Reject</button>
                    </form>
                </div>
                @endcan
            @endif
        </div>
        <div class="page-header">
            <h1 class="page-title">Purchase Order #{{ $purchaseOrder->id }}</h1>
        </div>
        <div class="po-single-top">
            <ul class="vendor-details list-unstyled">
                <li>
                    <strong>{{ $purchaseOrder->vendor->name }}</strong>
                </li>
                <li>
                    {{ $purchaseOrder->vendor->phone }}
                </li>
                <li>
                    {{ $purchaseOrder->vendor->address }}
                </li>
                <li>
                    <strong>Bank:</strong> {{ $purchaseOrder->vendor->bank_name }}
                </li>
                <li>
                    <strong>Account Name:</strong> {{ $purchaseOrder->vendor->bank_account_name }}
                </li>
                <li>
                    <strong>Account Number:</strong> {{ $purchaseOrder->vendor->bank_account_number }}
                </li>
            </ul>

            <ul class="meta-details list-unstyled">
                <li>{{ $purchaseOrder->created_at->format('d M Y') }}</li>
                <li>{{ $purchaseOrder->project->name }}</li>
                <li>{{ $purchaseOrder->user->name }}</li>
            </ul>
        </div>
        <div class="table-responsive">
            <h5>Order Items</h5>
            <!-- Single PO Table -->
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Specification</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                    <th>Payable</th>
                    <th>Delivery</th>
                </tr>
                </thead>
                <tbody>
                @foreach($purchaseOrder->lineItems as $lineItem)
                    <tr>
                        <td>{{ $lineItem->purchaseRequest->item->name }}</td>
                        <td>{{ $lineItem->purchaseRequest->item->specification }}</td>
                        <td>{{ $lineItem->quantity }}</td>
                        <td>{{ $lineItem->price }}</td>
                        <td>{{ $lineItem->quantity * $lineItem->price }}</td>
                        <td>{{ $lineItem->payable->format('d M Y') }}</td>
                        <td>{{ $lineItem->delivery->format('d M Y') }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
        <div class="order-summary">
            <div class="second-border">
                <p class="total"><strong>Order Total {{ number_format($purchaseOrder->total) }} Rp</strong></p>
            </div>
        </div>
        <div class="pr-serviced">

        </div>
    </div>
@endsection