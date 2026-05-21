import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todosSlice";

const TodosView = () => {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todoApp.todos);
  const dispatch = useDispatch();

  // form handle
  const handleAddTodos = (e) => {
    e.preventDefault();

    if (input == "") return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Todos App
      </h1>

      {/* Form */}
      <form onSubmit={handleAddTodos} className="flex gap-3 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your todos"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-300"
        >
          Add
        </button>
      </form>

      {/* Todos List */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <span className="text-gray-700 font-medium">{todo.text}</span>

            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-300"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosView;
