import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

export const TodoItem: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
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
          onClick={(e) => {
            const update = {
              ...todo,
              status: e.currentTarget.checked,
            };
            updateTodo(update);
          }}
        />{" "}
        {todo.text} {todo.createdAt}
      </label>
      <button type="button" onClick={() => deleteTodo(todo._id!)}>
        Delete
      </button>
    </li>
  );
};
