import React, {useState} from 'react'

const AddTodo = ({AddTodo}) => {

  const [task, setTask] = useState("")
  const handleSubmit = (e) => {
    e.preventdefault()
    if (task.trim()) {
      AddTodo(task)
      setTask('')
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text"  value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add new task ..."/>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo