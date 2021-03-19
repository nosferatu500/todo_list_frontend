import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: (selectedTodo: Todo) => void;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.timestamp.toString()}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};
