//HTTP (Hypertext Transfer Protocol)
//Request - What do we want to do
//Response - What was actually done

const puzzlEl = document.querySelector('#hangman-word')
const guessesEl = document.querySelector('#guesses')
let newGame

window.addEventListener('keypress', e => {
    if (newGame.status === 'playing') {
        const guess = String.fromCharCode(e.charCode)
        newGame.guessLetter(guess)
        newGame.checkStatus()
        puzzlEl.textContent = newGame.puzzle
        guessesEl.textContent = newGame.statusMessages
    }
})

const render = () => {
    puzzlEl.textContent = newGame.puzzle
    guessesEl.textContent = newGame.statusMessages
}

const startGame = async () => {
    const puzzle = await getPuzzle('1')
    newGame = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

