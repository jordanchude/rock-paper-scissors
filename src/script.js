//Choices
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors"
let choices = [ROCK, PAPER, SCISSORS];

//Opponents
const player = {
  Choice: null
};

const computer = {
  Choice: null
};

//Computer logic
const computerChooses = () => {
  return choices[Math.floor(Math.random() * choices.length)];;
}

//Winner notification container
let winnerNotification = document.querySelector('#results'); //assign paragraph to winner notification
let referenceNode = document.querySelector('.buttons'); //create reference for paragraph placement
referenceNode.after(winnerNotification); //place paragraph after reference

//Winner notification text
function generateResultsText(winner, playerChoice, computerChoice) {
  let message = `The ${winner} wins! The player chose ${playerChoice} and the computer chose ${computerChoice}.`
  return message;
}

//Game simulation
const compareChoices = () => {
  
  //Conditional winner notification text
  if (computer.Choice == player.Choice) {
    winnerNotification.innerText = `It's a tie! Both the player and the computer chose ${computer.Choice}.`;
  } else if (player.Choice === ROCK && computer.Choice === SCISSORS) {
    winnerNotification.innerText = generateResultsText("player", player.Choice, computer.Choice);
  } else if (player.Choice === PAPER && computer.Choice === ROCK) {
    winnerNotification.innerText = generateResultsText("player", player.Choice, computer.Choice);
  } else if (player.Choice === SCISSORS & computer.Choice === PAPER) {
    winnerNotification.innerText = generateResultsText("player", player.Choice, computer.Choice);
  } else {
    winnerNotification.innerText = generateResultsText("computer", player.Choice, computer.Choice);
  }
}


const onClick = (e) => {
  winnerNotification.innerText = null;
  player.Choice = e.target.innerText;
  computer.Choice = computerChooses()
  compareChoices();
}

document.querySelector('#rock').addEventListener('click', onClick);
document.querySelector('#paper').addEventListener('click', onClick);
document.querySelector('#scissors').addEventListener('click', onClick);