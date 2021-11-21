<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Carbon\Carbon;

class HiddenFoodController extends Controller
{
	public function create(Request $request)
	{
		$factory = (new Factory())->withServiceAccount(base_path().env('FIREBASE_CREDENTIALS'));
		$storage = $factory->createStorage();
		$bucket = $storage->getBucket();

		$file = $request->file('image');
		$fileName = Carbon::now()->timestamp.'.'.$file->getClientOriginalExtension();

		$isMoved = $file->move(base_path().'/tmp', $fileName);

		if ($isMoved) {
			$uploadedFile = fopen(base_path() . '/tmp/' . $fileName, 'r');
			$result = $bucket->upload(
				$uploadedFile,
				[
					'name' => $fileName
				]
			);
			dd($result);
		}

	}
}
