var words = [
    "javascript",
    "react",
    "node",
    "jquery",
    "vscode",
    "chrome",
    "safari",
    "psuedocode",
    "bootcamp",
    "slack"
];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameStarted = false;
var pickRandom = "";
var blankSpaces = [];
var incorrectGuesses = [];
var pickRandomArray = [];

function start(event) {
    //storing the user guess
    var userGuessed = event.key;
    //if the game has not started yet
    if (!gameStarted) {
        //picking a random word from our list
        pickRandom = words[Math.floor(Math.random() * words.length)];
        //storing that the game has now started (if statement is now false)
        gameStarted = true;
        //determining the number of blank spaces
        for (var i = 0; i < pickRandom.length; i++) {
            blankSpaces.push("_ ");

        }
        //storing the letters of our word in an array
        pickRandomArray = pickRandom.split("");
    } else {
        guessesLeft--;
        incorrectGuesses.push(userGuessed);
    }
    //checking user guess against each letter in pickRandomArry
    for (var i = 0; i < pickRandomArray.length; i++) {
        if (userGuessed === pickRandom[i]) {
            blankSpaces[i] = userGuessed;
        }
    }
    //check if win or lose
    //if guesses left is zero you lose
    if (guessesLeft === 0) {
        losses++;
        alert('Sorry you Lose. Try again!')
        reset();
        //display win or lose message
    } else if (blankSpaces.indexOf("_ ") === -1) {
        //you win banner
        wins++;
        alert('You Win! See if you can beat your Highest Score!');
        reset();
    }
    console.log("guesses left:" + guessesLeft);
    console.log("blank spaces:" + blankSpaces.join(" "));

    document.getElementById('blankGuess').textContent = blankSpaces.join('');
    document.getElementById('wrongGuess').textContent = incorrectGuesses.join('');
    document.getElementById('remainingGuesses').textContent = guessesLeft;
    document.getElementById('winsBox').textContent = wins;
    document.getElementById('lossesBox').textContent = losses;


    if (guessesLeft === 10) {
        document.getElementById("gameBoardPic").src = '../assets/Images/0.jpg';
    } else if (guessesLeft === 9) {
        document.getElementById("gameBoardPic").src = '../assets/Images/1.jpg';
    } else if (guessesLeft === 8) {
        document.getElementById("gameBoardPic").src = '../assets/Images/2.jpg';
    } else if (guessesLeft === 7) {
        document.getElementById("gameBoardPic").src = '../assets/Images/3.jpg';
    } else if (guessesLeft === 6) {
        document.getElementById("gameBoardPic").src = '../assets/Images/4.jpg';
    } else if (guessesLeft === 5) {
        document.getElementById("gameBoardPic").src = '../assets/Images/5.jpg';
    } else if (guessesLeft === 4) {
        document.getElementById("gameBoardPic").src = '../assets/Images/6.jpg';
    } else if (guessesLeft === 3) {
        document.getElementById("gameBoardPic").src = '../assets/Images/7.jpg';
    } else if (guessesLeft === 2) {
        document.getElementById("gameBoardPic").src = '../assets/Images/8.jpg';
    } else if (guessesLeft === 1) {
        document.getElementById("gameBoardPic").src = '../assets/Images/9.jpg';
    } else if (guessesLeft === 0) {
        document.getElementById("gameBoardPic").src = '../assets/Images/10.jpg';
    }
}

function reset() {
    guessesLeft = 10;
    gameStarted = false;
    pickRandom = "";
    blankSpaces = [];
    incorrectGuesses.length = 0;
    pickRandomArray = [];
}
if (blankSpaces.indexOf("_ ") === -1) {
    reset();
}
if (guessesLeft === 0) {
    reset();
}

document.onkeyup = start;