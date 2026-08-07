<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('actor_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('actor_code')->unique(); // e.g. 'investor', 'developer', 'kontraktor', etc.
            $table->string('name');
            $table->string('short_name');
            $table->string('badge');
            $table->text('kebutuhan');
            $table->text('nilai_platform');
            $table->string('vector_icon');
            $table->string('icon_bg');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('actor_profiles');
    }
};
