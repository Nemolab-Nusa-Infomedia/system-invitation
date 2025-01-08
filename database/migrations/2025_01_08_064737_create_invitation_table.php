<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // invitation_created
        Schema::create('invitation_created', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('created_by');
            $table->timestamp('created_at')->useCurrent();
        });

        // payment
        Schema::create('payment', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('category');
            $table->timestamp('payment_date')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->boolean('status');
            $table->string('payment_method')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
        });

        // events
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('event_name');
            $table->string('event_type');
            $table->date('event_date');
            $table->string('location')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
        });

        // gallery
        Schema::create('gallery', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('event_id')->nullable();
            $table->string('media_type');
            $table->string('media_url');
            $table->string('description')->nullable();
            $table->timestamps();
            $table->foreign('event_id')->references('id')->on('events')->onDelete('set null');
        });

        // testimonials
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('event_id')->nullable();
            $table->text('content');
            $table->integer('rating');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('event_id')->references('id')->on('events')->onDelete('set null');
        });

        // invitation_tema
        Schema::create('invitation_tema', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->timestamps();
        });

        // example_invitation
        Schema::create('example_invitation', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('link')->nullable();
            $table->string('thumbnail')->nullable();
            $table->unsignedBigInteger('tema_id')->nullable();
            $table->timestamps();
            $table->foreign('tema_id')->references('id')->on('invitation_tema')->onDelete('set null');
        });

        // invitation_list
        Schema::create('invitation_list', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->decimal('price', 10, 2);
            $table->string('thumbnail')->nullable();
            $table->unsignedBigInteger('tema_id')->nullable();
            $table->timestamps();
            $table->foreign('tema_id')->references('id')->on('invitation_tema')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('invitation_created');
        Schema::dropIfExists('payment');
        Schema::dropIfExists('events');
        Schema::dropIfExists('gallery');
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('invitation_tema');
        Schema::dropIfExists('example_invitation');
        Schema::dropIfExists('invitation_list');
    }
};
