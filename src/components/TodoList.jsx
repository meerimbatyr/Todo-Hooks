import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <>
      <h1>What is the plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;
