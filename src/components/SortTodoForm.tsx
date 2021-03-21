import React from "react";

type Props = {
  sortTodos: (sort: string) => void;
};

export const SortTodoForm: React.FC<Props> = ({ sortTodos }) => {
  return (
    <>
      <div className="card-header select-wrapper">
        <h1 className="card-header-title header-title">My Tasks </h1>
        <div className="select is-info is-rounded is-small">
          <select onChange={(e) => sortTodos(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </>
  );
};
