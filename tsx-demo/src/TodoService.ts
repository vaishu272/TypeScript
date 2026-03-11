import type { TodoTypes } from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  // Get all todos
  getTodos: (): TodoTypes[] => {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  },

  // Add todo
  addTodo: (title: string): TodoTypes => {
    const todos = TodoService.getTodos();

    const newTodo: TodoTypes = {
      id: Date.now(), // better than length + 1
      title,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));

    return newTodo;
  },

  // Update todo
  updateTodo: (updatedTodo: TodoTypes): void => {
    const todos = TodoService.getTodos();

    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  },

  // Delete todo
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();

    const updatedTodos = todos.filter((todo) => todo.id !== id);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  },
};

export default TodoService;
