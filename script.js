let display = document.getElementById("main-display");
let subDisplay = document.getElementById("subtotal-display");
let clearBtn = document.getElementById("clear-btn")

clearBtn.addEventListener("click", clear);

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[event-key='${e.key}']`);
    key.click();
});

let storedValues = {
};

function clear() {  
    display.innerText = "";
    subDisplay.innerText = "";
    delete storedValues.num1;
    delete storedValues.num2;
    delete storedValues.operator;
    delete storedValues.result; 
};

function backSpace() {
    let str = display.innerText;
    display.innerText = str.substr(0, str.length - 1);
};

//function triggers when number buttons are clicked.
function displayNumber(value) {
    // if a result already exists, it is deleted and display starts from new input
    if ((storedValues.result != null) || (display.innerText == "0")) {
        display.innerText = value; 
        delete storedValues.result;
    } else {
        // input is added to the display
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
    // if first operand doesn't exist, it is taken from display, shown as subtotal,
    // operator is stored, display is emptied
    if (storedValues.num1 == null) {
        storedValues.num1 = Number(display.innerText);
        subDisplay.innerText = storedValues.num1;
        storedValues.operator = value;
        display.innerText = "";
    } else {
        // second operator is taken from display, operate function is run, result
        // is stored as subtotal for next operation, display is emptied, next operator
        // is stored, second operator is deleted.
        storedValues.num2 = Number(display.innerText);
        storedValues.num1 = operate(storedValues.operator, storedValues.num1, storedValues.num2);
        subDisplay.innerText = storedValues.num1;
        display.innerText = "";
        storedValues.operator = value;
        delete storedValues.num2;
    };
};

// function triggers when "=" is clicked.
function displayResults() {
    // if result exist it stays on display
    if (storedValues.result != null) {
        storedValues.result = display.innerText
    } else {
        // second operand is taken from display, operate function is run and result is 
        // stored and shown in display, first operand is deleted.
        storedValues.num2 = Number(display.innerText);
        display.innerText = operate(storedValues.operator, storedValues.num1, storedValues.num2);
        storedValues.result = display.innerText
        delete storedValues.num1;
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
        return "Ci hai provato!";
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