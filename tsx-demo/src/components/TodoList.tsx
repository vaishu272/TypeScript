import { useState } from "react";
import type { TodoTypes } from "../todo";
import TodoService from "../TodoService";
import {
  FiPlus,
  FiTrash2,
  FiCheckCircle,
  FiList,
  FiEdit2,
  FiSave,
  FiX,
} from "react-icons/fi";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleAddTodo = () => {
    if (!newTodoTitle.trim()) return;

    const newTodo = TodoService.addTodo(newTodoTitle);
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
  };

  const handleDelete = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (todo: TodoTypes) => {
    const updated = { ...todo, completed: !todo.completed };
    TodoService.updateTodo(updated);

    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
  };

  const startEdit = (todo: TodoTypes) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  const saveEdit = (todo: TodoTypes) => {
    const updated = { ...todo, title: editText };
    TodoService.updateTodo(updated);

    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
      {/* Header */}
      <h2 className="flex items-center gap-2 text-3xl font-bold text-purple-600 mb-6">
        <FiList />
        Todo Manager
      </h2>

      {/* Counters */}
      <div className="flex justify-between mb-6">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          Total: {total}
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          Completed: {completed}
        </span>

        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
          Remaining: {remaining}
        </span>
      </div>

      {/* Add Todo */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
        />

        <button
          onClick={handleAddTodo}
          className="flex items-center gap-1 cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
        >
          <FiPlus />
          Add
        </button>
      </div>

      {/* Todo Items */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-linear-to-r from-slate-50 to-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border rounded-lg px-3 py-1 w-full mr-3"
                />

                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(todo)}
                    className="text-green-600 hover:text-green-800 cursor-pointer"
                  >
                    <FiSave size={18} />
                  </button>

                  <button
                    onClick={cancelEdit}
                    className="text-gray-500 hover:text-black cursor-pointer"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => toggleComplete(todo)}
                  className={`flex items-center gap-2 cursor-pointer font-medium ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  <FiCheckCircle
                    className={`text-lg ${
                      todo.completed ? "text-green-500" : "text-gray-400"
                    }`}
                  />

                  {todo.title}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => startEdit(todo)}
                    className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-red-500 hover:text-red-700 text-lg cursor-pointer"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-gray-400 text-center mt-6 text-sm">
          No tasks yet 🚀 Add your first task!
        </p>
      )}
    </div>
  );
};

export default TodoList;
