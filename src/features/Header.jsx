import React from "react";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <div className="p-2 flex items-center justify-center h-28">
      <h1 className="text-medium font-secondary ml-5 text-3xl tracking-widest">
        پارتی گیم
      </h1>
      <img src={logo} alt="logo" className="bg-cyan w-20 rounded-full"></img>
    </div>
  );
}
