let num = 103.941

// ToFixed Method 
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

//Challenge Area
// 1 - 5 - true - false if not correct
let makeGuess = function (guessNumber) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guessNumber === randomNum
}
console.log(makeGuess(1))