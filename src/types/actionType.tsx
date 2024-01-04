import Todo from "../types/toDoType";

type AddTodoAction = { type: 'ADD_TODO'; title: string };
type ToggleTodoAction = { type: 'TOGGLE_TODO'; id: number };
type RemoveTodoAction = { type: 'REMOVE_TODO'; id: number };
type SetTodosAction = { type: 'SET_TODOS'; todos: Todo[] };

type Action = AddTodoAction | ToggleTodoAction | RemoveTodoAction | SetTodosAction;


export default Action;