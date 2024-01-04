// TodoList.tsx
import React, { useEffect, useReducer } from 'react';
import { List, Typography, Container } from '@mui/material';
import TodoListItem from '../toDoListItem/toDoListItem';
import TodoForm from '../toDoForm/toDoForm';
import { fetchTodos } from '../../containers/api/api'
import todoReducer from '../../containers/reducer/todoReducer';

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(function () {
    async function fetchData() {
      try {
        const todosData = await fetchTodos();
        dispatch({ type: 'SET_TODOS', todos: todosData });
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }

    fetchData();
  }, []);

  function handleAddTodo(title: string): void {
    dispatch({ type: 'ADD_TODO', title });
  }

  function handleToggleTodo(id: number): void {
    dispatch({ type: 'TOGGLE_TODO', id });
  }

  function handleRemoveTodo(id: number): void {
    dispatch({ type: 'REMOVE_TODO', id });
  }

  return (
    <Container>
      <Typography 
        variant="h3" 
        align="left" 
        sx={{ mt: '2rem' }} 
        gutterBottom
      >
        Todo List
      </Typography>
      <TodoForm onAddTodo={handleAddTodo} />
      <List>
        {todos.map((todo) => (
          <TodoListItem
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
