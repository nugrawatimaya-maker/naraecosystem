<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('escrow_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('escrow_number')->unique();
            $table->decimal('total_deal_amount', 15, 2);
            $table->decimal('nara_fee_percentage', 5, 2)->default(7.50);
            $table->decimal('nara_fee_amount', 15, 2);
            $table->decimal('net_released_amount', 15, 2)->default(0);
            $table->string('status')->default('ACTIVE'); // ACTIVE, COMPLETED, DISPUTED
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('escrow_accounts');
    }
};
