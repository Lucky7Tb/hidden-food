<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\RegisterRequest;

class RegisteredUserController extends Controller
{
	/**
	 * Handle an incoming registration request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\RedirectResponse
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function register(RegisterRequest $request)
	{

		$userData = $request->validated();

		$user = new User();
		$user->email = $userData['email'];
		$user->password = $userData['password'];
		$user->role = $userData['role'];
		$user->is_active = 0;
		$user->is_banned = 0;
		$user->save();

		event(new Registered($user));

		Auth::login($user);

		return redirect(RouteServiceProvider::HOME);
	}
}
