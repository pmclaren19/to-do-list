import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo) {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const changeTodo = (updatedTodo, id) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: updatedTodo, isEditing: !todo.isEditing }
          : todo
      )
    );
  };
  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm changeTodo={changeTodo} todo={todo} />
        ) : (
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
