const to_dos = [{
    text: 'Wash the dishes',
    completed: true
    }, {
    text: 'Study more',
    completed: false
    }, {
    text: 'Get a job',
    completed: true
    }, {
    text: 'Brush your teeth',
    completed: true
    }, {
    text: 'Sleep on time',
    completed: false
}]

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a to_do by text value

const deleteToDo = (to_dos, to_doText) => {
    const index = to_dos.findIndex(to_do => to_do.text.toLowerCase() === to_doText.toLowerCase())
    if (index > -1) to_dos.splice(index, 1)
}

const getThingsToDo = to_dos => to_dos.filter(toDo => !toDo.completed)

const sortCompletedToDos = to_dos => to_dos.sort((a,b) => {
    if (!a.completed && b.completed) return -1
    else if (!b.completed && a.completed) return 1
    else return 0
})

sortCompletedToDos(to_dos)

console.log(to_dos)