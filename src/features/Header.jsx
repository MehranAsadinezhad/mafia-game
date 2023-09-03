import React from "react";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <div className="p-4 flex items-center justify-center">
      <h1 className="text-medium font-semibold font-secondary ml-5 text-4xl tracking-widest">
        پارتی گیم
      </h1>
      <img src={logo} alt="logo" className="bg-cyan w-24 rounded-full"></img>
    </div>
  );
}
