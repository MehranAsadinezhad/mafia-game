import React from "react";
import Header from "./Header";
import PlayerSide from "./PlayerSide";
import RoleSide from "./RoleSide";
import Button from "../ui/Button";

export default function SetUpGame({
  players,
  roles,
  selectedPlayer,
  status,
  selectedRole,
  allNamesRoles,
  dispatch,
  selectedId,
}) {
  return (
    <div>
      <Header />
      <div className="my-2 flex w-full justify-between">
        <PlayerSide
          dispatch={dispatch}
          status={status}
          players={players}
          roles={roles}
          selectedId={selectedId}
          selectedPlayer={selectedPlayer}
          selectedRole={selectedRole}
          allNamesRoles={allNamesRoles}
        />
        <RoleSide
          dispatch={dispatch}
          status={status}
          players={players}
          roles={roles}
          selectedId={selectedId}
          selectedPlayer={selectedPlayer}
          selectedRole={selectedRole}
          allNamesRoles={allNamesRoles}
        />
      </div>
      {allNamesRoles.length > 6 && (
        <div className="flex h-44 items-center justify-center">
          <button onClick={()=>dispatch({type:'start'})} className="rounded-ful my-3 rounded-full font-secondary bg-cyan ring-2 ring-orange outline-none text-center px-9 py-3 text-xl text-orange">💣 برو بریم</button>
        </div>
      )}
    </div>
  );
}
