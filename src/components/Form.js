import React from 'react'

const Form = ({ input, addTodo, setInput }) => {
  return (
    <form>
      <input className='todo-input' value={input} onChange={(e) => setInput(e.target.value)} type='text' />
      <button className='todo-button' onClick={addTodo}>Add Todo</button>
    </form>
  )
}

export default Form
