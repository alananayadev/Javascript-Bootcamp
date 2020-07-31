//Prototypal Inheritance
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullname) {
        const names = fullname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}


const me = new Person('Alan', 'Anaya', 25, ['Coding', 'Football'])
console.log(me.getBio())

const person1 = new Person('Abel', 'Anaya', 55)
console.log(person1.getBio())