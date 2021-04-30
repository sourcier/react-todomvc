import { atom } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export default todoListState
