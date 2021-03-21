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
    <>
      <article
        className={`message is-small ${todo.status ? "is-success" : "is-info"}`}
      >
        <div className="message-header">
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
          />
          <label
            className="header"
            htmlFor="todoItem"
            style={{ textDecoration: todo.status ? "line-through" : undefined }}
          >
            {" "}
            {todo.text}
          </label>
          <button
            type="button"
            className="delete"
            aria-label="delete"
            onClick={() => deleteTodo(todo._id)}
          />
        </div>
        <div>
          <div>
            <div>Created at: {todo.createdAt}</div>
            <div>Updated at: {todo.updatedAt}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                marginLeft: "auto",
                padding: "10px",
              }}
            >
              <button
                className="button is-warning is-rounded is-small fixed-width"
                type="button"
                onClick={() => setVisibility(!visibility)}
              >
                {visibility ? <>Close</> : <>Edit</>}
              </button>
            </div>
          </div>
        </div>
      </article>
      {visibility ? <ChangeTodoForm changeTodo={updated} /> : null}
    </>
  );
};
