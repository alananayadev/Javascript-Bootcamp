const people = [{
    name: 'Alan',
    age: 25
}, {
    name: 'Abel',
    age: 55
}, {
    name: 'Timmy',
    age: 22
}]

// basic way to create a function
// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

//Arrow function
const under30 = people.filter(person => person.age < 30)
console.log(under30)

// person with age 22
const person = people.find(person => person.age === 22)
console.log(person.name)
