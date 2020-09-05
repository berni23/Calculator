// jquery

var numsHTMLCollection = document.getElementsByClassName("button-number");
var symHTMLCollection = document.getElementsByClassName("button-symbol");
var operations = document.querySelector(".operations");


var buttonsWrapper = document.getElementById('buttons');

buttonsWrapper.addEventListener("click", operation)

// vars used for operations

var currentOp = "";
var operationsList = document.querySelector(".operationsList")

// addEventListeners

function clearScreen() {
    operations.textContent = "";
    operationsList.textContent = "";
    resetVars()
}

function resetVars() {

    currentOp = "";
}

function operation(event) {


    if (operations.textContent = "Syntax error") operations.textContent = ""
    if (event.target.classList.contains('button-equal')) equal()
    else if (event.target.classList.contains('button-clear')) clearScreen()
    else if (event.target.type == 'submit') {

        console.log(event.target.textContent)
        let nextChar = event.target.dataset.eval;
        currentOp += nextChar
        operations.textContent = currentOp
        operationsList.textContent += nextChar
    }
}

// equal , only used if a operation and a number has been defined

function equal() {

    let result
    try {
        result = eval(currentOp);
        operations.textContent = result;
        currentOp = result;

    } catch (error) {

        currentOp = ""
        operations.textContent = "Syntax error"
        operationsList.textContent = "";

    }


}

// reset variables

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