// TodoList.tsx
import React, { useReducer } from 'react';
import { List, Typography, Container } from '@mui/material';
import Todo from '../toDo/toDo';
import TodoForm from '../toDoForm/toDoForm';

type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'REMOVE_TODO'; id: number };

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: new Date().getTime(),
        text: action.text,
        completed: false,
      };
      return [newTodo, ...state];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function handleAddTodo(text: string): void {
    dispatch({ type: 'ADD_TODO', text });
  }

  function handleToggleTodo(id: number): void {
    dispatch({ type: 'TOGGLE_TODO', id });
  }

  function handleRemoveTodo(id: number): void {
    dispatch({ type: 'REMOVE_TODO', id });
  }

  return (
    <Container>
      <Typography variant="h3" align="left" sx={{ mt: '2rem' }} gutterBottom>
      
        Todo List
      </Typography>
      <TodoForm onAddTodo={handleAddTodo} />
      <List>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggleTodo={handleToggleTodo}
            onRemoveTodo={handleRemoveTodo}
          />
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
