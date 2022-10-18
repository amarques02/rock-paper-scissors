let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function getComputerChoice() {
	let	choices = ['rock', 'paper', 'scissors'];
	return (choices[Math.floor(Math.random() * choices.length)])
}

buttons.forEach(button => {
	button.addEventListener('click', function(){
		playRound(button.value)
	})
})

function resetButtons() {
	buttons.forEach(button => {
		button.disabled = true
	})
}

function playRound(playerSelection) {
	let resultMessage = "";
	let scoreMessage = "";
	let computerSelection = getComputerChoice();

	if ((playerSelection == 'scissors' && computerSelection == 'paper') ||
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'rock' && computerSelection == 'scissors')) {
		resultMessage = '<br><b>You win :) </b><br>' + playerSelection + ' beats ' + computerSelection;
		playerScore += 1;
		scoreMessage = '<br><br><b>Current Score: </b><br>' + 'Player: '+ playerScore + '  CPU: ' + computerScore;
		if (playerScore == 5) {
			resultMessage += '<br><b>You won, GG! Reload the page to start a new game.';
			resetButtons();
		}
	}
	else if (playerSelection == computerSelection) {	
		resultMessage ='<br><b>It\'s a draw!</b><br> you both played ' + playerSelection;
		scoreMessage = '<br><br><b>Current Score: </b><br>' + 'Player: '+ playerScore + '  CPU: ' + computerScore;
	}
	else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != 'scissors') {
		resultMessage = '<br><b>Bruh </b><br>' + playerSelection + ' isn\'t even an option.\nL + ratio + no bitches + you\'re ugly';
		scoreMessage = '<br><br><b>Current Score: </b><br>' + 'Player: '+ playerScore + '  CPU: ' + computerScore;
	}
	else {
		resultMessage ='<br><b>You lose :(</b><br> ' + computerSelection + ' beats ' + playerSelection;
		computerScore += 1;
		scoreMessage = '<br><br><b>Current Score: </b><br>' + 'Player: '+ playerScore + '  CPU: ' + computerScore;
		if (computerScore == 5) {
			resultMessage += '<br><b>Rip my man, you lost :( reload the page to start a new game.';
			resetButtons();
		}
	}
	document.getElementById('game').innerHTML = resultMessage;
	document.getElementById('score').innerHTML = scoreMessage;
}