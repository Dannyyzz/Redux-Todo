let addTodoId = 0

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: addTodoId + 1, 
    text
})

export const todoId = id => ({
    type: 'TODO_ID',
    id
})

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
})

export const Filter = {
    SHOW_EVERYTHING: 'SHOW_EVERYTHING',
    SHOW_TODO : 'SHOW_TODO',
    SHOW_DONE : 'SHOW_DONE'
}