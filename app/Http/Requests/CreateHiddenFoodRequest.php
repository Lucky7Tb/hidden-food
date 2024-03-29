<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateHiddenFoodRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			"name" => [
				"required",
				"string",
				"max:100"
			],
			"address" => [
				"required"
			],
			"detail_address" => [
				"required"
			],
			"thumbnail" => [
				"required",
				"file",
				"max:1024",
				"mimes:png,jpg,jpeg",
			],
			"lat" => [
				"required"
			],
			"long" => [
				"required"
			]
		];
	}
}
