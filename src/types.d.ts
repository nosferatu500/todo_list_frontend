interface Todo {
  timestamp: number;
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
type SortTodos = (sort: string) => void;
