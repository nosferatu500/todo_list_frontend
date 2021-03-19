import React from "react";

type Props = TodoProps & {
  toggleTodo: (selectedTodo: ITodo) => void;
};

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        htmlFor="todoItem"
        style={{ textDecoration: todo.status ? "line-through" : undefined }}
      >
        <input
          id="todoItem"
          type="checkbox"
          checked={todo.status}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text} {todo.createdAt}
      </label>
    </li>
  );
};
