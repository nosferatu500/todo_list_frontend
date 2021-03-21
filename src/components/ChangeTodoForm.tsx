import React, { useState } from "react";

type Props = {
  changeTodo: (data: ITodo, isVisible: boolean) => void;
};

export const ChangeTodoForm: React.FC<Props> = ({ changeTodo }) => {
  const [data, setData] = useState<ITodo | any>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({ ...data, text: e.currentTarget.value });
  };

  return (
    <form
      id="change-form"
      onSubmit={(e) => {
        e.preventDefault();
        changeTodo(data, false);
        (document.getElementById("change-text") as HTMLInputElement).value = "";
        setData(undefined);
      }}
    >
      <input
        className="input is-success is-small"
        id="change-text"
        type="text"
        onChange={handleForm}
      />
      <button
        className="button is-success is-small"
        type="submit"
        disabled={data === undefined}
      >
        Update
      </button>
    </form>
  );
};
