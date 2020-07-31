const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 'a', 'n']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach(letter => {
        if (letter === ' ' || this.guessedLetters.includes(letter)){
            puzzle += letter
        }else {
            puzzle += '*'
        }
    })
    return puzzle
}

const gameOne = new Hangman('Cat', 2)
console.log(gameOne.getPuzzle())

const gameTwo = new Hangman('New Jersey', 4)
console.log(gameTwo.getPuzzle())

