let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById('guessSubmit');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset');

guessSubmit.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function resetGame(){
    window.location.reload();
}

function checkGuess() {
    const userGuess = Number(guessField.value);
    attempts++;

    if (userGuess === randomNumber) {
        result.innerHTML = `Congratulations! You guessed it in ${attempts} attempts! 🎉`;
        result.style.color = '#840617';
    } else if (userGuess < randomNumber) {
        result.textContent = '📉 Too low! Try again.';
        result.style.color = '#306347';
    } else {
        result.textContent = ' 📈 Too high! Try again.';
        result.style.color = '#5d156f';
    }
} 