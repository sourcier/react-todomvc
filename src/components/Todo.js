import React from 'react'
import { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'

const Todo = ({ id, label, isComplete, removeTodo, toggleCompletion, updateTodo }) => {
  const [editing, setEdting] = useState(false)
  const [value, setValue] = useState(label)
  const textInput = useRef(null);
  const handleChange = event => setValue(event.target.value)
  const handleSubmit = () => {
    updateTodo({ id, label: value })
    setEdting(false)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      handleSubmit()
    }
  }

  useEffect(() => {
    textInput.current.focus()
  })

  return (
    <li className={classnames({ completed: isComplete, editing })}>
      <div className="view">
        <input className="toggle"
          type="checkbox"
          checked={isComplete}
          onChange={() => toggleCompletion(id)}
        />
        <label onDoubleClick={() => setEdting(true)}>{label}</label>
        <button className="destroy" onClick={() => removeTodo(id)} />
      </div>
      <input className="edit"
        ref={textInput}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleSubmit}
      />
    </li>
  )
}

export default Todo;
