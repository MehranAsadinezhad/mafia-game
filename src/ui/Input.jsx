import React from "react";

export default function Input({ onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="bg-cyan font-secondary placeholder:text-orange text-light focus:ring-orange w-24 rounded-full px-2 py-1 text-center outline-none transition-all focus:ring-2"
    ></input>
  );
}
