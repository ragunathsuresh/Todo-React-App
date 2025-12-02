import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-white  h-24  flex items-center">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-2">

        <p className="text-sm">© {date} To-Do List App. All rights reserved.</p>


        <div className="flex gap-4 text-sm">
          <span className="hover:text-blue-400 cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-blue-400 cursor-pointer transition">
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
