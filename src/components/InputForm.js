import React from 'react'
import { useState } from 'react'

const InputForm = props => {
  const [value, setValue] = useState(null)

  const handleChange = event => setValue(event.target.value)
  const handleSumit = event => {
    console.log(`A todo was submitted`)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSumit}>
      <input class="new-todo" placeholder="What needs to be done?" autofocus value={value} onChange={handleChange} />
    </form>
  )
}

export default InputForm;
