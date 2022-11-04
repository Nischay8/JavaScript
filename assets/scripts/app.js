const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforecal,calcNumber){
    const callDescription=`${resultBeforecal}+${operator}`;
}

function add(){
    const enterNumber=getUserInput();
    currentResult=currentResult+enterNumber;
    outputResult(currentResult,callDescription);
}

function substract(){
    const enterNumber=getUserInput();
    const callDescription=`${currentResult}-${enterNumber}`;
    currentResult=currentResult+enterNumber;
    outputResult(currentResult,callDescription);
}
function multiply(){
    const enterNumber=getUserInput();
    const callDescription=`${currentResult}*${enterNumber}`;
    currentResult=currentResult+enterNumber;
    outputResult(currentResult,callDescription);
}
function divide(){
    const enterNumber=getUserInput();
    const callDescription=`${currentResult}/${enterNumber}`;
    currentResult=currentResult+enterNumber;
    outputResult(currentResult,callDescription);
}
addBtn.addEventListener('click',add)

 
