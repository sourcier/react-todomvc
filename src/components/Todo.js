import React from 'react'
import classnames from 'classnames'

const Todo = ({ id, label, isComplete, removeTodo, toggleCompletion }) => {
  return (
    <li className={classnames({ "completed": isComplete })}>
      <div className="view">
        <input className="toggle"
          type="checkbox"
          checked={isComplete}
          onChange={() => toggleCompletion(id)}
        />
        <label>{label}</label>
        <button className="destroy" onClick={() => removeTodo(id)} />
      </div>
    </li>
  )
}

export default Todo;
