import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import mask from "../assets/images/g.png";

export default function RoleSide({
  players,
  roles,
  selectedPlayer,
  status,
  selectedRole,
  allNamesRoles,
  dispatch,
  selectedId
}) {
  const [role, setRole] = useState({});
  const inp = useRef(null);
  return (
    <>
      <form
        className="mx-2 w-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          if (inp.current.value === "") return
          dispatch({ type: "addRole", payload: role });
          inp.current.value = "";
        }}
      >
        <div className="mr-2 flex justify-between">
          <input
            ref={inp}
            type="text"
            placeholder="نقش ها"
            className="w-24 rounded-full bg-cyan px-2 py-1 text-center font-secondary text-light outline-none transition-all placeholder:text-orange focus:ring-2 focus:ring-orange"
            onChange={(e) => {
              setRole({ role: e.target.value, id: Date.now() });
            }}
          ></input>
          <Button>+</Button>
        </div>
        {roles.length > 0 && (
          <div className="mx-2 my-4 flex flex-wrap gap-2 rounded-lg bg-dark p-2 py-3">
            {roles.map((role) => (
              <img
                key={role.id}
                src={mask}
                alt={role.id}
                className="h-10 w-10 rounded-full p-1"
                onClick={() => {
                  const record = { name: selectedPlayer, role: role.role };
                  dispatch({
                    type: "selectRole",
                    payload: role.role,
                    loadpay: record,
                    Rfilter: roles.filter((e) => e.id !== role.id),
                    Pfilter: players.filter((e) => e.id !== selectedId ),
                  });
                }}
              ></img>
            ))}
          </div>
        )}
      </form>
    </>
  );
}
