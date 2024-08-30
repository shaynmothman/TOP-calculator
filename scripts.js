let numberOne = 0;
let numberTwo = 0;
let operator;
let result = 0;
let displayValue = '';

/* Math functions */
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case '+':
            add(numberOne, numberTwo);
            break;
        case '-':
            subtract(numberOne, numberTwo);
            break;
        case 'x':
            multiply(numberOne, numberTwo);
            break;
        case '/':
            divide(numberOne, numberTwo);
            break;
        default:
            return;
    }
}

const screenOutput = document.querySelector("#calc-screen-text");
screenOutput.textContent = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        displayValue += button.textContent;
        console.log(displayValue);
        screenOutput.textContent = displayValue;
    })
})