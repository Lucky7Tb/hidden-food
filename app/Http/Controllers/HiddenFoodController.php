<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateHiddenFoodRequest;
use App\Models\HiddenFood;
use Illuminate\Http\Request;
use Carbon\Carbon;

class HiddenFoodController extends Controller
{
	public function create(CreateHiddenFoodRequest $request)
	{
		try {
			$data = $request->validated();
			$hiddenFood = new HiddenFood();
			$hiddenFood->name = $data['name'];
			$hiddenFood->address = $data['address'];
			$hiddenFood->detail_address = $data['detail_address'];
			$hiddenFood->lat = $data['lat'];
			$hiddenFood->long = $data['long'];
			$hiddenFood->created_at = Carbon::now();
			$hiddenFood->updated_at = Carbon::now();
			$hiddenFood->save();
			return response()->json([
				"message" => "Berhasil memasukan data ke database",
				"data" => $hiddenFood
			], 201);
		} catch (\Exception $e) {
			return response()->json([
				"message" => "Terjadi kesalahan pada server",
				"data" => []
			], 500);
		}
	}

	public function updateThumbnail(HiddenFood $hiddenFood, Request $request)
	{
		try {
			$hiddenFood->thumbnail = $request->thumbnail;
			$hiddenFood->save();
			return response()->json([
				"message" => "Berhasil update image",
				"data" => $hiddenFood
			], 200);
		} catch (\Exception $e) {
			return response()->json([
				"message" => "Terjadi kesalahan pada server",
				"data" => []
			], 500);
		}
	}
}
