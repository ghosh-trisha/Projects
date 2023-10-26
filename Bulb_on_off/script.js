// Switch  bulb
let button_1 = document.querySelector("#btn");
button_1.addEventListener("click" , toggleBulb);

let bulb = document.querySelector("#bulb");
function toggleBulb() {
    if(button_1.textContent.includes("On")){
        bulb.src = "bulbOn.jpg";
        bulb.alt = "bulb is on";
        button_1.textContent = "Turn Off";
    }
    else{
        bulb.src = "bulbOff.jpg";
        bulb.alt = "bulb is off";
        button_1.textContent = "Turn On";
    }
}
