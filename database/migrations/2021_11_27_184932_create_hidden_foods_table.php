<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHiddenFoodsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('hidden_foods', function (Blueprint $table) {
			$table->id();
			$table->string('name', 100);
			$table->text('address');
			$table->text('detail_address');
			$table->string('thumbnail', 80)->nullable();
			$table->text('lat');
			$table->text('long');
			$table->enum('status', ['NOT_ACTIVE', 'ACTIVE'])->default('NOT_ACTIVE');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('hidden_foods');
	}
}
