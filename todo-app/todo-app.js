let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#add-todo-form').addEventListener('submit', e => {
    e.preventDefault()
    let newTodo = e.target.elements.newTodo
    todos.push({
        id: uuidv4(),
        text: newTodo.value, 
        completed: false
    })
    saveTodos(todos)
    newTodo.value = ''
    renderTodos(todos, filters)
})

document.querySelector('#filter-todos-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    
})

document.querySelector('#hide-completed').addEventListener('change', e => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})