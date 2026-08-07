<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('properties_projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_code')->unique();
            $table->string('title');
            $table->string('category');
            $table->string('location');
            $table->decimal('target_investment', 15, 2);
            $table->decimal('collected_investment', 15, 2)->default(0);
            $table->string('projected_roi');
            $table->string('risk_score')->default('Low Risk (95/100)');
            $table->string('assigned_notary')->nullable();
            $table->string('assigned_contractor')->nullable();
            $table->string('image')->nullable();
            $table->text('description');
            $table->string('status')->default('OPEN'); // OPEN, IN_PROGRESS, COMPLETED
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('properties_projects');
    }
};
