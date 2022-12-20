<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fond extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    /**
     *
     */
    public static function createFond($email,$company_id, $org_name)
    {
        $fond = Fond::where(['email' => $email])->first();

        if(!$fond){
            $fond = self::create(['email' => $email, 'org_name' => $org_name]);

        }
        return $fond;
    }
}

