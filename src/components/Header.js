import React from 'react'
import InputForm from './InputForm'

const Header = props => {
  return (
    <header className="header">
      <h1>todos</h1>
      <InputForm />
    </header>
  )
}

export default Header;
