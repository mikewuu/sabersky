<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    /**
     * Mass-fillable fields for Bank Account
     * Information
     *
     * @var array
     */
    protected $fillable = [
        'bank_name',
        'account_name',
        'account_number',
        'bank_phone',
        'bank_address',
        'swift',
        'vendor_id'
    ];
}
