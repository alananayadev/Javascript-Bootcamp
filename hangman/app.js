//HTTP (Hypertext Transfer Protocol)
//Request - What do we want to do
//Response - What was actually done

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

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})


// const countryCode = 'MX'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const result = data.find(country => country.alpha2Code === countryCode)
//         console.log(result ? result.name : 'Sorry we couldn\'t find your country')
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()

