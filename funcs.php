<?php
/**
 * Created by PhpStorm.
 * User: Ahmed Eslwerkey
 * Date: 2017-04-08
 * Time: 1:32 PM
 */


switch($_REQUEST["t"]){
    case "view": view();break;
    default:break;
}

function view(){
    if(!fopen("view.txt","w+")) {
            $fo = fopen("view.txt","x+");
    }
    if(!isset($_COOKIE['back']))
        setcookie("back","1",time()+(60*24*60*60));

    $fo = fopen("view.txt","w+");
    $txt = fread($fo, filesize("view.txt"));
    $txt += 1;
    fwrite($fo,$txt);
    if(isset($_COOKIE["back"])) {

        echo $txt;
    }
    else {
        $txt = 1;
        fwrite($fo,$txt);
        echo $txt;
    }
}