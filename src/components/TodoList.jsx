import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Todo from "./Todo";
import TodoListFooter from "./TodoListFooter";
import {
  removeTodo,
  updateTodo,
  toggleTodoCompletion,
} from "../store/slices/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.todos.items.length);
  const todoList = useSelector((state) => {
    const { filter, items } = state.todos;

    switch (filter) {
      case "Completed":
        return items.filter(({ isComplete }) => isComplete);
      case "Active":
        return items.filter(({ isComplete }) => !isComplete);
      default:
        return items;
    }
  });

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {todoList.map(({ id, label, isComplete }) => (
            <Todo
              key={id}
              id={id}
              label={label}
              isComplete={isComplete}
              removeTodo={() => dispatch(removeTodo(id))}
              toggleCompletion={() => dispatch(toggleTodoCompletion(id))}
              updateTodo={(todo) => dispatch(updateTodo(todo))}
            />
          ))}
        </ul>
      </section>
      {total > 0 && <TodoListFooter />}
    </>
  );
};

export default TodoList;
