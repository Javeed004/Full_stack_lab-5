function performOperation(operation) {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var result;

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter valid numbers");
        return;
    }

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = number1 / number2;
            break;
    }

    document.getElementById("result").innerText = result;
}
