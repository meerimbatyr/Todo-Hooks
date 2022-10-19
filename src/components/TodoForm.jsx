import React, { useEffect, useRef, useState } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      isCompleted: false,
    };

    onSubmit(newTodo);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className={`${edit ? "todo-input edit" : "todo-input"}`}
        type="text"
        placeholder="Add to do..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button className={`${edit ? "todo-button edit" : "todo-button"}`}>
        {edit ? "Update" : "Add Todo"}
      </button>
    </form>
  );
}

export default TodoForm;
