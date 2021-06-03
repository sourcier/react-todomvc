import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil'
import classnames from 'classnames'

import { todoListState, todoListStatsState, todoListFilterState } from '../libs/recoil/atoms/todoList'
import { setTodoFilter, clearCompletedTodos } from '../store/slices/todosSlice'

const TodoListFooter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.todos.filter)
  const { totalUncompleted, totalCompleted } = useSelector(state => {
    const { items } = state.todos

    return {
      totalCompleted: items.filter(({ isComplete }) => isComplete).length,
      totalUncompleted: items.filter(({ isComplete }) => !isComplete).length,
    }
  })

  const updateFilter = (value) => {
    dispatch(setTodoFilter(value))
  }

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{totalUncompleted}</strong> items left</span>
      <ul className="filters">
        <li>
          <a className={classnames({ selected: filter === 'All' })}
            onClick={() => updateFilter('All')}
          >
            All
          </a>
        </li>
        <li>
          <a className={classnames({ selected: filter === 'Active' })}
            onClick={() => updateFilter('Active')}
          >
            Active
          </a>
        </li>
        <li>
          <a className={classnames({ selected: filter === 'Completed' })}
            onClick={() => updateFilter('Completed')}
          >
            Completed
          </a>
        </li>
      </ul>
      {totalCompleted > 0 && <button className="clear-completed" onClick={() => dispatch(clearCompletedTodos())}>Clear completed</button>}
    </footer>
  )
}

export default TodoListFooter
