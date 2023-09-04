import React from "react";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <div className="flex items-center justify-center p-4">
      <h1 className="ml-5 font-secondary text-4xl font-semibold tracking-widest text-medium">
        پارتی گیم
      </h1>
      <img src={logo} alt="logo" className="w-24 rounded-full bg-cyan"></img>
    </div>
  );
}
