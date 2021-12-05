<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HiddenFoodController;

Route::get('/hidden-food', [HiddenFoodController::class, 'getAllHiddenFood']);
Route::get('/hidden-food/{hiddenFood}', [HiddenFoodController::class, 'getOneHiddenFood']);
Route::post('/hidden-food', [\App\Http\Controllers\HiddenFoodController::class, 'createHiddenFood']);
Route::put('/hidden-food/{hiddenFood}', [\App\Http\Controllers\HiddenFoodController::class, 'updateHiddenFood']);
Route::put('/hidden-food/{hiddenFood}/update-thumbnail', [\App\Http\Controllers\HiddenFoodController::class, 'updateThumbnail']);
Route::delete('/hidden-food/{hiddenFood}', [\App\Http\Controllers\HiddenFoodController::class, 'deleteHiddenFood']);
