console.log('Hello there!');

let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  let options = ['Rock', 'Paper', 'Scissors'];
  let choice_num = randomNum(3);
  return options[choice_num];
}

function randomNum(max) {
  return Math.floor(Math.random(max) * max);
}

function capitalize(string) {
  string = string.toLowerCase();
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}

function singleRound(playerSelection, compSelection) {
  playerSelection_cptl = capitalize(playerSelection);

  if (playerSelection_cptl === compSelection) {
    return 'Draw';
  }

  switch (playerSelection_cptl) {
    case 'Rock':
      if (compSelection === 'Paper') {
        return 'Computer';
      }
      break;
    case 'Paper':
      if (compSelection === 'Scissors') {
        return 'Computer';
      }
      break;
    case 'Scissors':
      if (compSelection === 'Rock') {
        return 'Computer';
      }
      break;
  }
  return 'Player';

}

function roundWinnerPrint(result) {
  const roundWinner = document.querySelector('.display > .message > p');
  switch (result) {
    case 'Computer':
      roundWinner.textContent = 'You Lose!';
      break;
    case 'Draw':
      roundWinner.textContent = 'Draw!';
      break;
    case 'Player':
      roundWinner.textContent = 'You Win!';
      break;
    default:
      roundWinner.textContent = "----";
      break;
  }
}


function updateScore(roundWinner) {
  switch (roundWinner) {
    case 'Computer':
      computerScore += 1;
      break;
    case 'Player':
      playerScore += 1;
    default:
      break;
  }
}

function printScore() {
  const scoreHeading = document.querySelector('.display > h3');
  scoreHeading.textContent = `Player ${playerScore} : ${computerScore} Computer`;
}

function roundMessagePrint(winner, player, comp) {
  const roundMessage = document.querySelector('.roundMessage')
  switch (winner) {
    case 'Computer':
      roundMessage.textContent = `${comp} beats ${player}`;
      break;
    case 'Player':
      roundMessage.textContent = `${player} beats ${comp}`;
      break;
    case 'Draw':
      roundMessage.textContent = "It's a draw!"
      break;
    default:
      roundMessage.textContent = "----";
      break;
  }
}

function game(playerSelect) {
  let compChoice = computerPlay();
  roundWinner = singleRound(playerSelect, compChoice);
  updateScore(roundWinner);
  roundWinnerPrint(roundWinner);
  roundMessagePrint(roundWinner, playerSelect, compChoice);
  printScore();
}

function gameReset() {
  playerScore = 0;
  computerScore = 0;
  printScore();
  roundWinnerPrint('-');
  roundMessagePrint('-');
}



// Play Game
const playerChoiceButtons = document.querySelectorAll('.buttons > button');

playerChoiceButtons.forEach((button) => {
  // Get player choice and call game()
  button.addEventListener('click', () => {
    let playerChoice = button.value;

    game(playerChoice);
  });
});


// Reset game
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', gameReset);
