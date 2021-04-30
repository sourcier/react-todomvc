import React from 'react'
import {
  useRecoilValue,
  useSetRecoilState
} from 'recoil'

import { todoListState, filteredTodoListState, todoListStatsState } from '../libs/recoil/atoms/todoList'
import Todo from './Todo';
import TodoListFooter from './TodoListFooter';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)
  const setTodoList = useSetRecoilState(todoListState)
  const { total } = useRecoilValue(todoListStatsState)

  const removeTodo = (id) => {
    setTodoList(state => state.filter(todo => todo.id !== id))
  }

  const toggleCompletion = (id) => {
    setTodoList(state => state.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
  }

  const updateTodo = ({ id, label }) => {
    setTodoList(state => state.map(todo => todo.id === id ? { ...todo, label } : todo))
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
              toggleCompletion={toggleCompletion}
              updateTodo={updateTodo} />
          ))}
        </ul>
      </section>
      {total > 0 && <TodoListFooter />}
    </>
  )
}

export default TodoList;
