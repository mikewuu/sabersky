<?php

namespace App\Events;

use App\Events\Event;
use App\PurchaseRequest;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PurchaseRequestUpdated extends Event implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * @var PurchaseRequest
     */
    public $purchaseRequest;

    /**
     * Channels to broadcast on
     * 
     * @var array
     */
    protected $channels;

    /**
     * Create a new event instance.
     *
     * @param PurchaseRequest $purchaseRequest
     */
    public function __construct(PurchaseRequest $purchaseRequest)
    {
        $this->purchaseRequest = $purchaseRequest;

        $this->channels = $this->purchaseRequest->project->teamMembers->pluck('id')->map(function ($id) {
            return 'private-user.' . $id;
        })->toArray();
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return $this->channels;
    }
}
