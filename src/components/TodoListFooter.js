import React from 'react'
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil'
import classnames from 'classnames'

import { todoListState, todoListStatsState, todoListFilterState } from '../libs/recoil/atoms/todoList'

const TodoListFooter = () => {
  const setTodoList = useSetRecoilState(todoListState)
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const { totalUncompleted, totalCompleted } = useRecoilValue(todoListStatsState)

  const updateFilter = (value) => {
    setFilter(value);
  }

  const clearCompletedTodos = () => {
    setTodoList(state => state.filter(({ isComplete }) => !isComplete))
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
      {totalCompleted > 0 && <button className="clear-completed" onClick={() => clearCompletedTodos()}>Clear completed</button>}
    </footer>
  )
}

export default TodoListFooter
