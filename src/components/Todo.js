import React from 'react'

const Todo = ({ label }) => {
  return (
    <>
      <div className="view">
        <label>{label}</label>
      </div>
    </>
  )
}

export default Todo;
