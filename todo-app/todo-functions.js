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
const saveTodos = todos => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

// Remove todo from list
const removeTodo = id => {
    const todoIndex = todos.findIndex(todo => {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Change todo status
const isCompleted = (id, completedTodo) => {
    const todoIndex = todos.findIndex(todo => {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos[todoIndex].completed = completedTodo
    }
}

// Generate Todo DOM
const generateTodoDOM = todo => {
    const todoElement = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Configure checkbox for todo

    checkbox.setAttribute('type', 'checkbox')
    todoElement.appendChild(checkbox)
    checkbox.checked = todo.completed
    todoElement.addEventListener('change', e => {
        const completedTodo = e.target.checked
        console.log(completedTodo);
        isCompleted(todo.id, completedTodo)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    // Add todo content to list
    todoText.textContent = todo.text
    todoElement.appendChild(todoText)

    // Add remove button
    removeButton.textContent = 'x'
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', e => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

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
const renderTodos = (todos, filters) => {
    const filteredToDos = todos.filter(todo => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#todos').innerHTML = ''
    const summary = generateSummaryDOM(filteredToDos)
    document.querySelector('#todos').appendChild(summary)

    filteredToDos.forEach(todo => {
        const todoElement = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoElement)
    });
}