<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditInvitation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Table: Sampul
        Schema::create('sampul', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Nullable foreign key
            $table->unsignedBigInteger('invitation_id')->nullable(); // Nullable foreign key
            $table->string('foto_sampul');
            $table->string('nama_panggilan_mempelai');
            $table->text('ucapan_pembuka');
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitation_created')->onDelete('cascade');
        });

        // Table: Salam Agama
        Schema::create('salam_agama', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Nullable foreign key
            $table->unsignedBigInteger('invitation_id')->nullable(); // Nullable foreign key
            $table->string('agama')->unique();
            $table->string('salam', 300)->unique();
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitation_created')->onDelete('cascade');
        });

        // Table: Data Pria
        Schema::create('data_pria', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Nullable foreign key
            $table->unsignedBigInteger('invitation_id')->nullable(); // Nullable foreign key
            $table->string('foto')->default('default_photo.png'); // Default photo
            $table->string('nama');
            $table->string('nama_panggilan');
            $table->text('informasi')->nullable();
            $table->string('username_ig')->nullable();
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitation_created')->onDelete('cascade');
        });

        // Table: Data Wanita
        Schema::create('data_wanita', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Nullable foreign key
            $table->unsignedBigInteger('invitation_id')->nullable(); // Nullable foreign key
            $table->string('foto')->default('default_photo.png'); // Default photo
            $table->string('nama');
            $table->string('nama_panggilan');
            $table->text('informasi')->nullable();
            $table->string('username_ig')->nullable();
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitation_created')->onDelete('cascade');
        });

        // Table: Acara
        Schema::create('acara', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Nullable foreign key
            $table->unsignedBigInteger('invitation_id')->nullable(); // Nullable foreign key
            $table->string('nama');
            $table->string('alamat');
            $table->date('tanggal');
            $table->time('jam_mulai');
            $table->time('jam_akhir');
            $table->string('tautan_map_acara')->nullable();
            $table->text('embed_kode_map')->nullable();
            $table->string('judul_acara');
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitation_created')->onDelete('cascade');
        });

        // Table: Ucapan Penutup
        Schema::create('ucapan_penutup', function (Blueprint $table) {
            $table ->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Nullable foreign key
            $table->unsignedBigInteger('invitation_id')->nullable(); // Nullable foreign key
            $table->text('ucapan_penutup');
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitation_created')->onDelete('cascade');
        });

        // Table: Template Ucapan
        Schema::create('template_ucapan', function (Blueprint $table) {
            $table->id();
            $table->text('doa');
            $table->text('pembuka');
            $table->text('penutup');
            $table->timestamps();
        });

        // Table: Cerita
        Schema::create('cerita', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Nullable foreign key
            $table->unsignedBigInteger('invitation_id')->nullable(); // Nullable foreign key
            $table->string('judul');
            $table->string('sub_judul')->nullable();
            $table->text('cerita');
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitation_created')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cerita');
        Schema::dropIfExists('template_ucapan');
        Schema::dropIfExists('ucapan_penutup');
        Schema::dropIfExists('acara');
        Schema::dropIfExists('data_wanita');
        Schema::dropIfExists('data_pria');
        Schema::dropIfExists('salam_agama');
        Schema::dropIfExists('sampul');
    }
}