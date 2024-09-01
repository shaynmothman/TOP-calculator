/* Initial variables */
let numberOne = '';
let numberTwo = '';
let operator;
let result = 0;
let displayValue = '';
let operating = false;

/* Show '0' on screen initially */
const screenOutput = document.querySelector("#calc-screen-text");
screenOutput.textContent = 0;

/* Math functions */
function add(numberOne, numberTwo) {return +numberOne + +numberTwo; }

function subtract(numberOne, numberTwo) { return +numberOne - +numberTwo; }

function multiply(numberOne, numberTwo) { return +numberOne * +numberTwo; }

function divide(numberOne, numberTwo) { return +numberOne / +numberTwo; }

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case '+':
            result = add(numberOne, numberTwo);
            break;
        case '-':
            result = subtract(numberOne, numberTwo);
            break;
        case 'x':
            result = multiply(numberOne, numberTwo);
            break;
        case '/':
            result = divide(numberOne, numberTwo);
            break;
        default:
            return;
    }
}

/* Button styling modifier functions */
function applyOperatorButtonStyling(button) {
    button.style.border = '2px solid white';
}

function clearOperatorButtonStyling() {
    operatorButtons.forEach((button) => {
        button.style.border = '0px solid white';
    })
}

/* Handle number button inputs */
const numberButtons = document.querySelectorAll("#calc-keypad-numbers > button");

numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (operating === false) {
            numberOne += button.textContent;
            console.log(numberOne);
            screenOutput.textContent = numberOne;
        } else {
            numberTwo += button.textContent;
            console.log(numberTwo);
            screenOutput.textContent = numberTwo;
        }
    })
})

/* Handle oprator button inputs */
const operatorButtons = document.querySelectorAll("button.function");

operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        operator = button.textContent;
        console.log(operator);
        operating = true;
        
        applyOperatorButtonStyling(button);
    })
})

/* Handle enter button */
const enterButton = document.querySelector('#btn-equals');

enterButton.addEventListener('click', (event) => {
    operate(operator, numberOne, numberTwo);
    screenOutput.textContent = result;
    numberOne = result;
    operating = false;
    
    clearOperatorButtonStyling();
})

/* Handle clear button */
const clearButton = document.querySelector('#btn-clear')

clearButton.addEventListener('click', (event) => {
    displayValue = 0;
    screenOutput.textContent = displayValue;
    numberOne = '';
    numberTwo = '';
    operator = '';
    operating = false;
    clearOperatorButtonStyling();
})