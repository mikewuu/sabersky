<?php

namespace App;

use App\Events\LineItemUpdated;
use App\Utilities\Traits\RecordsActivity;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Event;

/**
 * App\LineItem
 *
 * @property integer $id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property integer $quantity
 * @property float $price
 * @property \Carbon\Carbon $payable
 * @property \Carbon\Carbon $delivery
 * @property boolean $delivered
 * @property boolean $paid
 * @property string $status
 * @property integer $purchase_order_id
 * @property integer $purchase_request_id
 * @property-read \App\PurchaseRequest $purchaseRequest
 * @property-read \App\PurchaseOrder $purchaseOrder
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem whereQuantity($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem wherePrice($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem wherePayable($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem whereDelivery($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem whereDelivered($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem wherePaid($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem whereStatus($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem wherePurchaseOrderId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\LineItem wherePurchaseRequestId($value)
 * @mixin \Eloquent
 * @property-read mixed $total
 * @property-read mixed $received
 * @property-read mixed $accepted
 * @property-read mixed $returned
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Activity[] $activities
 */
class LineItem extends Model
{
    use RecordsActivity;

    protected $fillable = [
        'quantity',
        'price',
        'payable',
        'delivery',
        'paid',
        'status',
        'purchase_order_id',
        'purchase_request_id'
    ];

    protected $dates = [
        'payable',
        'delivery'
    ];

    protected $appends = [
        'total',
        'received',
        'accepted',
        'returned'
    ];

    /**
     * Set 'payable' field as Carbon Date
     *
     * @param $value
     */
    public function setPayableAttribute($value)
    {
        if($value) $this->attributes['payable'] = Carbon::createFromFormat('d/m/Y', $value);
    }

    /**
     * Set 'delivery' as Carbon Date
     *
     * @param $value
     */
    public function setDeliveryAttribute($value)
    {
        if($value) $this->attributes['delivery'] = Carbon::createFromFormat('d/m/Y', $value);
    }

    /**
     * Line Item is fulfilling a single Purchase Request
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function purchaseRequest()
    {
        return $this->belongsTo(PurchaseRequest::class);
    }

    /**
     * Line Item can only also belong to one Purcahse Order
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function purchaseOrder()
    {
        return $this->belongsTo(PurchaseOrder::class);
    }

    /**
     * Calculated total for Line Item
     *
     * @return float
     */
    public function getTotalAttribute()
    {
        return $this->price * $this->quantity;
    }

    /**
     * Create and record a Line Item
     *
     * @param $attributes
     * @param User $user
     * @return static
     * @throws \Exception
     */
    public static function add($attributes, User $user)
    {
        $lineItem = static::create($attributes);
        $user->recordActivity('added', $lineItem);
        return $lineItem;
    }

    /**
     * Takes a limit and sees if this Line Item's total (price * quantity)
     * is over the limit.
     *
     * Tested in RuleTest
     *
     * @param $limit
     * @return bool
     */
    public function totalExceeds($limit)
    {
        return $this->total > $limit;
    }

    /**
     * Check if the Item this Line Item is servicing's price is over the Item's mean
     * by a percentage (0 - 100)
     *
     * @param $percentage
     * @return bool
     */
    public function priceOverMeanPercentageIsGreaterThan($percentage)
    {
        $orderCurrencyID = $this->purchaseOrder->currency_id;
        if(! $itemMean = $this->purchaseRequest->item->getMean($orderCurrencyID)) return false;
        $meanDiff = ($this->price - $itemMean) / $itemMean;
        return $meanDiff > ($percentage / 100);
    }

    /**
     * Mark Line Item as paid
     *
     * @param User $user
     * @return $this
     * @throws \Exception
     */
    public function markPaid(User $user)
    {
        $this->paid = 1;
        $this->save();
        Event::fire(new LineItemUpdated($this));
        $user->recordActivity('paid', $this);
        return $this;
    }

    /**
     * Mark Line Item delivered and with a status that indicates
     * whether the item received was all good.
     *
     * @param $status
     * @param User $user
     * @return $this
     * @throws \Exception
     */
    public function markReceived($status, User $user)
    {
        $allowedStatuses = ['accepted', 'returned'];
        if(! in_array($status, $allowedStatuses)) abort(500, "Invalid line item status");
        $this->status = $status;
        $this->save();
        Event::fire(new LineItemUpdated($this));
        $user->recordActivity('received', $this);
        return $this;
    }

    /**
     * Dynamic Attribute - Has the item been delivered?
     *
     * @return bool
     */
    public function getReceivedAttribute()
    {
        return $this->status !== 'unreceived';
    }

    /**
     * Dynamic Attribute - is status Accepted?
     *
     * @return bool
     */
    public function getAcceptedAttribute()
    {
        return $this->status === 'accepted';
    }

    /**
     * Dynamic Attribute - is status Returned?
     *
     * @return bool
     */
    public function getReturnedAttribute()
    {
        return $this->status === 'returned';
    }


    /**
     * Record this Line Item as 'rejected' by a User
     *
     * @param User $user
     * @throws \Exception
     */
    public function recordRejectedBy(User $user)
    {
        $user->recordActivity('rejected', $this);
    }


}
