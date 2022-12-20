<?php

namespace App\Models;

use App\Mail\SendMessage;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class Message extends Model
{
    use HasFactory;



    protected $guarded = ['id'];


    public function accountingSended()
    {
        return  $this->hasMany(AccountingMessageSending::class,'hash','hash_message_id');
    }

}
