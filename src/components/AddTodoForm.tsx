import React, { useState } from "react";

type Props = {
  saveTodo: (data: ITodo) => void;
};

export const AddTodoForm: React.FC<Props> = ({ saveTodo }) => {
  const [data, setData] = useState<ITodo | any>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({ ...data, text: e.currentTarget.value });
  };

  return (
    <form
      id="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo(data);
        (document.getElementById("add-text") as HTMLInputElement).value = "";
        setData(undefined);
      }}
    >
      <input
        className="input is-info"
        id="add-text"
        type="text"
        onChange={handleForm}
      />
      <button
        className="button is-info"
        type="submit"
        disabled={data === undefined}
      >
        Add Todo
      </button>
    </form>
  );
};
