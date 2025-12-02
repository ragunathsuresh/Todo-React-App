import { useState } from "react";

function Body({ items, setItems }) {
  const [text, setText] = useState("");

  // Add item
  const addItem = () => {
    if (text.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setItems([...items, newItem]);
    setText("");
  };

  // Toggle complete
  const toggleItem = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updated);
  };

  // Delete item
  const deleteItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          placeholder="Enter task..."
        />
        <button
          onClick={addItem}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* List */}
      <ul className="space-y-2">
        {items.length === 0 && <p className="text-gray-500">No tasks yet.</p>}

        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span
              onClick={() => toggleItem(item.id)}
              className={`cursor-pointer ${
                item.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {item.text}
            </span>

            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
