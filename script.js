var div = document.getElementsByTagName("div")[0];
var img = div.childNodes[0];

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(evt) {
        img.style.webkitTransform = "rotateZ(" + evt.alpha + "deg)";
        img.style.transform = "rotateZ(" + evt.alpha + "deg)";
    }, false);
} else {
    window.alert("Teu browser é desorientado, vei. Taca fogo nele!");
}

window.addEventListener('touchstart', function(evt) {
    img.src = "bussola" + evt.touches.length + ".png";
}, false);

var confirm = document.getElementById("confirmation");

function requestOrientationPermission()
DeviceOrientationEvent.requestPermission()
.then(response => {
if (response == 'granted') {
    document.getElementById("confimation").style.display="none"
    window.addEventListener('deviceorientation', (e) => {
       
        
    })
    
}})

.catch(document.getElementById("config").style.display="none")

////////////////////////

 
function  requestOrientationPermission() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

