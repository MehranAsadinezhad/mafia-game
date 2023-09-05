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
    <div className="flex items-center justify-center p-4">
      <h1 className="ml-5 font-secondary text-4xl font-semibold tracking-widest text-medium">
        پارتی گیم
      </h1>
      <img
        src={logo}
        alt="logo"
        className="w-24 rounded-full bg-cyan transition-all active:ring-2 active:ring-orange"
        onClick={randomiseRoles}
      ></img>
    </div>
  );
}
