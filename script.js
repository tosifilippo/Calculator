let display = document.getElementById("display");

let storedValues = {
    operator : "+",
    num1 : 0,
    num2 : 2,
};

function displayNumber(value) {
    if (display.innerText === "+" ||
    display.innerText === "-" ||
    display.innerText === "*" ||
    display.innerText === "/") {
        display.innerText = value;
    } else {
        display.innerText += value;
    };
};

function displayOperator(value) {
    storedValues.num1 = Number(display.innerText);
    display.innerText = value;
    storedValues.operator = value;
}

function displayResults() {
    storedValues.num2 = Number(display.innerText);
    display.innerText = operate(storedValues.operator, storedValues.num1, storedValues.num2);
}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        return "Invalid Operator"
    }
}