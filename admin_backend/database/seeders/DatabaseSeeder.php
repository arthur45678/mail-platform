<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\User::factory(10)->create();
         \App\Models\User::factory()->create([
           'first_name' => 'Admin',
           'last_name' => 'Admin',
           'email' => 'admin@example.com',
         ]);
        $this->call(TriggersTableSeeder::class);
    }
}
