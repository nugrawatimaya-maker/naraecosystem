<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'google_id')) {
                $table->string('google_id')->nullable()->unique()->after('email');
            }
            if (!Schema::hasColumn('users', 'avatar')) {
                $table->string('avatar')->nullable()->after('google_id');
            }
            if (!Schema::hasColumn('users', 'phone')) {
                $table->string('phone')->nullable()->after('avatar');
            }
            if (!Schema::hasColumn('users', 'role')) {
                $table->string('role')->default('investor')->after('phone');
            }
            if (!Schema::hasColumn('users', 'google_token')) {
                $table->text('google_token')->nullable()->after('role');
            }
            if (!Schema::hasColumn('users', 'google_refresh_token')) {
                $table->text('google_refresh_token')->nullable()->after('google_token');
            }
            // Jadikan password nullable untuk login via Google SSO
            $table->string('password')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'google_id',
                'avatar',
                'phone',
                'role',
                'google_token',
                'google_refresh_token'
            ]);
        });
    }
};
