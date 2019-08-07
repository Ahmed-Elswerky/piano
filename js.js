//a function to know if the audio files are all loaded
var k = 0;
function can_play() {
    k++;
    if (k >= 48)
        document.getElementById("loading").style.display = "none";
}

//filling with audio and buttons
var num, word = 'a';
var sound = document.getElementsByClassName("audioid");
window.onload = function () {
    var piano = document.getElementById("piano2"), audio = document.getElementById("audio");
    for (let i = 0; i < 48; i++) {
        piano.innerHTML += "<button id='but_" + i + "' class='but' onclick='document.getElementsByClassName(\"audioid\")[" + (i) + "].currentTime = 0; document.getElementsByClassName(\"audioid\")[" + (i) + "].play();'></button>";
        audio.innerHTML += "<audio preload='true' oncanplaythrough='can_play()' onloaddata='can_play()' src='./piano/2/p" + (i+40) + ".mp3' class='audioid'></audio>";    
    }
    for (let ip = 0; ip < 48; ip++)
    {
        sound[ip].load();
        console.log(ip);
        //can_play();
    }
    string.innerHTML = "Welcome to Audioid";
}

//names of keys
function letters(i) {
    if (i == 1) num = 0;
    else if (i == 2) num = 0;
    else if(i%7==0)num = i / 7;
    switch (i) {
        case (i % 7 == 1): word = "A" ; break;
        case (i % 7 == 2): word = "B" ; break;
        case (i % 7 == 3): word = "C" ; break;
        case (i % 7 == 4): word = "D" ; break;
        case (i % 7 == 5): word = "E" ; break;
        case (i % 7 == 6): word = "F" ; break;
        case (i % 7 == 0): word = "G" ; break;
        default: break;
    }
    return  num;
}

//function to play the sounds when press on keys
var sound = document.getElementsByClassName("audioid"),key,string = document.getElementById("string") ;
function piano_but(e) {
    // console.log(event.keyCode,key);

    switch (event.keyCode) {
        case 192: key = 1; break;
        case 49: key = 2; break;
        case 50: key = 3; break;
        case 51: key = 4; break;
        case 52: key = 5; break;
        case 53: key = 6; break;
        case 54: key = 7; break;
        case 55: key = 8; break;
        case 56: key = 9; break;
        case 57: key = 10; break;
        case 48: key = 11; break;
        case 189: key = 12; break;
        case 187: key = 13; break;
        case 8: key = 14; break;
       
        case 81: key = 15; break;
        case 87: key = 16; break;
        case 69: key = 17; break;
        case 82: key = 18; break;
        case 84: key = 19; break;
        case 89: key = 20; break;

        case 85: key = 21; break;
        case 73: key = 22; break;
        case 79: key = 23; break;
        case 80: key = 24; break;

        case 219: key = 25; break;
        case 221: key = 26; break;
        case 220: key = 27; break;

        case 65: key = 28; break; 
        case 83: key = 29; break;
        case 68: key = 30; break;
        case 70: key = 31; break;
        case 71: key = 32; break;
        case 72: key = 33; break; 
        case 74: key = 34; break;
        case 75: key = 35; break;
        case 76: key = 36; break;

        case 186: key = 37; break;
        case 222: key = 38; break;
        case 13: key = 39; break;

        case 90: key = 40; break;
        case 88: key = 41; break; 
        case 67: key = 42; break; 
        case 86: key = 43; break;
        case 66: key = 44; break;
        case 78: key = 45; break;
        case 77: key = 46; break;

        case 188: key = 47; break;
        case 190: key = 48; break;
        case 191: key = 49; break;
        default: key = 0; break;
    }
    sound[key - 1].currentTime = 0;
    sound[key - 1].play();
    var str = String.fromCharCode(event.keyCode);
    letters(key);
    // string.innerHTML = word + " " + num + "<br>ASCII: " + event.keyCode;
}

//when pressing keys
window.onkeydown = function (e) {
    piano_but(e.keyCode);
    document.getElementById("but_" + key).className = "hover";
}
window.onkeyup = function () {
    for (i = 1; i < 50; i++) {
        document.getElementById("but_" + i).className = "but";
    }
   
}
