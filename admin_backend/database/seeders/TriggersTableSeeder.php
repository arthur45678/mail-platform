<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TriggersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('triggers')->delete();

        \DB::table('triggers')->insert(array (
            0 =>
            array (
                'body' => 'Test text',
                'created_at' => NULL,
                'id' => 1,
                'identificator' => 'test_success_donation_reccurent',
                'title' => 'Test message',
                'trigger_type' => 'dgd',
                'updated_at' => NULL,
            ),
        ));


    }
}
