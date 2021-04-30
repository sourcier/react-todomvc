import React from 'react'

const Todo = ({ id, label, isComplete, removeTodo }) => {
  return (
    <li>
      <div className="view">
        <label>{label}</label>
        <button className="destroy" onClick={() => removeTodo(id)} />
      </div>
    </li>
  )
}

export default Todo;
