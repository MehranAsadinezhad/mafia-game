import React, { useState } from "react";
import Header from "./Header";
import mask from "../assets/images/g.png";

export default function Login({ dispatch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { username: "mehran", password: "6671130" },
    { username: "jamal", password: "1333535" },
    { username: "test", password: "123456" },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center bg-darkest">
      <Header />
      <form
        className="relative mt-32 flex h-60 w-64 flex-col items-center justify-center rounded-xl bg-dark shadow-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "user",
            payload: users.some((e) =>
              e.username === username && e.password === password ? true : false,
            ),
          });
        }}
      >
        <img
          alt="cover"
          src={mask}
          className="absolute bottom-52 w-24 rounded-full bg-darkest"
        ></img>
        <div className="mt-4 flex flex-col items-center gap-y-2">
          <div className="flex flex-col gap-y-1">
            <label className="font-secondary text-medium">نام کاربری</label>
            <input
              type="text"
              className="rounded-md bg-medium px-2 font-secondary outline-none transition-all focus:py-1 focus:ring-2 focus:ring-yellow-600"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-secondary text-medium ">رمز عبور</label>
            <input
              type="password"
              className="rounded-md bg-medium px-2 font-secondary outline-none transition-all focus:py-1 focus:ring-2 focus:ring-yellow-600"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button
            type="submit"
            className="mt-4 rounded-lg bg-cyan px-4 py-1 font-secondary text-lg text-medium focus:ring-2 focus:ring-orange"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}
