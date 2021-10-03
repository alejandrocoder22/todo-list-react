import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Todo from './components/Todo'
import { getAllTodos, deleteTodo, addTodo } from './helpers/functions'
import './styles/style.css'

const TodoApp = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos(setTodos)
  }, [])

  return (
    <div>
      <h1>Todo App</h1>
      <hr />
      <div className='todos-container'>
        {todos.map(todo => {
          const { id, desc } = todo
          return (
            <Todo
              key={id}
              id={id}
              desc={desc}
              deleteTodo={() => deleteTodo(id, todos, setTodos)}
            />
          )
        })}
        <Form
          input={input}
          addTodo={(e) => addTodo(e, input, setTodos, setInput, todos)}
          setInput={setInput}
        />
      </div>
    </div>
  )
}

export default TodoApp
