import React, { useRef, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function PlayerSide({
  players,
  roles,
  selectedPlayer,
  status,
  selectedRole,
  allNamesRoles,
  dispatch,
}) {
  const [name, setName] = useState({});
  const inp = useRef(null);
  return (
    <form
      className="mx-2 w-1/2"
      onSubmit={(e) => {
        e.preventDefault();
        if (inp.current.value === "")return
        dispatch({ type: "addPlayer", payload: name });
        inp.current.value = "";
      }}
    >
      <div className="mr-2 flex justify-between">
        <input
          ref={inp}
          type="text"
          className="w-24 rounded-full bg-cyan px-2 py-1 text-center font-secondary text-light outline-none transition-all placeholder:text-orange focus:ring-2 focus:ring-orange"
          placeholder="اسامی"
          onChange={(e) => {
            setName({ player: e.target.value, id: Date.now() });
          }}
        ></input>
        <Button>+</Button>
      </div>
      {players.length > 0 && (
        <ul className="mx-2 my-4 rounded-lg bg-dark p-2 py-3">
          {players.map((player) => (
            <li
              key={player.id}
              className="mb-3 flex items-center justify-between"
            >
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "selectPlayer",
                    payload: player.player,
                    filter: players.filter((e) => e.id !== player.id),
                  })
                }
                className="rounded-full bg-darkest px-3 py-1 font-secondary text-light focus:ring-2 focus:ring-orange"
              >
                {player.player}
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
