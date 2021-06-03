import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

const Todo = ({
  id,
  label,
  isComplete,
  removeTodo,
  toggleCompletion,
  updateTodo,
}) => {
  const [editing, setEdting] = useState(false);
  const [value, setValue] = useState(label);
  const textInput = useRef(null);
  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = () => {
    updateTodo({ id, label: value });
    setEdting(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit();
    }
  };

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <li className={classnames({ completed: isComplete, editing })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isComplete}
          onChange={() => toggleCompletion()}
          id="edit"
        />
        <label onDoubleClick={() => setEdting(true)} htmlFor="edit">
          {label}
        </label>
        <button
          type="button"
          aria-label="Save"
          className="destroy"
          onClick={() => removeTodo()}
        />
      </div>
      <input
        className="edit"
        ref={textInput}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleSubmit}
      />
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default Todo;
