let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 36;
let num7 = 25;
let sum = 0;
let difference = 0;
let product = 0;
let quotient = 0;

function addition(){
    sum = num1 + num2;
    document.getElementById("addition")
    .innerHTML = num1 + " + " + num2 + " = " + sum;
}

function subtraction(){
    difference = num4 - num3;
    document.getElementById("subtract")
    .innerHTML = num4 + " - " + num3 + " = " + difference;
}

function multiplication(){
    product = num5 * num6;
    document.getElementById("multiply").innerHTML = num5 + " * " + num6 + " = " + product;
}

function division(){
    quotient = num7 / num5;
    document.getElementById("divide").innerHTML = num7 + " / " + num5 + " = " + quotient;
}
function equalsOperator(){
    let firstNum = document.getElementById("num1").value;
    let secondNum = document.getElementById("num2").value;
    document.getElementById("equalsAns")
    .innerHTML = firstNum == secondNum;
}

function notEqualsOperator(){
    let thirdNum = document.getElementById("num3").value;
    let fourthNum = document.getElementById("num4").value;
    document.getElementById("notEqualsAns")
    .innerHTML = thirdNum != fourthNum;
}

function lessThanOperator(){
    let fifthNum = document.getElementById("num5").value;
    let SixthNum = document.getElementById("num6").value;
    document.getElementById("lessThanAns")
    .innerHTML = fifthNum < SixthNum;
}

function greaterThanOperator(){
    let seventhNum = document.getElementById("num7").value;
    let eightNum = document.getElementById("num8").value;
    document.getElementById("greaterThanAns")
    .innerHTML = seventhNum > eightNum;
}
function greaterThanOperator(){
        let seventhNum;
        let eightNum;
        if(document.getElementById("r1").checked){
            seventhNum = document.getElementById("r1").value;
        }else  if(document.getElementById("r2").checked){
            seventhNum = document.getElementById("r2").value;
        }else  if(document.getElementById("r3").checked){
            seventhNum = document.getElementById("r3").value;
        }else  if(document.getElementById("r4").checked){
            seventhNum = document.getElementById("r4").value;
        }else  if(document.getElementById("r5").checked){
            seventhNum = document.getElementById("r5").value;
        }


        if(document.getElementById("r6").checked){
            eightNum = document.getElementById("r6").value;
        }else  if(document.getElementById("r7").checked){
            eightNum = document.getElementById("r7").value;
        }else  if(document.getElementById("r8").checked){
            eightNum = document.getElementById("r8").value;
        }else  if(document.getElementById("r9").checked){
            eightNum = document.getElementById("r9").value;
        }else  if(document.getElementById("r10").checked){
            eightNum = document.getElementById("r10").value;
        }
}

document.getElementById("greaterthaAns").innerHTML = seventhNum > eightNum