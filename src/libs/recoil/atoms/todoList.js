import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)

    return {
      total: todoList.length,
      totalCompleted: todoList.filter(({ isComplete }) => isComplete).length,
      totalUncompleted: todoList.filter(({ isComplete }) => !isComplete).length,
    }
  }
})

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'All',
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todoList = get(todoListState);

    switch (filter) {
      case 'Completed':
        return todoList.filter(({ isComplete }) => isComplete)
      case 'Active':
        return todoList.filter(({ isComplete }) => !isComplete)
      default:
        return todoList
    }
  },
});

export default todoListState
