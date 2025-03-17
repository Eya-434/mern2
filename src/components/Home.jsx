import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const { alltodos, filteredToDos } = props
  return (
    <div className='container'>
        <div className="row">
            {
                alltodos.length === 0 ? (
                    <p className='text-center text-danger'>Not ToDos Found!!!</p>
                ) : (
                    alltodos.map((oneToDo) => (
                        <div className="col-3 mb-3" key={oneToDo.id}>
                            <div className="card">
                                <div className="card-header">
                                    <Link className='text-center' to={`/todo/${oneToDo.id}`}>ToDo: {oneToDo.id}</Link>
                                </div>
                                <div className="card-body">
                                    <p>Title: {oneToDo.title}</p>
                                    <input type="checkbox" checked={oneToDo.completed} />
                                    <label className='ms-2'>
                                        {
                                            oneToDo.completed ? "Completed" : "Not Completed"
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}

export default Home