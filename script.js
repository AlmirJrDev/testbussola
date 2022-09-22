var div = document.getElementById("div")[0];
var img = div.childNodes[0];

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(evt) {
        img.style.webkitTransform = "rotateZ(" + evt.alpha + "deg)";
        img.style.transform = "rotateZ(" + evt.alpha + "deg)";
    }, false);
} else {
    window.alert("Teu browser é desorientado, vei. Taca fogo nele!");
}




////////////////////////
