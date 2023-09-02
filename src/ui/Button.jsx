import React from "react";

export default function Button({ children, onClick,type }) {
  return (
    <button type={type} onClick={onClick} className="bg-cyan mx-2 font-secondary font-semibold text-orange focus:ring-orange rounded-full px-3 text-center outline-none transition-all focus:ring-2">
      {children}
    </button>
  );
}
