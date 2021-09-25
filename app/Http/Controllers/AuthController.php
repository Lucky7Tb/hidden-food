<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;

class AuthController extends Controller
{
	public function login(LoginRequest $loginRequest)
	{
		$credential = $loginRequest->validated();

		$isMatch = Auth::attempt($credential);

		if ($isMatch) {
			$loginRequest->session()->regenerate();

			switch(Auth::user()->role) {
				case 'metee':
					return redirect()->intended('/metee');
				case 'mentor':
					return redirect()->intended('/mentor');
				case 'admin':
					return redirect()->intended('/admin');
			}
		}

		return back()->withErrors([
			'error-login' => 'Akun tidak ditemukan'
		]);
	}

	public function logout()
	{
		Auth::logout();

		return redirect('/');
	}
}
