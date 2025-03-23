import React, { useState } from "react";

export const EditTodoForm = ({ changeTodo, todo }) => {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeTodo(value, todo.id);

    setValue("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update todo here"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-button">
        Update todo
      </button>
    </form>
  );
};
