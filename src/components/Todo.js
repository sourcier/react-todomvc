import React from 'react'

const Todo = ({ label }) => {
  return (
    <li>
      <div className="view">
        <label>{label}</label>
      </div>
    </li>
  )
}

export default Todo;
