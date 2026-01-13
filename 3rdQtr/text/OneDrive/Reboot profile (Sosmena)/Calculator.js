var num1, num2, answer;//numbers
var operator, dPoint;//String
var decimalUsed = false;

function insert(num) {
    if(num=='.')
    if(decimalUsed){

    }else{
        document.input.numview.value=document.input.numview.value + num;
        decimalUsed=true;
    }else{
     document.input.numview.value=document.input.numview.value + num;
    }}  

function backspace(){
    var exp = document.input.numview.value;//kunin yun number
    document.input.numview.value = exp.substring(0,exp.length -1);
}

function keypress(op){
    operator = op;
    num1 = Number(document.input.numview.value);
    input.numview.value='';
    decimalUsed=false;
}

function equals(){
    num2 = Number(document.input.numview.value);
    switch(operator){
        case "+":
            answer = num1 + num2;break;
        case "-":
            answer = num1 - num2;break;
        case "*":
            answer = num1 * num2;break;
        case "/":
            answer = num1 / num2;break;
    }
    document.input.numview.value = answer;
    decimalUsed=false;
}
function checkDecimal(decimal){

}