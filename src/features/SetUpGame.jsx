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
          selectedPlayer={selectedPlayer}
          selectedRole={selectedRole}
          allNamesRoles={allNamesRoles}
        />
        <RoleSide
          dispatch={dispatch}
          status={status}
          players={players}
          roles={roles}
          selectedPlayer={selectedPlayer}
          selectedRole={selectedRole}
          allNamesRoles={allNamesRoles}
        />
      </div>
    </div>
  );
}
