import React, { useState } from "react";
import { ChangeTodoForm } from "./ChangeTodoForm";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

export const TodoItem: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const [visibility, setVisibility] = useState<boolean>();
  const updated = (updatedTodo: ITodo, isVisible: boolean) => {
    const update = {
      ...todo,
      text: updatedTodo.text,
    };
    updateTodo(update);

    setVisibility(isVisible);
  };
  return (
    <li>
      <label
        htmlFor="todoItem"
        style={{ textDecoration: todo.status ? "line-through" : undefined }}
      >
        <input
          id="todoItem"
          type="checkbox"
          defaultChecked={todo.status}
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
      <button type="button" onClick={() => setVisibility(true)}>
        Change
      </button>
      <button type="button" onClick={() => deleteTodo(todo._id)}>
        Delete
      </button>
      {visibility ? <ChangeTodoForm changeTodo={updated} /> : null}
    </li>
  );
};
