  
import './TodoItem.css'

const TodoItem = ({ title, description, stillTodo, handleDelete,handleDone,id }) => {
  return (
    <>
        <div>{title}</div>
        <div>{description}</div>
        <button onClick = {()=>handleDone(id)}>Check!</button>
        <button onClick = {()=>handleDelete(id)}>Delete</button>
    </>
  )
}

export default TodoItem