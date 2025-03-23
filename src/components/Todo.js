import {
  faCheckSquare,
  faPenToSquare,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <div className="tooltip" onClick={() => toggleComplete(todo.id)}>
        <FontAwesomeIcon
          className="complete-icon"
          icon={!todo.completed ? faSquare : faCheckSquare}
        />
        <span class="tooltiptext">
          {!todo.completed ? "Complete To Do" : "Uncomplete To Do"}
        </span>
      </div>

      <p className={`${todo.completed ? "completed" : "incompleted"}`}>
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};
