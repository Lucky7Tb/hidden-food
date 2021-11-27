<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/get-token', function (Request $request){
	return response()->json(["data" => csrf_token()]);
});
