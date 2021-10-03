
export const getAllTodos = (setTodos) => {
  const getLocalStorageTodos = localStorage.getItem('todos')
  return setTodos(JSON.parse(getLocalStorageTodos))
}

export const deleteTodo = (id, todos, setTodos) => {
  const newTodos = todos.filter(todo => todo.id !== id)
  setTodos(newTodos)
  localStorage.setItem('todos', JSON.stringify(newTodos))
}

export const addTodo = (e, input, setTodos, setInput, todos) => {
  e.preventDefault()

  if (input.trim().length < 1) {
    return null
  }

  const newTodo = [
    ...todos,
    {
      id: new Date(),
      desc: input,
      completed: false
    }]
  setTodos(newTodo)
  setInput(' ')
  localStorage.setItem('todos', JSON.stringify(newTodo))
}
