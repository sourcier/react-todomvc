import React from 'react'
import { useState } from 'react'

const InputForm = props => {
  const [value, setValue] = useState('')

  const handleChange = event => setValue(event.target.value)
  const handleSumit = event => {
    console.log(`A todo was submitted`)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSumit}>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus value={value} onChange={handleChange} />
    </form>
  )
}

export default InputForm;
