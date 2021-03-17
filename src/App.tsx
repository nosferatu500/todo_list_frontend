import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Todo[] = [
  {
    timestamp: new Date().toUTCString(),
    text: 'aaaaaaa',
    complete: true,
  },
  {
    timestamp: new Date().toUTCString(),
    text: 'bbbbbb',
    complete: false,
  },
];

function App() {
  return (
    <ul>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </ul>
  );
}

export default App;
