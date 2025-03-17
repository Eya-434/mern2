import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route }  from "react-router-dom"
import AddToDo from './components/AddTodo'
import Home from './components/Home'
import ViewOne from './components/ViewOne'
import TenToDos from './components/TenTodos'
import Main1 from './views/Main1'
import axios from "axios"

function App() {

  const [alltodos, setAllToDos] = useState([])

  const [filteredToDos, setFilteredToDos] = useState([])

 
  const [searchTitle, setSearchTitle] = useState("")



  const [error, setError] = useState("")

  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      setAllToDos(response.data)
      console.log("After Fetching Our ToDos API :",response.data)
    })
    .catch()
  }, [])

  const filterToDoByTitle = () =>{
    const searchLower = searchTitle.toLowerCase();
    const filtered = alltodos.filter(todo => todo.title.toLowerCase().includes(searchLower))

    setFilteredToDos(filtered)
    console.log("Searching result: ",filtered)
    setError(filtered.length === 0 ? "This ToDO's title doesn't exist!!!" : "")
  }

  const addToDo = (task) => {
    const newTodo = {text : task, completed : false}
    setAllToDos([...alltodos, newTodo])
  }

  return (
    <div className='container'>
      <nav className='navbar navbar-expand-xl navbar-light bg-light'>
        <div className="container-fluid">
          <h5>ToDoApp</h5>
        </div>
        <div className="collapse navbar-collapse show">
          <div className="d-flex gap-3">
            <input type="text" className="form-control" placeholder="Serch a ToDo..." style={{width: "750px"}} onChange={(e)=> setSearchTitle(e.target.value)} value={searchTitle} />
            <button className='btn btn-primary' type='button' onClick={filterToDoByTitle}>Search</button>
          </div>
        </div>
      </nav>
      <div className="text-center">
        <Main1 />
      </div>
      <Routes>
        <Route path='/' element={<Home alltodos={filteredToDos} filteredToDos={filteredToDos} />} />
        <Route path='/add-to-do' element={<AddToDo addToDo={addToDo}/>} />
        <Route path='/todo/:id' element={<ViewOne alltodos={alltodos} />} />
        <Route path='/ten-first-todo' element={<TenToDos alltodos={alltodos} />} />
      </Routes>
    </div>
  )
}

export default App