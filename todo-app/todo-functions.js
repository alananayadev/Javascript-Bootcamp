//Fetch existing todos from localStorage
const getSavedTodos = _ => {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null){
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = to_dos => {
    localStorage.setItem('todos',JSON.stringify(to_dos))
}

// Generate Todo DOM
const generateTodoDOM = to_do => {
    const todoElement = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Configure checkbox for to_do
    checkbox.setAttribute('type', 'checkbox')
    todoElement.appendChild(checkbox)

    // Add to_do content to list
    todoText.textContent = to_do.text
    todoElement.appendChild(todoText)

    // Add remove button
    removeButton.textContent = 'Delete Todo'
    todoElement.appendChild(removeButton)

    return todoElement
}

// Generate todos summary
const generateSummaryDOM = filteredToDos => {
    const todosLeft = filteredToDos.filter(todo => {
        return !todo.completed
    })
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosLeft.length} todos left`
    return summary
}

// Render todos list
const renderTodos = (to_dos, filters) => {
    const filteredToDos = to_dos.filter(to_do => {
        const searchTextMatch = to_do.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !to_do.completed
        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#todos').innerHTML = ''
    const summary = generateSummaryDOM(filteredToDos)
    document.querySelector('#todos').appendChild(summary)

    filteredToDos.forEach(to_do => {
        const todoElement = generateTodoDOM(to_do)
        document.querySelector('#todos').appendChild(todoElement)
    });
}