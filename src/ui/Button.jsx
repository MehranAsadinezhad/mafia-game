import React from "react";

export default function Button({ children, onClick,type }) {
  return (
    <button type={type} onClick={onClick} className="bg-gradient-to-t from-cyan to-sky-800 mx-2 font-secondary font-semibold text-medium focus:ring-orange rounded-full px-3 text-center outline-none transition-all focus:ring-2">
      {children}
    </button>
  );
}
