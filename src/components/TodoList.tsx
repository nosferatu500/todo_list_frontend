import React from "react";
import { TodoListItem } from "./TodoListItem";

type Props = {
  todos: ITodo[];
  toggleTodo: (selectedTodo: ITodo) => void;
};

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo._id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
