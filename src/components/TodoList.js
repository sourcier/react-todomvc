import React from 'react'
import {
  useRecoilValue,
} from 'recoil'

import todoListState from '../libs/recoil/atoms/todoList'
import Todo from './Todo';

const TodoList = props => {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul className="todo-list">
      {todoList.map(({ id, label }) => (<Todo key={id} label={label} />))}
    </ul>
  )
}

export default TodoList;
