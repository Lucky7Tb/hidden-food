<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {
	Route::view('/', 'user.landing');
	Route::view('/create', 'user.create');
	Route::view('/detail/{id}', 'user.detail');
});

Route::prefix('admin')->group(function () {
	Route::view('/login', 'admin.auth.login')->middleware(['guest']);

	Route::middleware(['auth'])->group(function () {
		Route::view('/', 'admin.dashboard');
		Route::view('/hidden-food/{id}', 'admin.edit');
	});
});

require __DIR__.'/auth.php';
