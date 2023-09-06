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
    <div className="flex w-full items-center justify-center gap-x-6 bg-gradient-to-b  from-sky-800 to-transparent p-4">
      <div className="flex flex-col gap-y-1">
        <h1 className="font-secondary text-4xl font-semibold tracking-widest text-medium">
          پارتی گیم
        </h1>
        <p className="text-center tracking-wide font-sans text-sm font-semibold text-gray-500">
          :developed by <br></br>
          <span className="tracking-wide">Mehran Asadinezhad</span>
        </p>
      </div>
      <img
        src={logo}
        alt="logo"
        className="w-24 rounded-full ring-2 ring-cyan transition-all active:ring-4 active:ring-orange"
        onClick={randomiseRoles}
      ></img>
    </div>
  );
}
