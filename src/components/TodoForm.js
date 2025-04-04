import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Add a new todo here"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-button">
        Add to do
      </button>
    </form>
  );
};
