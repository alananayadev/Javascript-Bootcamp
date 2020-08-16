const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count --
        }, 
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return (b = 2) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(4))
console.log(add10(20))

const createTipper = (tip = 15) => {
    return bill => bill * (tip/100)
}

const tipIt = createTipper()
console.log(tipIt(100))