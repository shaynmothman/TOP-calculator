/* Initial variables */
let numberOne = '';
let numberTwo = '';
let operator;
let result = 0;
let operating = false;
let containsDecimal = false;

/* Show '0' on screen initially */
const screenOutput = document.querySelector("#calc-screen-text");
screenOutput.textContent = 0;

/* Math functions */
function add() {return +numberOne + +numberTwo; }

function subtract() { return +numberOne - +numberTwo; }

function multiply() { return +numberOne * +numberTwo; }

function divide() { return +numberOne / +numberTwo; }

function operate() {
    switch (operator) {
        case '+':
            result = add();
            break;
        case '-':
            result = subtract();
            break;
        case 'x':
            result = multiply();
            break;
        case '/':
            result = divide();
            break;
        default:
            return;
    }
}

/* Button styling */
function applyOperatorButtonStyling(button) {
    button.style.border = '2px solid white';
}

function clearOperatorButtonStyling() {
    operatorButtons.forEach((button) => {
        button.style.border = '0px solid white';
    })
}

function disableDecimalButton() {
    if(containsDecimal === false) {
        containsDecimal = true;
        decimalButton.disabled = true;
    } else {
        containsDecimal = false;
        decimalButton.disabled = false;
    }
}

function enableDecimalButton() {
    containsDecimal = false;
    decimalButton.disabled = false;
}

/* Handle number button inputs */
const numberButtons = document.querySelectorAll("#calc-keypad-numbers > button");
const decimalButton = document.querySelector("#dot");


numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (operating === false) {
            numberOne += button.textContent;
            screenOutput.textContent = numberOne;
        } else {
            numberTwo += button.textContent;
            screenOutput.textContent = numberTwo;
        }

        if(button.textContent === '.') {
            disableDecimalButton();
        }
    })
})

/* Handle oprator button inputs */
const operatorButtons = document.querySelectorAll("button.function");

operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(operating === false) {
            operator = button.textContent;
            operating = true;
        } else {
            clearOperatorButtonStyling();
            operate(operator, numberOne, numberTwo);
            screenOutput.textContent = result;
            numberOne = result;
            operator = button.textContent;
            numberTwo = '';
        }

        applyOperatorButtonStyling(button);
        enableDecimalButton();
    })
})

/* Handle enter button */
const enterButton = document.querySelector('#btn-equals');

enterButton.addEventListener('click', clickEnter);
    
function clickEnter(event) {
    operate(operator, numberOne, numberTwo); 
    screenOutput.textContent = result; 
    numberOne = result; 
    operator = '';
    numberTwo = '';
    operating = false;
    
    clearOperatorButtonStyling();
    enableDecimalButton();
}

/* Handle clear button */
const clearButton = document.querySelector('#btn-clear')

clearButton.addEventListener('click', clickClear);
    
function clickClear(event) {
    screenOutput.textContent = 0;
    numberOne = '';
    numberTwo = '';
    operator = '';
    operating = false;

    clearOperatorButtonStyling();
    enableDecimalButton();
}

/* Handle delete button */
const deleteButton = document.querySelector("#btn-delete");

deleteButton.addEventListener('click', clickDelete);
    
function clickDelete(event) {
    if(operating == true) {
        if(numberTwo != '') {
            numberTwo = numberTwo.toString();
            numberTwo = numberTwo.slice(0,-1);
            screenOutput.textContent = numberTwo;
        } else {
            operating = false;
            operator = '';
            clearOperatorButtonStyling();
        }
    } else {
        numberOne = numberOne.toString();
        numberOne = numberOne.slice(0, -1);
        screenOutput.textContent = numberOne;
    }
}

/* Map keyboard to UI */
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'Escape':
            clickClear(event);
            break;
        case 'Backspace':
            clickDelete(event);
            break;
        case 'Enter':
            clickEnter(event);
            break;
        default:
            break;
    }
})