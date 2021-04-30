import React from 'react'
import {
  useRecoilValue,
  useSetRecoilState
} from 'recoil'

import { todoListState, filteredTodoListState, todoListStatsState } from '../libs/recoil/atoms/todoList'
import Todo from './Todo';
import TodoListFooter from './TodoListFooter';

const TodoList = props => {
  const todoList = useRecoilValue(filteredTodoListState)
  const setTodoList = useSetRecoilState(todoListState)
  const {
    total,
    totalUncompleted,
  } = useRecoilValue(todoListStatsState)

  const removeTodo = (id) => {
    setTodoList(state => state.filter(todo => todo.id !== id))
  }

  const toggleCompletion = (id) => {
    setTodoList(state => state.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
  }

  return (
    <>
      <section className="main">
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
      </section>
      {total > 0 && <TodoListFooter totalUncompleted={totalUncompleted} />}
    </>
  )
}

export default TodoList;
