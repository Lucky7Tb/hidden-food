<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('users')->insert([
			[
				'email' => 'mentee@mail.com',
				'password' => Hash::make('password'),
				'role' => 'mentee',
				'is_active' => 1,
				'is_banned' => 0,
				'email_verified_at' => Carbon::now(),
				'created_at' => Carbon::now(),
				'updated_at' => Carbon::now()
			],
			[
				'email' => 'mentor@mail.com',
				'password' => Hash::make('password'),
				'role' => 'mentor',
				'is_active' => 1,
				'is_banned' => 0,
				'email_verified_at' => Carbon::now(),
				'created_at' => Carbon::now(),
				'updated_at' => Carbon::now()
			],
			[
				'email' => 'admin@mail.com',
				'password' => Hash::make('password'),
				'role' => 'admin',
				'is_active' => 1,
				'is_banned' => 0,
				'email_verified_at' => Carbon::now(),
				'created_at' => Carbon::now(),
				'updated_at' => Carbon::now()
			],
		]);
	}
}
