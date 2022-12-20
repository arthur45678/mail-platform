<?php

function email_transliterate($aliasName = false)
{
    $alias = null;
    if(empty($aliasName)){
        $alias = (int) microtime(true);
    }elseif ($aliasName){
        /*Begin */
        // $alias = self::transliterate($aliasName);

        $str = mb_strtolower($aliasName, 'UTF-8');

        $letter_array = array(
            'a' => 'а',
            'b' => 'б',
            'v' => 'в',
            'g' => 'г,ґ',
            'h' => 'հ',
            'd' => 'д',
            'dz' => 'ձ',
            'e' => 'е,є',
            'jo' => 'ё',
            'zh' => 'ж',
            'z' => 'з',
            'i' => 'и,і',
            'ji' => 'ї',
            'j' => 'й,յ',
            'k' => 'к',
            'l' => 'л',
            'm' => 'м',
            'n' => 'н',
            'o' => 'о',
            'p' => 'п',
            'r' => 'р',
            's' => 'с',
            't' => 'т',
            'u' => 'у',
            'f' => 'ф',
            'kh' => 'х',
            'ts' => 'ц',
            'ch' => 'ч',
            'sh' => 'ш',
            'shch' => 'щ',
            '' => 'ъ',
            'y' => 'ы',
            '' => 'ь',
            'yu' => 'ю',
            'ya' => 'я',
            ' ' => '_',
        );

        foreach($letter_array as $leter => $kyr) {
            $kyr = explode(',',$kyr);

            $str = str_replace($kyr,$leter, $str);

        }

        //  A-Za-z0-9-
        $str = preg_replace('/(\s|[^A-Za-z0-9\-])+/','_',$str);

        $str = trim($str,'_');
        /*end*/
        $alias = mb_strimwidth($str, 0, 40);
    }
    return $alias;
}
