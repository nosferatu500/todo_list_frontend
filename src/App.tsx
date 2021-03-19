import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { SortTodoForm } from "./components/SortTodoForm";

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

const App: React.FC = () => {
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

  const addTodo = (text: string): void => {
    const newTodo = {
      timestamp: Date.now(),
      text,
      complete: false,
    };
    setData([...todos, newTodo]);
  };

  const sortTodos = (sort: string): void => {
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
      <SortTodoForm sortTodos={sortTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
