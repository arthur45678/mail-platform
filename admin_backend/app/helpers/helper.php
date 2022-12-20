<?php

use Illuminate\Support\Str;

function hash_generator(){
    return Str::random(14);
}
