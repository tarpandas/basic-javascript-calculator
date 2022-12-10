display = (valuePresent) => {
    if(valuePresent == 'CC')
        location.reload();
    else if(valuePresent != '=')
        document.getElementById("screen").innerHTML += valuePresent;
    else
        mathsCalc(valuePresent);
}

mathsCalc = (keyPressed) => {
    if(keyPressed == '=') {
        let expression = document.getElementById("screen").innerHTML;
        let result = eval(expression);
        document.getElementById("screen").innerHTML = result;
    }
}