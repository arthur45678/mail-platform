<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestCntroller extends Controller
{
    public function index()
    {
        $data = [];
        $data['target_name'] = 'Test';
        $data['donor_name'] = 'Test name';
        $data['email'] = 'arthur45678@list.ru';
        $data['sum'] = 000;

        $mail = \Mail::send('email.emailSended',
            $data, function($message)
            {
                $message->to('arthur45678@list.ru');
                $message->subject('Test message');

            });


        /*Test*/
        exit('777');
        /*Testend*/

    }
}
