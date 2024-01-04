// reducers/todoReducer.ts

import Todo from "../../types/toDoType";
import Action from "../../types/actionType"

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: new Date().getTime(),
        title: action.title,
        completed: false,
      };
      return [newTodo, ...state];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'SET_TODOS':
      return action.todos;
    default:
      return state;
  }
}

export default todoReducer;