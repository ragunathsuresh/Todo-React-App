import React, { useState, useEffect } from "react";
import { FaTrashRestore } from "react-icons/fa";

function Body() {
  const [items, setItems] = useState([
    { id: 1, task: "Buy groceries", completed: true },
    { id: 2, task: "Walk the dog", completed: false },
    { id: 3, task: "Read a book", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("todoItems");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  const saveItems = (updatedItems) => {
    setItems(updatedItems);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
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

  const filteredItems = items.filter((item) =>
    item.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-slate-800">
        Your To-Do List
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <form onSubmit={addTask} className="flex gap-2 flex-1">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add new task..."
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

        <input
          type="text"
          className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      {filteredItems.length ? (
        <ul className="space-y-4">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md px-4 py-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                />

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

              <button
                className="text-red-500 hover:text-red-700 transition"
                onClick={() => remove(item.id)}
                title="Delete"
              >
                <FaTrashRestore size={18} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">
            {search
              ? "No matching tasks found."
              : "No tasks available. Add a new task!"}
          </p>
        </div>
      )}
    </main>
  );
}

export default Body;
