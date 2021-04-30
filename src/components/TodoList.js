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

  return (
    <ul className="todo-list">
      {todoList.map(({ id, label }) => (<Todo key={id} label={label} removeTodo={() => removeTodo(id)} />))}
    </ul>
  )
}

export default TodoList;
