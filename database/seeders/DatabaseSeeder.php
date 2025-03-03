<?php

namespace Database\Seeders;

use App\Models\Sampul;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

     

        Sampul::create([
            'foto_sampul' => '',
            'nama_panggilan_mempelai' => 'Rama & Shinta',
            'ucapan_pembuka' => 'Vindra Arya Yulian'
        ]);
    }
}
