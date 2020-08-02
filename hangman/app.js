const puzzlEl = document.querySelector('#hangman-word')
const guessesEl = document.querySelector('#guesses')

const newGame = new Hangman("nueva Jersey", 4)
puzzlEl.textContent = newGame.puzzle
guessesEl.textContent = newGame.statusMessages


window.addEventListener('keypress', e => {
    if (newGame.status === 'playing') {
        const guess = String.fromCharCode(e.charCode)
        newGame.guessLetter(guess)
        newGame.checkStatus()
        puzzlEl.textContent = newGame.puzzle
        guessesEl.textContent = newGame.statusMessages
    }
})