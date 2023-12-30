import React, { useReducer } from 'react';
import Todo from '../toDo/toDo'
import TodoForm from '../toDoForm/toDoForm';


type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'REMOVE_TODO'; id: number };

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ id: state.length + 1, text: action.text, completed: false }, ...state];
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

const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = (text: string) => {
    dispatch({ type: 'ADD_TODO', text });
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggleTodo={handleToggleTodo}
            onRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;