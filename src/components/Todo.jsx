import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

function Todo({ todos, setTodos }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const handleComplete = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const handleEdit = (value) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === edit.id) {
        return value;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={handleEdit} />;
  }

  return todos.map((todo, index) => {
    return (
      <div
        key={index}
        className={`${todo.isCompleted ? "todo-row complete" : "todo-row"}`}
      >
        <div
          key={todo.id}
          className={`${todo.isCompleted && "complete"}`}
          onClick={() => handleComplete(todo.id)}
        >
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            className="delete-icon"
            onClick={() => handleDelete(todo.id)}
          />
          <TiEdit
            className="edit-icon"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          />
        </div>
      </div>
    );
  });
}

export default Todo;
