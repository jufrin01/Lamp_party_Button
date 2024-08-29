
let BtnRandom = document.getElementById("btn_random");

let BtnRedButton = document.getElementById("btn_red");
let BtnBlueButton = document.getElementById("btn_blue");
let BtnGreenButton = document.getElementById("btn_green");

function btnRandomHandler() {
    let colours = ["red", "darkblue", "green", "yellow", "purple", "pink", "orange", "brown", "cyan",]
   let random = Math.floor(Math.random() * colours.length);
    let Body = document.querySelector('body');
   Body.style.backgroundColor = colours[random];
    console.log(colours[random]);
}

function btnRedHandler() {
    let Body = document.querySelector('body');
    Body.style.backgroundColor = "red";
    console.log("Red Button Clicked");
}

function btnBlueHandler() {
    let Body = document.querySelector('body');
    Body.style.backgroundColor = "darkblue";
    console.log("Blue Button Clicked");
}

function btnGreenHandler() {
    let Body = document.querySelector('body');
    Body.style.backgroundColor = "green";
    console.log("Green Button Clicked");
}

BtnRandom.addEventListener("click", btnRandomHandler);
BtnRedButton.addEventListener("click", btnRedHandler);
BtnBlueButton.addEventListener("click", btnBlueHandler);
BtnGreenButton.addEventListener("click", btnGreenHandler);