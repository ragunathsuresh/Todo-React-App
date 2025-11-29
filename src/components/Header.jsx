import React from "react";

function Header() {
  return (
    <header className="w-full bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* App Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          ✅ To-Do List Application
        </h1>

        {/* Navigation */}
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

        {/* Mode Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Mode</span>
          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
