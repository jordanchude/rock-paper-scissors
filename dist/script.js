//Choices and players
let choices = ["Rock", "Paper", "Scissors"];
const player = {
  playerChoice: null
};

const computer = {
  computerChoice: null
};

//Choices logic
const computerChooses = () => {
  return choices[Math.floor(Math.random() * choices.length)];;
}

//Winner space in HTML
let winnerNotification = document.createElement('p'); //create paragraph for message
let referenceNode = document.querySelector('.buttons'); //create reference for paragraph placement
referenceNode.after(winnerNotification); //place paragraph after reference

//Game simulation
const compareChoices = () => {
  //Winner notifications
  let playerWins = "The player wins! The player chose " + player.playerChoice + " and the computer chose " + computer.computerChoice + ".";
  let computerWins = "The computer wins! The player chose " + player.playerChoice + " and the computer chose " + computer.computerChoice + ".";
  
  //tie  
  if (computer.computerChoice == player.playerChoice) {
    winnerNotification.innerText = "It's a tie! Both the player and the computer chose " + computer.computerChoice + ".";
  }

  //not tie
  else if (computer.computerChoice === choices[0]) {
      if (player.playerChoice === choices[1]) {
        winnerNotification.innerText = playerWins;
      } else if (player.playerChoice === choices[2]) {
        winnerNotification.innerText = computerWins;
      }
  } else if (computer.computerChoice === choices[1]) {
    if (player.playerChoice === choices[0]) {
      winnerNotification.innerText = computerWins;
    } if (player.playerChoice === choices[2]) {
      winnerNotification.innerText = playerWins;
    }
  } else if (computer.computerChoice === choices[2]) {
    if (player.playerChoice === choices[1]) {
      winnerNotification.innerText = computerWins;
    } else if (player.playerChoice = choices[0]) {
      winnerNotification.innerText = playerWins;
    }
  }
}

function playerChooses() {
    document.querySelector('#rock').onclick = function() {
    winnerNotification.innerText = null;
    player.playerChoice = choices[0];
    computer.computerChoice = computerChooses();
    compareChoices();
  }
  document.querySelector('#paper').onclick = function() {
    winnerNotification.innerText = null;
    player.playerChoice = choices[1];
    computer.computerChoice = computerChooses();
    compareChoices();
  }
  document.querySelector('#scissors').onclick = function() {
    winnerNotification.innerText = null;
    player.playerChoice = choices[2];
    computer.computerChoice = computerChooses();
    compareChoices();
  }
}

playerChooses();