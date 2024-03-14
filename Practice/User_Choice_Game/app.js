const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const DEFAULT_USER_CHOICE = ROCK;

let gameisRunning = false;
const getPlayerChoice = function () {
  const selection = prompt(`${ROCK} ,${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}


const getComputerChoice = function () {
  const randonValue = Math.random();
  if (randonValue < 0.34) {
    return ROCK;
  } else if (randonValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}


const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
}

startGameBtn.addEventListener('click', function () {
  if (gameisRunning) {
    return;
  }
  gameisRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);

  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerSelection);
  console.log(winner);
  let message = `You Pick ${playerSelection},computer Picked ${computerChoice} therefore you had a `;
  if (winner === RESULT_DRAW) {
    message = message + ' draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ' Won';
  } else {
    message = message + ' lost';
  }
  alert(message);
})



// Not Related To Game




// sumUp(1,5,10,-3,6,10);
// sumUp(1,5,10,-3,6,10,25,88);
