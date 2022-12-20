<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->string('hash')->index();

            $table->unsignedBigInteger('company_id');
            $table->bigInteger('target_id');
            $table->unsignedBigInteger('trigger_id')->nullable();
            $table->string('donor_name');
            $table->string('target_name')->comment('Заголовок');
            $table->float('sum')->nullable();
            $table->string('org_name')->comment('Organization name');
            $table->string('email');


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
        Schema::dropIfExists('messages');
    }
};
