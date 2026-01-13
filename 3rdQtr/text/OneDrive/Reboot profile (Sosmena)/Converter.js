function CalculateLength(){
    var fromLength = Number(document.getElementById("fromLength").value)

    if(ValidateLengthConverter(fromLength)){
        //start calculation

        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;

        var outputLength = document.getElementById("fromUnit").value;

    //    if(fromUnit =="Millimeter"){
    //        if(toUnit == "Centimeter"){
    //            //cm = mm/10
    //            var ans = fromLength / 10;
    //            alert(ans);
    //        }

    //    }

    }
}

function ConvertLength(fromLength,fromUnit,toUnit){
    fromLength = Number(fromLength);
    var
}
function ValidateLengthConverter(fromLength){
    var fromLength = Number(document.getElementById("fromLength").value)
    if(fromLength<=0){
        alert("Please enter the valid length");
        return false;
    }
    return true;
}