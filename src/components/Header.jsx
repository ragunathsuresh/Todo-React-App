import React, { useState } from "react";

function Header() {
  const [isOn, setIsOn] = useState(false);

  return (
    <header className="w-full bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
     
        <h1 className="text-2xl font-bold tracking-wide">
          ✅ To-Do List Application
        </h1>

        
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li className="hover:text-blue-400 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </nav>

      
        <div className="flex items-center gap-3">
          <span className="text-sm">{isOn ? "ON" : "OFF"}</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div className="w-11 h-6 bg-gray-400 rounded-full transition peer-checked:bg-blue-500"></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
                isOn ? "translate-x-5" : ""
              }`}
            ></div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
