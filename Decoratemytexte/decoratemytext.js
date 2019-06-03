 
var size;
window.onload=pageLoad;

function pageLoad() {
    document.getElementById("bigger").onclick = enlargeText;
    document.getElementById("igapy").onclick = pigLatinize;
    document.getElementById("malkovise").onclick = malkovise;
    document.getElementById("bling").onclick = blingText;
}
function decoration(){
alert("Hello, world!");
}
 
function increaseFontSize() {
    var el = document.getElementById('text');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var size = parseInt(style);
        size += 2;
    document.getElementById("text").style.fontSize = size + "pt";
}
function enlargeText() {
    "use strict";

    setInterval(increaseFontSize, 500);
}

function blingText() {
    if (document.getElementById("bling").checked) {
        document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
        document.getElementById("text").className = "blingtext";
    } else {
        document.body.style.backgroundImage = " "
        document.getElementById("text").className = " ";
    }
}
function pigLatinize() {
    var ipText = document.getElementById("text").value.trim();
    var ipWords = ipText.split(/\s+/);
    var result = "";
    for (var i = 0; i < ipWords.length; i++) {
        result += pigLatinizeWord(ipWords[i]) + " ";
    }
    document.getElementById("text").value = result;

}

function malkovise() {
    var ipText = document.getElementById("text").value;
    var ipWords = ipText.split(/\s+/);
    var result = "";
    for (var i = 0; i < ipWords.length; i++) {
        result += (isMalkovich(ipWords[i]) ? "Malkovitch" : ipWords[i]) + " ";
    }
    document.getElementById("text").value = result;

}

function isVowel(s) {
    return (/^[aeiou]$/i).test(s);
}


function pigLatinizeWord(input) {
    if (isVowel(input.charAt(0))) {
        input += "ay";
    } else {
        input = input.substr(1) + input.charAt(0) + "ay";
    }
    return input;
}

function isMalkovich(s) {
    if (s.length >= 5) {
        return true;
    }
    return false;
}
