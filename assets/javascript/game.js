// The Alphabet
var computerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Base Variables
var win = 0;
var loss = 0;
var guessesRemain = 10;
var letterUser = [];

// Computer selects a random letter
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

function countGuessesRemain () {
    document.querySelector("#guessesRemain").innerHTML = "Guesses Remaining: " + guessesRemain;
}

function playerGuess () {
    document.querySelector("#letter").innerHTML = "Your Guesses: " + letterUser.join('');
}

countGuessesRemain();

var restart = function() {
    guessesRemain = 9;
    letterUser = [];
    var computerGuess = computerChoice(Math.floor(Math.random() * computerChoice.length));
}

// When user presses a key...
document.onkeyup = function(event) {
    guessesRemain--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userGuess);
    countGuessesRemain();
    playerGuess();

    if(userGuess === computerGuess){
        win++;
        document.querySelector("#win").innerHTML = "Wins: " + win;
        restart();
    } else if (guessesRemain === 0) {
        loss++;
        document.querySelector("#loss").innerHTML = "Losses: " + loss;
        restart();
    }
}