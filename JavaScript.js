
//typing style
var space_name = document.getElementById("piano_p_pre"), piano_p = document.getElementById("p"), str = "This is a Beta version of Audioid's Piano.";
document.onload = setTimeout(function () {
    var iii = 0;
    piano_p.innerHTML = str[iii];
    string_out(piano_p, iii);
}, 3000);

function string_out(place, iii) {
    iii++;
    setTimeout(function () {
        place.innerHTML += str[iii];
    }, 300);

    if (str[iii + 1] != undefined)
        setTimeout(function () { string_out(place, iii); }, 100);
    else setTimeout(function () { space_name.style.display= "none"; }, 3000);
}
// document.getElementById("explain_i").onmouseover = function(){ex_mouse('over');};
// document.getElementById("explain_d").onmouseover = function(){ex_mouse('over');};
// document.getElementById("explain_d").onmouseleave = function(){ex_mouse('leave');};
// document.getElementById("explain_i").onmouseleave = function(){ex_mouse('leave');};

function ex_mouse(m){
    var e_d = document.getElementById("explain_d");
    if(m == 'over'){
        e_d.style.display = 'block';
    }
    if(m == 'leave'){
        e_d.style.display = 'none';
    }
}