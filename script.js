let display = document.getElementById("main-display");
let subDisplay = document.getElementById("subtotal-display");
let clearBtn = document.getElementById("clear-btn")

clearBtn.addEventListener("click", clear);

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[event-key='${e.key}']`);
    key.click();
});

function clear() {  
    display.innerText = "0";
    subDisplay.innerText = "0";
    storedValues.num1 = 0;
    storedValues.num2 = 0;
    storedValues.operator = "+";
};

let storedValues = {
    operator : "+",
    num1 : 0,
    num2 : 0,
};

function displayNumber(value) {
    if (Number(display.innerText) === operate(storedValues.operator, storedValues.num1, storedValues.num2)) {
        display.innerText = value;
    } else {
        display.innerText += value;
    };
    if (display.innerText.includes(".")) {
        document.getElementById("point-btn").disabled = true;
    } else {
        document.getElementById("point-btn").disabled = false;
    }
};

function displayOperator(value) { 
    if (Number(display.innerText) === operate(storedValues.operator, storedValues.num1, storedValues.num2)) {
        storedValues.num1 = Number(display.innerText);
        subDisplay.innerText = storedValues.num1;
        storedValues.operator = value;
        display.innerText = "";
    } else {
        storedValues.num2 = Number(display.innerText);
        storedValues.num1 = operate(storedValues.operator, storedValues.num1, storedValues.num2);
        subDisplay.innerText = storedValues.num1;
        display.innerText = "";
        storedValues.operator = value;
    };
};

function backSpace() {
    let str = display.innerText;
    display.innerText = str.substr(0, str.length - 1);
};

function displayResults() {
    if (Number(display.innerText) === operate(storedValues.operator, storedValues.num1, storedValues.num2)) {
        display.innerText = operate(storedValues.operator, storedValues.num1, storedValues.num2);
    } else {
    storedValues.num2 = Number(display.innerText);
    display.innerText = operate(storedValues.operator, storedValues.num1, storedValues.num2);
    };
};

function add(num1, num2) {
    return Math.round((num1 + num2 + Number.EPSILON) * 100) / 100;
};

function subtract(num1, num2) {
    return Math.round((num1 - num2 + Number.EPSILON) * 100) / 100;
};

function multiply(num1, num2) {
    return Math.round((num1 * num2 + Number.EPSILON) * 100) / 100;
};

function divide(num1, num2) {
    if (num2 != 0) {
        return Math.round((num1 / num2 + Number.EPSILON) * 100) / 100;
    } else {
        return "Ci hai provato! Adesso non funziono più :(";
    }
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
        return "Invalid Operator";
    }
}

function clear() {  
    display.innerText = "0";
    subDisplay.innerText = "0";
    storedValues.num1 = 0;
    storedValues.num2 = 0;
    storedValues.operator = "+";
}