import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../store/slices/todosSlice'

const InputForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = event => setValue(event.target.value)
  const handleSumit = event => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <form onSubmit={handleSumit}>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus value={value} onChange={handleChange} />
    </form>
  )
}

export default InputForm;
