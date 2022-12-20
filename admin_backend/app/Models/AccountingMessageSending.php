<?php

namespace App\Models;

use App\Mail\SendMessage;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;

class AccountingMessageSending extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    /**
     * Статусы отправки писбма.
     */

    const STATUS_WAITING = 'wait';
    const STATUS_SENT = 'sent'; //Отправлено
    const STATUS_READ = 'raed'; // ролчитано
    const STATUS_CLICKED = 'clicked'; // Кликнуто (было взаимодействие с письмом, нажатие на cta кнопку например)
    const STATUS_DELIVERY_ERROR = 'delivery_error';
    const STATUS_BLOCKED = 'Заблокировано';
    const STATUS_SENT_TO_SPAM = 'sent_to_spam';
    const STATUS_UNSUBSCRIBE = 'Отписка';

    public function message()
    {
        return  $this->belongsTo(Message::class,'hash_message_id','hash');
    }

    public static function storeMassage($input)
    {
        $input['hash_message_id'] = $input['hash'];
        return self::create($input);
    }

}
