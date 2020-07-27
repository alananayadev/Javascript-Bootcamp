let name = 'Alan Anaya'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('abc123'))

// Trim
console.log(name.trim())


// Challenge area

//isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password') 
}
// length is more than 8 - and it doesn't contains the word password


console.log(isValidPassword('pass123'))
console.log(isValidPassword('alskfncmk@dlkzxm'))
console.log(isValidPassword('022password923'))