import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        htmlFor="todoItem"
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          id="todoItem"
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text} {todo.timestamp}
      </label>
    </li>
  );
};
