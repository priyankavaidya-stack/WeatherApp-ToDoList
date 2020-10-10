import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your todo item"
          name="text"
          value={input}
          className="todo_input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo_button">Add Item</button>
      </form>
    </div>
  );
}

export default TodoForm;
