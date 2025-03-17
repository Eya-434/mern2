import React from "react";
import { Link } from "react-router-dom";

const TenTodos = (props) => {
  const { alltodos } = props;

  return (
    <div className="container mt-4">
      <h3 className="text-center">The First 10 ToDOs from APIs</h3>
      <div className="row">
        {alltodos.slice(0, 10).map((todo) => (
          <div className="col-3 mb-3">
            <div className="card">
              <div className="card-header">
              <Link className='text-center' to={`/todo/${todo.id}`}>ToDo: {todo.id}</Link>
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
        ))}
      </div>
    </div>
  );
};

export default TenTodos