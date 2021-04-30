import React from 'react'
import {
  useRecoilValue,
  useSetRecoilState
} from 'recoil'

import todoListState from '../libs/recoil/atoms/todoList'
import Todo from './Todo';

const TodoList = props => {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const removeTodo = (id) => {
    setTodoList(state => state.filter(todo => todo.id !== id))
  }

  const toggleCompletion = (id) => {
    setTodoList(state => state.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
  }

  return (
    <ul className="todo-list">
      {todoList.map(({ id, label, isComplete }) => (
        <Todo key={id}
          id={id}
          label={label}
          isComplete={isComplete}
          removeTodo={removeTodo}
          toggleCompletion={toggleCompletion} />
      ))}
    </ul>
  )
}

export default TodoList;
