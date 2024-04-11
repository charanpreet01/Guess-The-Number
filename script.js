let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

let validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuesses.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over! Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

let checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO Low!`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High!`)
    }
}

let displayGuess = (guess) => {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

let displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

let endGame = () => {
    userInput.valuec = "";
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

let newGame = () => {
    const newGame = document.querySelector("#newGame");
    newGame.addEventListener("click", (e) => {
        let randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuesses = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute("disabled");
        submit.removeAttribute("disabled");
        startOver.removeChild("p");

        playGame = true;
    })

}