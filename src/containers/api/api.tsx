import Todo from "../../types/toDoType";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos(): Promise<Todo[]> {
    return fetch(API_URL)
      .then(function(response) {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(function(data) {
        return data.slice(0, 8);
      })
      .catch(function(error) {
        console.error('Error fetching todos:', error);
        return [];
      });
  }
export { fetchTodos };