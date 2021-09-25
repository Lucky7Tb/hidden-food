<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::view('/', 'landing');

Route::prefix('login')->middleware('guest')->group(function() {
	Route::view('/', 'user.auth.login');
	Route::post('/', [AuthController::class, 'login']);
});

Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth');

Route::prefix('mentee')->middleware(['auth', 'is.mentee'])->group(function() {
	Route::view('/', 'user.mentee.dashboard');
});

Route::prefix('mentor')->middleware(['auth', 'is.mentor'])->group(function() {
	Route::view('/', 'user.mentor.dashboard');
});

Route::prefix('admin')->group(function () {
	Route::view('/login', 'admin.auth.login')->middleware(['guest']);

	Route::middleware(['auth', 'is.admin'])->group(function() {
		Route::view('/', 'admin.dashboard');
	});

});
