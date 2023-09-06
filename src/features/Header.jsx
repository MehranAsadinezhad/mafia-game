import React from "react";
import logo from "../assets/images/logo.png";

export default function Header({ roles, dispatch }) {
  function randomiseRoles() {
    dispatch({
      type: "randomisRoles",
      payload: roles.sort(() => Math.random() - 0.5),
    });
  }
  return (
    <div className="flex items-center justify-center p-4 gap-x-6">
      <div className="flex flex-col gap-y-1">
        <h1 className="font-secondary text-4xl font-semibold tracking-widest text-medium">
          پارتی گیم
        </h1>
        <p className="text-gray-500 font-sans text-center text-sm font-semibold">:developed by <br></br>Mehran Asadinezhad</p>
      </div>
      <img
        src={logo}
        alt="logo"
        className="w-24 rounded-full bg-cyan transition-all active:ring-2 active:ring-orange"
        onClick={randomiseRoles}
      ></img>
    </div>
  );
}
