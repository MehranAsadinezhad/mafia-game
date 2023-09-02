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
  const [name, setName] = useState("");
  const inp = useRef(null);
  return (
    <form
      className="mx-2 w-1/2"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "addPlayer", payload: name });
        inp.current.value = "";
      }}
    >
      <div className="mr-2 flex justify-between">
        <input
          ref={inp}
          type="text"
          className="bg-cyan font-secondary placeholder:text-orange text-light focus:ring-orange w-24 rounded-full px-2 py-1 text-center outline-none transition-all focus:ring-2"
          placeholder="اسامی"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <Button>+</Button>
      </div>
      {players.length > 0 && (
        <ul className="bg-dark mx-2 my-4 rounded-lg p-2 py-3">
          {players?.map((player) => (
            <li player={player} key={player} className="mb-3 flex items-center justify-between">
              <button type="button"
                onClick={() =>
                  dispatch({ type: "selectPlayer", payload: player })
                }
                className="text-light focus:ring-orange font-secondary bg-darkest rounded-full px-3 py-1 focus:ring-2"
              >
                {player}
              </button>
              {/* <p>✏️</p> */}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
