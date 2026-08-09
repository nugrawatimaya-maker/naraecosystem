<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EscrowAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'escrow_number',
        'total_deal_amount',
        'nara_fee_percentage',
        'nara_fee_amount',
        'net_released_amount',
        'status',
    ];
}
