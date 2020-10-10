import React, { useState } from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import TodoEdit from "./TodoEdit";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.test)) {
      return;
    }

    const newTodo = [todo, ...todos];

    setTodos(newTodo);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\$*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>What's your focus for today?</h1>
      <TodoForm onSubmit={addToDo} />
      <TodoEdit
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
