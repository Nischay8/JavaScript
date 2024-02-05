const defaultResult = 0;
let currentResult = defaultResult;


function CreateAndWriteOutput(operator, resultBeforeCal, calcNumber) {
    const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function getUserNumberInput() {
    return parseInt(userInput.value);
}


function add() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + parseInt(userInput.value);
    CreateAndWriteOutput('+', initialNumber, enteredNumber);
}


function subtact() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - parseInt(userInput.value);
    CreateAndWriteOutput('-', initialNumber, enteredNumber);
}


function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * parseInt(userInput.value);
    CreateAndWriteOutput('*', initialNumber, enteredNumber);
}


function divide() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / parseInt(userInput.value);
    CreateAndWriteOutput('*', initialNumber, enteredNumber);
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtact);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
// const additionResult = add(1, 2);




// currentResult = additionResult;

let calculationDescription = `(${defaultResult}+10) *3/2-1`;


