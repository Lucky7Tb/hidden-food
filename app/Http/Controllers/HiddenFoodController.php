<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateHiddenFoodRequest;
use App\Http\Requests\UpdateHiddenFoodRequest;
use App\Models\HiddenFood;
use Illuminate\Http\Request;
use Carbon\Carbon;

class HiddenFoodController extends Controller
{
	public function getAllHiddenFood(Request $request)
	{
		try {
			$hiddenFood = HiddenFood::orderBy("status", "desc");
			if ($request->get('status')) {
				$hiddenFood = $hiddenFood->where("status", $request->get("status"));
			}

			$hiddenFood = $hiddenFood->get();

			return response()->json([
				"message" => "Success get hidden food",
				"data" => $hiddenFood
			], 200);
		} catch (\Exception $e) {
			return response()->json([
				"message" => "Terjadi kesalahan pada server",
				"data" => []
			], 500);
		}
	}

	public function getOneHiddenFood(HiddenFood $hiddenFood)
	{
		try {
			return response()->json([
				"message" => "Success get hidden food",
				"data" => $hiddenFood
			], 200);
		} catch (\Exception $e) {
			return response()->json([
				"message" => "Terjadi kesalahan pada server",
				"data" => []
			], 500);
		}
	}

	public function createHiddenFood(CreateHiddenFoodRequest $request)
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

	public function deleteHiddenFood(HiddenFood $hiddenFood)
	{
		try {
			$hiddenFoodImage = $hiddenFood->thumbnail;
			$hiddenFood->delete();
			return response()->json([
				"message" => "Success delete hidden food",
				"data" => $hiddenFoodImage
			], 200);
		} catch (\Exception $e) {
			return response()->json([
				"message" => "Terjadi kesalahan pada server",
				"data" => []
			], 500);
		}
	}

	public function updateHiddenFood(UpdateHiddenFoodRequest $request, HiddenFood $hiddenFood)
	{
		try {
			$hiddenFoodData = $request->validated();
			$hiddenFood->name = $hiddenFoodData['name'];
			$hiddenFood->address = $hiddenFoodData['address'];
			$hiddenFood->detail_address = $hiddenFoodData['detail_address'];
			$hiddenFood->status = $hiddenFoodData['status'];
			$hiddenFood->lat = $hiddenFoodData['lat'];
			$hiddenFood->long = $hiddenFoodData['long'];
			$hiddenFood->updated_at = Carbon::now();
			$hiddenFood->save();
			return response()->json([
				"message" => "Success update hidden food",
				"data" => $hiddenFood
			], 200);
		} catch (\Exception $e) {
			return response()->json([
				"message" => "Terjadi kesalahan pada server",
				"data" => $e->getMessage()
			], 500);
		}
	}

	public function updateThumbnail(HiddenFood $hiddenFood, Request $request)
	{
		try {
			$hiddenFood->thumbnail = $request->thumbnail;
			$hiddenFood->save();
			return response()->json([
				"message" => "Success update image",
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
