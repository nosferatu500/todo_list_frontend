interface Todo {
    timestamp: string;
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;