window.onload = function () {

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Trapson Is Disabled");
}, false);
    document.addEventListener("keydown", function (e) {
    //document.onkeydown = function(e) {
    // "I" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
        alert("Trapson Is Disabled");
    }
    // "J" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
        alert("Trapson Is Disabled");
    }
    // "S" key + macOS
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
        alert("Trapson Is Disabled");
    }
    // "U" key
    if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
        alert("Trapson Is Disabled");
    }
    // "F12" key
    if (event.keyCode == 123) {
        disabledEvent(e);
        alert("Trapson Is Disabled");
    }
}, false);
function disabledEvent(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
    alert("Trapson Is Disabled");
    e.preventDefault();
    return false;
}
}

function setHalfVolume() {
 var myAudio = document.getElementById("audio1");  
 myAudio.volume = 0.2;
}