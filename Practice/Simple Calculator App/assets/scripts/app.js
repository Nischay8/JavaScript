const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function CreateAndWriteOutput(operator, resultBeforeCal, calcNumber) {
    const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function getUserNumberInput() {
    return parseInt(userInput.value);
}


function writeToLog(operationIdentifier, previousResult, operationNumber, NewResult) {
    const logEntry = {
        operation: operationIdentifier,
        preResult: previousResult,
        number: operationNumber,
        result: NewResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + parseInt(userInput.value);
    CreateAndWriteOutput('+', initialNumber, enteredNumber);

    writeToLog('ADD', initialNumber, enteredNumber, currentResult);
    // logEntries.push(enteredNumber);
    // console.log(logEntries);
}


function subtact() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - parseInt(userInput.value);
    CreateAndWriteOutput('-', initialNumber, enteredNumber);
    writeToLog('Subtract', initialNumber, enteredNumber, currentResult);
}


function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * parseInt(userInput.value);
    CreateAndWriteOutput('*', initialNumber, enteredNumber);
    writeToLog('Multiply', initialNumber, enteredNumber, currentResult);
}


function divide() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / parseInt(userInput.value);
    CreateAndWriteOutput('*', initialNumber, enteredNumber);
    writeToLog('Divide', initialNumber, enteredNumber, currentResult);
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtact);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
// const additionResult = add(1, 2);




// currentResult = additionResult;

let calculationDescription = `(${defaultResult}+10) *3/2-1`;


