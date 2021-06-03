import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filter: "All",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: uuidv4(),
        label: action.payload,
        isComplete: false,
      });
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, { payload: { id, label } }) => {
      state.items = state.items.map((todo) =>
        todo.id === id ? { ...todo, label } : todo
      );
    },
    toggleTodoCompletion: (state, action) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    },
    clearCompletedTodos: (state) => {
      state.items = state.items.filter(({ isComplete }) => !isComplete);
    },
    setTodoFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoCompletion,
  updateTodo,
  setTodoFilter,
  clearCompletedTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
