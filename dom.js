// jquery

var numsHTMLCollection = document.getElementsByClassName("button-number");
var symHTMLCollection = document.getElementsByClassName("button-symbol");
var equalSym = document.querySelector(".equal");
var screen = document.querySelector(".operations");
var dot = document.querySelector(".button-dot");
var plusMin = document.querySelector(".button-plusMinus");

// vars used for operations

var operation;
var num1;
var num2;
var numTyped = 0;
var deciTyped = 0;
var symTyped;
var decimal = false;
var operations = ""; // concatenated string giving all the operations performed once you press equal

var operationsList = []; // array with all operations stored

// addEventListeners

dot.addEventListener("click", addNumberString);
dot.addEventListener("click", decimalBool);
plusMin.addEventListener("click", plusMin);

for (let i = 0; i < numsHTMLCollection.length; i++) {
    numsHTMLCollection[i].addEventListener("click", addNumberString);
}

for (let i = 0; i < symHTMLCollection.length; i++) {
    symHTMLCollection[i].addEventListener("click", addNumberString);
    symHTMLCollection[i].addEventListener("click", currentOperation);
}

// add numbers or symbols as strings in the calculator
function addNumberString(event) {
    let targetButton = event.currentTarget;
    let txt;
    // if the character is a number, concatenate it and add it to numTyped
    if (Array.from(numsHTMLCollection).includes(targetButton)) {
        txt = targetButton.innerHTML;
        if (decimal) {
            deciTyped = Number("" + deciTyped + txt);
            numTyped = float(numTyped, deciTyped);
        } else {
            numTyped = Number("" + numTyped + txt);
        }
    } else {
        txt = targetButton.firstElementChild.innerHTML;
        symTyped = txt;
    }
    screen.innerHTML += txt;
    operations = operations + txt.toString()

}
// clear screen and reset vars
function clearScreen() {
    screen.innerHTML = "";
    resetVars();
}
// perform the LAST operation and store the current one in operations, using the id of the operation
function currentOperation(event) {
    decimal = false;
    if (num1 == undefined) {
        num1 = numTyped;
    } else {
        num2 = numTyped;
    }
    numTyped = 0;
    if (operation != undefined) {
        performOperation();
        screen.innerHTML = num1 + symTyped;
    }
    operation = event.currentTarget.id;
}
// perform ops

function performOperation() {
    let result;
    switch (operation) {
        case "plus":
            result = sum(num1, num2);
            break;
        case "minus":
            result = diff(num1, num2);
            break;
        case "multiply":
            result = mult(num1, num2);
            break;
        case "divide":
            result = div(num1, num2);
            break;
        case "perc":
            result = perc(num1, num2);
            break;
    }
    num1 = round(result, 10);
}
/* Operations */
function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function diff(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function perc(a, b) {
    return a / 100 * b;
}

function float(a, b) {
    let numLength = b.toString().length;
    return a + (b / (10 ** (numLength)));
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function decimalBool() {
    decimal = true;
}

function plusMinus() {
    numTyped = numTyped * (-1);
}

// equal , only used if a operation and a number has been defined

function equal() {
    if (operation != undefined && num1 != undefined) {
        num2 = numTyped;
        performOperation();
        screen.innerHTML = num1;
        operation = undefined;
        operationsList.push(operations)
        console.log(operationsList);
    }
    decimal = false;
}

// reset variables

function resetVars() {
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
    operationsList = "";
    numTyped = 0;
    deciTyped = 0;
    decimal = false;
}
// TOOGLE LAYOUT
function toggleLayout() {
    let screenBckgDark = document.querySelector(".screenWrapper");
    screenBckgDark.classList.toggle("screenWrapper-dark");

    let buttonsBckgDark = document.querySelector(".buttons");
    buttonsBckgDark.classList.toggle("buttons-dark");

    for (let i = 0; i < symHTMLCollection.length; i++) {
        symHTMLCollection[i].classList.toggle("btn-sym-dark");
    }

    for (let j = 0; j < numsHTMLCollection.length; j++) {
        numsHTMLCollection[j].classList.toggle("btn-num-dark");
    }

    let buttonClearDark = document.querySelector(".button-clear");
    buttonClearDark.classList.toggle("btn-clear-dark");

    let buttonDotDark = document.querySelector(".button-dot");
    buttonDotDark.classList.toggle("btn-dot-dark");

    let sliderDark = document.querySelector(".slider");
    sliderDark.classList.toggle("slider-dark");

    let buttonPlusMinDark = document.querySelector(".button-plusMinus");
    buttonPlusMinDark.classList.toggle("btn-plusMinus-dark");

    let buttonPiDark = document.querySelector(".button-pi");
    buttonPiDark.classList.toggle("btn-pi-dark");
}