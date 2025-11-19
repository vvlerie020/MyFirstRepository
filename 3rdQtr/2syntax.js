document.getElementById("num").innerHTML = 67;       
document.getElementById("deci").innerHTML = 6.7;

document.getElementById("doubleq").innerHTML = "Hello World";
document.getElementById("singleq").innerHTML = 'Hello World';

let greeting = "rain";
const pi = 3.67;
var isActive = true;

document.getElementById("Vlet").innerHTML = greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isActive;

let rain = "It's raining";
const rhain = "It's pouring";
var rhainy = "the old man is snoring";

document.getElementById("rain").innerHTML = rain;
document.getElementById("rhain").innerHTML = rhain;
document.getElementById("rhainy").innerHTML = rhainy;

function changeValues() {
    rain = "The sun is shining";
  //  rhain = "The sky is clear"; // This will cause an error because rhain is a constant
    rhainy = "the birds are singing";   

    document.getElementById("rain").innerHTML = rain;
document.getElementById("rhain").innerHTML = rhain;
document.getElementById("rhainy").innerHTML = rhainy;

}