let totalRounds = 6;
let roundsPlayed = 0;
let playerScore = 0;
function getComputerChoice() {
	let	choices = ['rock', 'paper', 'scissors'];
	return (choices[Math.floor(Math.random() * choices.length)])
}

function playRound(playerSelection, computerSelection) {
	let playerPoint = 0;

	if ((playerSelection == 'scissors' && computerSelection == 'paper') ||
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'rock' && computerSelection == 'scissors')) {
		playerPoint = 1;
		console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
	}
	else if (playerSelection == computerSelection) {
		console.log('It\'s a draw!');
		roundsPlayed--;
	}
	else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != 'scissors') {
		console.log(playerSelection + ' isn\'t even an option.\nL + ratio + no bitches + you\'re ugly (ye you lost this one)');
	}
	else
		console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
	return (playerPoint)
}

while (roundsPlayed < totalRounds) {
	let playerSelection = window.prompt('Pick your weapon!');
	playerSelection = playerSelection.toLowerCase();
	let computerSelection = getComputerChoice();
	playerScore += playRound(playerSelection, computerSelection);
	roundsPlayed++;
}
if (playerScore > (roundsPlayed / 2))
	console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' total points. GG!');
else if (playerScore == (roundsPlayed / 2))
	console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' total points. Draw!');
else
	console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' total points. Game Over!');