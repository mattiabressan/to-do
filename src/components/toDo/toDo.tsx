// Todo.tsx
import React from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


interface TodoProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onToggleTodo, onRemoveTodo }) => (
  <li>
    <input type="checkbox" checked={todo.completed} onChange={() => onToggleTodo(todo.id)} />
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
    <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
  </li>
);

export default Todo;