import React from "react";
import Header from "./Header";
import PlayerSide from "./PlayerSide";
import RoleSide from "./RoleSide";

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
      <Header roles={roles} dispatch={dispatch} />
      <div className="my-3 flex w-full justify-between">
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
      {roles.length === 0 && allNamesRoles.length > 0 && (
        <div className="flex h-96 items-center justify-center">
          <button
            onClick={() => dispatch({ type: "start" })}
            className="rounded-ful rounded-full bg-gradient-to-t from-cyan to-sky-800 px-7 py-5 text-center font-secondary text-2xl text-orange outline-none ring-2 ring-cyan"
          >
            💣 برو بریم
          </button>
        </div>
      )}
    </div>
  );
}
