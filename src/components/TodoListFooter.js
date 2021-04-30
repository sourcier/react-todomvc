import React from 'react'
import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilState
} from 'recoil'
import classnames from 'classnames'

import { todoListFilterState } from '../libs/recoil/atoms/todoList'

const TodoListFooter = ({ totalUncompleted }) => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (value) => {
    setFilter(value);
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
    </footer>
  )
}

export default TodoListFooter
