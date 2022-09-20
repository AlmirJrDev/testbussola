var div = document.getElementsByTagName("div")[0];
var img = div.childNodes[0];

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(evt) {
        img.style.webkitTransform = "rotateZ(" + evt.alpha + "deg)";
        img.style.transform = "rotateZ(" + evt.alpha + "deg)";
    }, false);
} else {
    alert("Teu browser é desorientado, vei. Taca fogo nele!");
}

window.addEventListener('touchstart', function(evt) {
    img.src = "bussola" + evt.touches.length + ".png";
}, false);

function requestOrientationPermission(){
DeviceOrientationEvent.requestPermission()
.then(response => {
if (response == 'granted') {
    window.addEventListener('deviceorientation', (e) => {
        // do something with e
    })
}
})
.catch(console.error)
}