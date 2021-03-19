import React from "react";

type Props = {
  sortTodos: (sort: string) => void;
};

export const SortTodoForm: React.FC<Props> = ({ sortTodos }) => {
  return (
    <select onChange={(e) => sortTodos(e.target.value)}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};
