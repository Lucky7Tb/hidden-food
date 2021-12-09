<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class Helpers
{
	public static function randomString($length = 8)
	{
		return Str::random($length);
	}

	public static function splitString($string, $delimiter)
	{
		return Str::of($string)->explode($delimiter);
	}
}
