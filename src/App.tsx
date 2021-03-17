import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Todo[] = [
  {
    timestamp: Date.now(),
    text: "aaaaaaa",
    complete: true,
  },
  {
    timestamp: Date.now() + 1,
    text: "bbbbbb",
    complete: false,
  },
];

function App() {
  const [todos, setData] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }

      return todo;
    });

    setData(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {
      timestamp: Date.now(),
      text,
      complete: false,
    };
    setData([...todos, newTodo]);
  };

  const sortTodos: SortTodos = (sort: string) => {
    const types: { [key: string]: number } = {
      asc: 1,
      desc: -1,
    };
    const sorted = [...todos].sort((a, b) =>
      a.timestamp > b.timestamp ? types[sort] : -types[sort]
    );
    setData(sorted);
  };

  return (
    <>
      <select onChange={(e) => sortTodos(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
