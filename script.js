let display = document.getElementById("display");

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
    display.innerText = value;
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