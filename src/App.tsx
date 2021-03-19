import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { SortTodoForm } from "./components/SortTodoForm";

const initialTodos: ITodo[] = [
  {
    _id: "213",
    createdAt: new Date().toISOString(),
    text: "aaaaaaa",
    status: true,
  },
  {
    _id: "324",
    createdAt: new Date(Date.now() + 1).toISOString(),
    text: "bbbbbb",
    status: false,
  },
];

const App: React.FC = () => {
  const [todos, setData] = useState<ITodo[]>(initialTodos);

  const toggleTodo = (selectedTodo: ITodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          status: !todo.status,
        };
      }

      return todo;
    });

    setData(newTodos);
  };

  const addTodo = (text: string): void => {
    const newTodo: ITodo = {
      createdAt: new Date().toISOString(),
      text,
      status: false,
    };
    setData([...todos, newTodo]);
  };

  const sortTodos = (sort: string): void => {
    const types: { [key: string]: number } = {
      asc: 1,
      desc: -1,
    };
    const sorted = [...todos].sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return a.createdAt > b.createdAt ? types[sort] : -types[sort];
      }
      throw new Error("sortTodos: Couldn't find createdAt field.");
    });
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
