<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'landing');

Route::prefix('mentee')->middleware(['auth', 'is.mentee'])->group(function () {
	Route::view('/', 'user.mentee.dashboard');
	Route::view('/dashboard', 'user.mentee.dashboard')->middleware(['verified']);
});

Route::prefix('mentor')->middleware(['auth', 'is.mentor'])->group(function () {
	Route::view('/', 'user.mentor.dashboard');
});

Route::prefix('admin')->group(function () {
	Route::view('/login', 'admin.auth.login')->middleware(['guest']);

	Route::middleware(['auth', 'is.admin'])->group(function () {
		Route::view('/', 'admin.dashboard');
	});
});

require __DIR__.'/auth.php';
