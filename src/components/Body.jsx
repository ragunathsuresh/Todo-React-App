import React, { useState, useEffect } from "react";
import { FaTrashRestore } from "react-icons/fa";

function Body() {
  const [items, setItems] = useState([
    { id: 1, task: "Buy groceries", completed: true },
    { id: 2, task: "Walk the dog", completed: false },
    { id: 3, task: "Read a book", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("todoItems");
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error("Invalid todoItems in localStorage");
      }
    }
  }, []);

  const saveItems = (updatedItems) => {
    setItems(updatedItems);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
  };

  const remove = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    saveItems(updatedItems);
  };

  const toggleComplete = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    saveItems(updatedItems);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const newItem = {
      id: Date.now(),
      task: newTask.trim(),
      completed: false,
    };

    const updatedItems = [newItem, ...items];
    saveItems(updatedItems);
    setNewTask("");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-slate-800">
        Your To-Do List
      </h2>

      {/* Add Task Form */}
      <form onSubmit={addTask} className="flex gap-3 mb-6">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      {/* List / Empty State */}
      {items.length ? (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md px-4 py-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                />

                {/* Text with double-click toggle */}
                <span
                  className={`text-base cursor-pointer ${
                    item.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                  onDoubleClick={() => toggleComplete(item.id)}
                >
                  {item.task}
                </span>
              </div>

              {/* Delete button */}
              <button
                className="text-sm text-red-500 hover:text-red-700 transition"
                onClick={() => remove(item.id)}
                title="Delete task"
              >
                <FaTrashRestore size={18} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">No tasks available. Add a new task!</p>
        </div>
      )}
    </main>
  );
}

export default Body;
