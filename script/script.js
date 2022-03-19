console.log('Hello there!');


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
    return 0;
  }

  switch (playerSelection_cptl) {
    case 'Rock':
      if (compSelection === 'Paper') {
        return -1;
      }
      break;
    case 'Paper':
      if (compSelection === 'Scissors') {
        return -1;
      }
      break;
    case 'Scissors':
      if (compSelection === 'Rock') {
        return -1;
      }
      break;
  }
  return 1;

}

function roundWinnerPrint(score) {
  switch (score) {
    case -1:
      console.log('You lose!');
      break;
    case 0:
      console.log('Draw!');
      break;
    case 1:
      console.log('You Win!');
      break;
  }
}

function gameWinnerPrint(score) {
  if (score > 0) {
    console.log('You win the game!');
  } else if (score < 0) {
    console.log('You lose the game!');
  } else {
    console.log('Game ends in a draw!');
  }
}


function game() {
  let player_score = 0;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Chosee from 'Rock', 'Paper' or 'Scissors'");
    let compChoice = computerPlay();
    roundScore = singleRound(playerChoice, compChoice)

    roundWinnerPrint(roundScore);
    player_score += roundScore;
    console.log(player_score);
  }

  gameWinnerPrint(player_score);

}




// game()