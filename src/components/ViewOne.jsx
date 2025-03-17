import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewOne = (props) => {
  const { id } = useParams();
  const [todo, setToDo] = useState(null); //* 1

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setToDo(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Error for fetching", err);
      });
  }, [id]);
  if(!todo) {
    return <p className="text-danger">Todos not found!</p>
  }

  return (
    <div className="text-center mt-4">
      <div className="card">
        <div className="card-header">
          
           <h6>ToDo: {todo.id}</h6> 
    
        </div>
        <div className="card-body">
          <p>Title: {todo.title}</p>
          <input type="checkbox" checked={todo.completed} />
          <label className="ms-2">
            {todo.completed ? "Completed" : "Not Completed"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ViewOne