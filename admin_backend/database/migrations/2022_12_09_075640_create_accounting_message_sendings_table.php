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
        Schema::create('accounting_message_sendings', function (Blueprint $table) {
            $table->id();
            $table->string('hash_message_id')->index();
            $table->foreign('hash_message_id')->references('hash')->on('messages')
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->bigInteger('target_id');
            $table->unsignedBigInteger('trigger_id')->nullable();
            $table->string('donor_name');
            $table->string('target_name')->comment('Заголовок');
            $table->float('sum')->nullable();
            $table->string('org_name')->comment('Organization name');
            $table->string('email');
            $table->boolean('opened')->default(0)->comment('User opened message (0 - no opened, 1 - opened)');
            $table->dateTime('opened_at')->comment('user message open time')->nullable();
            $table->string('status')->comment('Учет отправки писем')->default(\App\Models\AccountingMessageSending::STATUS_WAITING);
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
        Schema::dropIfExists('accounting_message_sendings');
    }
};
