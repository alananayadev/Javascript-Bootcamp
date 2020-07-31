class Hangman {
    constructor(word, guesses) {
        this.word = word
        this.guesses = guesses
    }
}

const gameOne = new Hangman('abecedario', 5)
const gameTwo = new Hangman('crazy', 3)

console.log(gameOne)
console.log(gameTwo)