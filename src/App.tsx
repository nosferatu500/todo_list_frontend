import React, { useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { AddTodoForm } from "./components/AddTodoForm";
import { SortTodoForm } from "./components/SortTodoForm";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";

const App: React.FC = () => {
  const [todos, setData] = useState<ITodo[]>([]);

  const fetchData = (): void => {
    getTodos()
      .then(({ data }) => setData(data.todos))
      .catch((err: Error) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveData = (newData: ITodo): void => {
    addTodo(newData)
      .then(({ data }) => setData(data.todos))
      .catch((err: Error) => console.log(err));
  };

  const updateData = (update: ITodo): void => {
    updateTodo(update)
      .then(({ data }) => setData(data.todos))
      .catch((err: Error) => console.log(err));
  };

  const deleteData = (_id: string): void => {
    deleteTodo(_id)
      .then(({ data }) => setData(data.todos))
      .catch((err: Error) => console.log(err));
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
      <div className="wrapper">
        <div className="card frame">
          <SortTodoForm sortTodos={sortTodos} />
          <div className="list-wrapper">
            {todos.map((todo: ITodo) => (
              <div className="list-item">
                <TodoItem
                  key={todo._id}
                  updateTodo={updateData}
                  deleteTodo={deleteData}
                  todo={todo}
                />
              </div>
            ))}
          </div>
          <AddTodoForm saveTodo={saveData} />
        </div>
      </div>
    </>
  );
};

export default App;
