import React, { useRef, useState } from "react";
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
        if (inp.current.value === "") return;
        dispatch({ type: "addPlayer", payload: name });
        inp.current.value = "";
      }}
    >
      <div className="mr-2 flex justify-between">
        <input
          ref={inp}
          type="text"
          className="w-28 rounded-full bg-cyan p-2 text-center font-secondary text-light outline-none transition-all placeholder:text-orange focus:ring-2 focus:ring-orange"
          placeholder="اسامی"
          onChange={(e) => {
            setName({ player: e.target.value, id: Date.now() });
          }}
        ></input>
        <Button>+</Button>
      </div>
      {players.length > 0 && (
        <ol className="mx-2 my-4 list-decimal rounded-lg bg-dark px-2 py-3">
          {players.map((player,index) => (
            <li
              key={player.id}
              className="mb-3 flex items-center justify-between"
            >
              <button
                className="rounded-full bg-darkest px-3 py-2 font-secondary text-light focus:ring-2 focus:ring-orange"
                onClick={() =>
                  dispatch({
                    type: "selectPlayer",
                    payload: player.player,
                    id: player.id,
                  })
                }
              >
                {index + 1}- {player.player}
              </button>
            </li>
          ))}
        </ol>
      )}
    </form>
  );
}
