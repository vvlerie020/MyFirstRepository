var num1, num2, answer;//numbers
var operator, dPoint;//String
var decimalUsed = false;//if the decimal is already used

function insert(num){
    if(num=='.'){//true
        if(decimalUsed){
            //true value walang gagawin
        }else{
            document.input.numview.value=
            document.input.numview.value + num;
            decimalUsed=true;
        } 
    }else{//false value
    document.input.numview.value
    document.input.numview.value + num;
    }
}
function backspace(){
    var exp = document.input.numview.value;
    document.input.numview.value = exp.substring(0,exp.length -1);
    for(let i = 0; i <exp.length;i++){
        var char = exp.substring(i,i );
        if(char=='.'){
            
        }
    }

}

function keypress(op){
    operator = op;
    num1= Number(document.input.numview.value);
    input.numview.value='';
    decimalUsed=false;
}

function equals(){
    num2= Number(document.input.numview.value);
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