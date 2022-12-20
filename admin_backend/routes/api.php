<?php

use App\Http\Controllers\Api\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TriggerController;
use App\Http\Controllers\Api\SendController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AccountMessageController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::get('/test',[\App\Http\Controllers\TestCntroller::class,'index']);

Route::middleware(['auth:sanctum'])->group(function () {
   // Route::apiResource('users', UserController::class);
    Route::resource('users', UserController::class);
    Route::get('user', [UserController::class,'user']);
    Route::put('users/info',[UserController::class,'updateInfo']);
    Route::put('users/password', [UserController::class,'updatePassword']);

    Route::apiResource('triggers', TriggerController::class);



  //  return $request->user();


});

Route::get('/test', [\App\Http\Controllers\TestCntroller::class, 'index']);


Route::get('/get-logo/{hash}', [\App\Http\Controllers\TrackingController::class, 'getLogo']);


Route::apiResource('accounting-messages', AccountMessageController::class);
Route::get('/send-trigger/{id}', [SendController::class, 'sendTrigger']);
