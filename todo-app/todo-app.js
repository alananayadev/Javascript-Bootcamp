let to_dos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(to_dos, filters)

document.querySelector('#add-todo-form').addEventListener('submit', e => {
    e.preventDefault()
    let newTodo = e.target.elements.newTodo.value
    to_dos.push({text: newTodo, completed: false})
    saveTodos(to_dos)
    newTodo = ''
    renderTodos(to_dos, filters)
})

document.querySelector('#filter-todos-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(to_dos, filters)
    
})

document.querySelector('#hide-completed').addEventListener('change', e => {
    filters.hideCompleted = e.target.checked
    renderTodos(to_dos, filters)
})