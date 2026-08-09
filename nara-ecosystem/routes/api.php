<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\ActorController;
use App\Http\Controllers\Api\v1\ProjectController;
use App\Http\Controllers\Api\v1\DealPromoController;
use App\Http\Controllers\Api\v1\PartnerController;
use App\Http\Controllers\Api\v1\EscrowController;

/*
|--------------------------------------------------------------------------
| NARA Ecosystem REST API v1 Routes
| Prepared for Web Platform (React/Inertia) & Android Native Apps
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    
    // Auth REST Endpoints
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/google-sso', [AuthController::class, 'googleSso']);

    // 12 Ecosystem Actor Categories
    Route::get('/actors', [ActorController::class, 'index']);
    Route::get('/actors/{code}', [ActorController::class, 'show']);

    // Properties & Projects Marketplace Listing
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::post('/projects', [ProjectController::class, 'store']);

    // Deals & Promos ("Lihat Kebutuhanmu Di Sini") Cards
    Route::get('/deals-promos', [DealPromoController::class, 'index']);
    Route::post('/deals-promos', [DealPromoController::class, 'store']);
    Route::delete('/deals-promos/{id}', [DealPromoController::class, 'destroy']);

    // Partners (Strategic Alliances for Running Marquee)
    Route::get('/partners', [PartnerController::class, 'index']);
    Route::post('/partners', [PartnerController::class, 'store']);
    Route::delete('/partners/{id}', [PartnerController::class, 'destroy']);

    // Escrow Account & Fee Simulator
    Route::get('/escrow', [EscrowController::class, 'show']);
    Route::post('/escrow/calculate', [EscrowController::class, 'calculateFee']);

});
