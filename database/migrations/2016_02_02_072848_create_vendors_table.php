<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->string('name');
            $table->string('description');

            // The Company that this Vendor record belongs to
            $table->integer('buyer_company_id')->unsigned();
            $table->foreign('buyer_company_id')->references('id')->on('companies');

            // If this Vendor profile points to a registered Company
            $table->boolean('verified')->default(0);
            $table->integer('seller_company_id')->unsigned()->nullable();
            $table->foreign('seller_company_id')->references('id')->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('vendors');
    }
}
