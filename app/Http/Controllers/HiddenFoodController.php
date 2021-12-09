<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Helpers\Helpers;
use App\Models\HiddenFood;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\CreateHiddenFoodRequest;
use App\Http\Requests\UpdateHiddenFoodRequest;

class HiddenFoodController extends Controller
{
	public function getAllHiddenFood(Request $request)
	{
		try {
			$hiddenFood = [];

			if ($request->get('coor')) {
				$lastId = 0;
				$centerCoor = Helpers::splitString($request->get('coor'), ',');
				$places = DB::table('hidden_foods')->where("id", ">", $lastId)->limit(30)->get();
				if (count($places) > 0) {
					foreach ($places as $place) {
						$targetCoor = [$place->lat, $place->long];
						$distance = $this->haversineFormula($centerCoor, $targetCoor);

						if ($distance <= 10.00) {
							$hiddenFood[] = $place;
						}
					}
				}
			} else {
				$hiddenFood = HiddenFood::orderBy("status", "desc")->get();
			}

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
			$file = $request->file('thumbnail');

			$hiddenFood = new HiddenFood();
			$hiddenFood->name = $data['name'];
			$hiddenFood->address = $data['address'];
			$hiddenFood->detail_address = $data['detail_address'];
			$hiddenFood->thumbnail = Helpers::randomString().'.'.$file->extension();
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

	private function haversineFormula($centerCoor, $targetCoor)
	{
		$earthRadius = 6371;
		$latFrom = deg2rad($centerCoor[0]);
		$longFrom = deg2rad($centerCoor[1]);
		$latTarget = deg2rad($targetCoor[0]);
		$longTarget= deg2rad($targetCoor[1]);

		$a = $this->hav($latTarget - $latFrom) + (1 - $this->hav($latTarget - $latFrom) - $this->hav($latTarget + $latFrom)) * $this->hav($longTarget - $longFrom);

		$d = 2 * $earthRadius * asin(sqrt($a));

		return $d;
	}

	private function hav($angle)
	{
		return pow(sin($angle / 2), 2);
	}
}
