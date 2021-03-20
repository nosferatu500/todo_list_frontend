import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, data: ITodo) => void;
};

export const AddTodoForm: React.FC<Props> = ({ saveTodo }) => {
  const [data, setData] = useState<ITodo | any>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.currentTarget.id]: e.currentTarget.value });
  };

  return (
    <form
      id="add-form"
      onSubmit={(e) => {
        saveTodo(e, data);
        (document.getElementById("text") as HTMLInputElement).value = "";
      }}
    >
      <input id="text" type="text" onChange={handleForm} />
      <button type="submit" disabled={data === undefined}>
        Add Todo
      </button>
    </form>
  );
};
