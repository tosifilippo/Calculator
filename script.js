let display = document.getElementById("main-display");
let subDisplay = document.getElementById("subtotal-display");
let clearBtn = document.getElementById("clear-btn")

clearBtn.addEventListener("click", clear);

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[event-key='${e.key}']`);
    key.click();
});

let storedValues = {
    operator : "+",
    num1 : 0,
    num2 : 0,
};

function clear() {  
    display.innerText = "0";
    subDisplay.innerText = "0";
    storedValues.num1 = 0;
    storedValues.num2 = 0;
    storedValues.operator = "+";
};

function backSpace() {
    let str = display.innerText;
    display.innerText = str.substr(0, str.length - 1);
};

//function triggers when number buttons are clicked.
function displayNumber(value) {
    //if display shows correct result of an operation only the number clicked is displayed
    //and stored values are reset.
    if (Number(display.innerText) === operate(storedValues.operator, storedValues.num1, storedValues.num2)) {
        display.innerText = value;
        storedValues.num1 = 0;
        storedValues.num2 = 0;
        storedValues.operator = "+";
    } else {
        // the number is concatenated in the display.
        display.innerText += value;
    };
    // "." button is disabled if already included in the display.
    if (display.innerText.includes(".")) {
        document.getElementById("point-btn").disabled = true;
    } else {
        document.getElementById("point-btn").disabled = false;
    };
};

// function triggers when operator buttons are clicked.
function displayOperator(value) { 
    // if display shows correct result of an operation, it becomes the next first operand, it is moved to
    // subtotal display, the selected operator is stored and display is cleared.
    if (Number(display.innerText) === operate(storedValues.operator, storedValues.num1, storedValues.num2)) {
        storedValues.num1 = Number(display.innerText);
        subDisplay.innerText = storedValues.num1;
        storedValues.operator = value;
        display.innerText = "";
    } else {
        // value on display becomes second operand, operate function is ran and result is displayed and
        // stored as next first operand. Finally the selected operator is stored for next operation.
        storedValues.num2 = Number(display.innerText);
        storedValues.num1 = operate(storedValues.operator, storedValues.num1, storedValues.num2);
        subDisplay.innerText = storedValues.num1;
        display.innerText = "";
        storedValues.operator = value;
    };
};

// function triggers when "=" is clicked.
function displayResults() {
    // if display shows correct result of an operation, nothing happens. 
    if (Number(display.innerText) === operate(storedValues.operator, storedValues.num1, storedValues.num2)) {
        display.innerText = operate(storedValues.operator, storedValues.num1, storedValues.num2);
    } else {
        // display is stored as second operand and operate function is ran.
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
        return "Ci hai provato! :)";
    };
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
    };
};