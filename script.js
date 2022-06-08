'use strict';

var checkBtn = document.querySelector('.check');
var userGuess = document.querySelector('.guess');
var message = document.querySelector('.message');
var highScore = document.querySelector('.highscore');
var score = document.querySelector('.score');
var againBtn = document.querySelector('.again');
var number = document.querySelector('.number');
var randomNumber = 0;

const getNewRandomNumber = function () {
    let guessingNumber = Math.floor(Math.random()*20 + 1);
    console.log(guessingNumber); // to check
    randomNumber = guessingNumber;
}

const playAgain = function() {
    getNewRandomNumber();
    document.querySelector('body').style.backgroundColor = '#222';
    userGuess.value = '';
    score.textContent = 20;
    message.textContent = 'Start guessing...';
    number.textContent = '?';
}

playAgain();
againBtn.addEventListener('click', playAgain);


checkBtn.addEventListener('click', function() {
    if (userGuess.value == randomNumber) {
        message.textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        number.textContent = randomNumber;

        if (highScore.textContent <= score.textContent) {
            highScore.textContent = score.textContent;
        }
    }
    else if (userGuess.value > randomNumber) {
        message.textContent = 'Too High';
        score.textContent--;
    } 
    else if (userGuess.value < randomNumber) {
        message.textContent = 'Too Low';
        score.textContent--;
    } 

    
});