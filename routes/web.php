<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/logout', [AuthController::class, 'logout']);
Route::post('/auth/forgot-password', [AuthController::class, 'sendResetLink']);
Route::post('/auth/reset-password', [AuthController::class, 'reset']);

Route::post('/api/register', [UserController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('/api/admin/users')->group(function(){
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('/{user}', [UserController::class, 'show']);
        Route::put('/{user}', [UserController::class, 'update']);
        Route::delete('/{user}', [UserController::class, 'destroy']);
        Route::put('/{user}/toggle-active', [UserController::class, 'toggleActive']);
    });

     Route::prefix('/api/admin/account')->group(function(){
        Route::get('/me', [AccountController::class, 'show']);
        Route::put('/me', [AccountController::class, 'update']);
        Route::put('/password', [AccountController::class, 'changePassword']);
    });
});

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');
