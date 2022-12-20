<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SendTrigerRequest;
use App\Models\AccountingMessageSending;
use App\Models\Fond;
use App\Models\Message;
use App\Models\Trigger;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendTrigger(SendTrigerRequest $request, $id)
    {


        $trigger = Trigger::where(['identificator' => $id])->first();
        if(!$trigger){
            return response()->json(['message' => 'Триггер не найден'],404);
        }

        $data = [];
        $data['identificator'] = $trigger->identificator;
        $data['title'] = $trigger->title;
        $data['body'] = $trigger->body;
        $data['company_id'] = $request->company_id;
        $data['donor_name'] = $request->donor_name;
        $data['target_name'] = $request->target_name;
        $data['trigger_id'] = $trigger->id;
        $data['sum'] = $request->sum;
        $data['org_name'] = $request->org_name;
        $data['email'] = $request->email;
        $data['fond_name'] = $request->email;
        $data['target_id'] = $request->target_id;

        $data['hash'] = hash_generator();

        Fond::createFond($data['email'],$data['company_id'],$data['org_name']);



        $mail =   \Illuminate\Support\Facades\Mail::send('emails.send-message', $data, function ($message) use($data){

        $message->from('user@donation.ru', 'From Name');


            $message->to($data['email']);

            $message->subject($data['body']);


        });
        $message = Message::create($data);
        AccountingMessageSending::storeMassage($data);


        if($message){
            return response()->json(['message' => 'Message successfully sended'],200);
        }
        return response()->json(['message' => 'The server has encountered a situation it does not know how to handle.'],500);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
