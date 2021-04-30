import React from 'react'

const TodoListFooter = ({ totalUncompleted }) => {
  return (
    <footer class="footer">
      <span class="todo-count"><strong>{totalUncompleted}</strong> items left</span>
    </footer>
  )
}

export default TodoListFooter
