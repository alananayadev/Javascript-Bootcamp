// const notes = ['Note 1', 'Note 2', 'Note 3']
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const sortNotes = notes => {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

const findNote = (notes, noteTitle) => {
    return notes.find(note => note.title.toLowerCase() === noteTitle.toLowerCase())
}

const findNotes = (notes, query) => {
    return notes.filter((note, index) => {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.title.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

sortNotes(notes);
console.log(notes)

// const findNote = (notes, noteTitle) => {
//     const index = notes.findIndex(note => note.title.toLowerCase() === noteTitle.toLowerCase())
//     return notes[index]
// }

// const note = findNote(notes, 'office modifications')
// console.log(note)

// console.log(notes.length)
// console.log(notes)
//
// const index = notes.findIndex(note => note.title === 'Habits to work on')
// console.log(index)