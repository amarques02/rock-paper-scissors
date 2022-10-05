let	choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
	return (choices[Math.floor(Math.random() * choices.length)])
}

 function playRound(playerSelection, computerSelection) {
	if (playerSelection == 'rock'){
		if (computerSelection == 'paper')
			return ("You Lose! Paper beats Rock")
		else if (computerSelection == 'scissors')
			return ("You Win! Rock beats Scissors")
		else
			return ("Draw!")
	}
	else if (playerSelection == 'paper'){
		if (computerSelection == 'rock')
			return ("You Win! Paper beats Rock")
		else if (computerSelection == 'scissors')
			return ("You Lose! scissors beats paper")
		else
			return ("Draw!")
	}
	else {
		if (computerSelection == 'paper')
			return ("You Win! Scissors beats Paper")
		else if (computerSelection == 'rock')
			return ("You Lose! Rock beats Scissors")
		else
			return ("Draw!")
	}
}
while (1) {
	let playerSelection = window.prompt("Pick your weapon!");
	playerSelection = playerSelection.toLowerCase();
	while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != 'scissors') {
		playerSelection = window.prompt("Woops! That\'s not a valid choice!\nTry again");
		playerSelection = playerSelection.toLowerCase();
	}
	const computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
	playerSelection = window.prompt("Type enter to try again or \'close\' to exit the game");
	if (playerSelection == 'close')
		break;
}	
