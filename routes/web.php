<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {
	Route::view('/', 'user.landing');
	Route::view('/create', 'user.create');
	Route::post('/create', [\App\Http\Controllers\HiddenFoodController::class, 'create']);
	Route::put('/update-thumbnail/{hiddenFood}', [\App\Http\Controllers\HiddenFoodController::class, 'updateThumbnail']);
});

Route::prefix('admin')->group(function () {
	Route::view('/login', 'admin.auth.login')->middleware(['guest']);

	Route::middleware(['auth'])->group(function () {
		Route::view('/', 'admin.dashboard');
	});
});

require __DIR__.'/auth.php';
