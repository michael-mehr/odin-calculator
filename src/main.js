const display = document.getElementById('display');
const calcButtons = document.querySelectorAll('button');
const calcButtonsArray = [...calcButtons];

calcButtonsArray.forEach(e => e.addEventListener('click', handleClick));

let displayText = display.textContent;

let firstNum;
let secondNum;
let operator;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return null;
    }
}

function updateDisplay(str) {
    display.textContent = str;
}

function clear() {
    firstNum = null;
    secondNum = null;
    operator = null;
    updateDisplay('0');
}

function handleClick(e) {
    const target = e.target;
    if (target.textContent === "clear") {
        clear();
    } else if (target.classList.has('num')) {
        handleNumber(Number(target.textContent));
    } else if (target.classList.has('operator')) {
        handleOperator(target.textContent);
    }

}

function handleNumber(num) {
    console.log(num);
}

function handleOperator(operator) {
    console.log(operator);
}