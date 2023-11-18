let randomNumber = parseInt(Math.random() * 100 + 1);

const submitGuess = document.querySelector('#submitguess');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingField = document.querySelector('.lastResult');
const lowerhigh = document.querySelector('.lowerHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submitGuess.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    })
}


function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number more than 1');
    } else if (guess > 100) {
        alert('please enter a number less than 100');
} else {
    prevGuess.push(guess);
    if(numGuess === 11) {
        dispalyGuess(guess);
        dispalyMessage(`Game Over Random number was ${randomNumber}`);
        endGame();
    } else {
        dispalyGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        dispalyMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber){
        dispalyMessage(`Number is Tooo Low`);
    } else if (guess > randomNumber){
        dispalyMessage(`Number is Tooo high`);
    }
}

function dispalyGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainingField.innerHTML = `${11 - numGuess}`;
}

function dispalyMessage(message) {
    lowerhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remainingField.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}