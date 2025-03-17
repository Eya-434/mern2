import React from 'react'
import { Link } from 'react-router-dom'

const Main1 = () => {
  return (
    <div className='container text-center mt-5'>
        <div className='d-flex justify-content-center gap-2 align-items-center'>
        <Link to="/">Home</Link> | 
        <Link to="add-to-do">Add a ToDo</Link> | 
        <Link to="ten-first-todo">10 First ToDos</Link>
        </div>
    </div>
  )
}

export default Main1 