<?php

namespace App\Http\Controllers;

use App\Models\AccountingMessageSending;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TrackingController extends Controller
{
    public function getLogo($hash)
    {

        $accounting = AccountingMessageSending::where(['hash_message_id' => $hash])->first();
        $accounting->opened =1;
        $accounting->opened_at = Carbon::now();

        $accounting->save();
        return $accounting;

        /*file_get_contents(public_path('./images/logo.png'))
            ->header('content-type', 'image/gif');*/
    }
}
