import React from 'react'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid';

import todoListState from '../libs/recoil/atoms/todoList'

const InputForm = props => {
  const [value, setValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = (value) => {
    setTodoList(state => [
      ...state,
      {
        id: uuidv4(),
        label: value,
        isComplete: false
      }
    ])
  }

  const handleChange = event => setValue(event.target.value)
  const handleSumit = event => {
    event.preventDefault()
    addTodo(value)
    setValue('')

  }

  return (
    <form onSubmit={handleSumit}>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus value={value} onChange={handleChange} />
    </form>
  )
}

export default InputForm;
