<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trigger extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    const TRIGGER_TYPE_PROMO='promo';
    const TRIGGER_TYPE_SERVICE='service';
}
