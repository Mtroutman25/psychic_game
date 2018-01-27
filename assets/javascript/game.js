

var wins = 0;

var losses = 0;

var guessRem = 10;

var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {

	var userGuess = event.key;

	var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

	
  function newGame() {
       guessRem = 10;
       userGuess = [];
       compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    
	}

		if (userGuess === compGuess) {
		
		wins++;
		newGame()
		}

		else if (guessRem === 0) {
		
		losses++;
		newGame()
		}



		else {
		
		guessRem--
		}



	

	var html =

		"<p>wins: " + wins + "</p>" +

		"<p>losses: " + losses + "</p>" +

		"<p>Guesses Remaining: " + guessRem + "</p>" +

		"<p>Your Guess: " + userGuess + "</p>";

	document.querySelector("#game").innerHTML = html;
}