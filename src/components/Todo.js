import { AiOutlineDelete } from 'react-icons/ai'
const Todo = ({ id, desc, deleteTodo }) => {
  return (
    <li className='todo'>{desc}
      <button className='delete-button' onClick={() => deleteTodo(id)}><AiOutlineDelete /></button>
    </li>
  )
}

export default Todo
