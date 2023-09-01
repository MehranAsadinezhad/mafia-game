import { useReducer } from "react";
import SetUpGame from "./features/SetUpGame";
import GodSheet from "./features/GodSheet";

const initialState = {
  status: "setUp",
  players: [],
  roles: [],
  selectedPlayer: "",
  selectedRole: "",
  allNamesRoles: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "":
      return {};
    default:
      throw new Error("invalid action type");
  }
}

function App() {
  const [
    { status, players, roles, selectedPlayer, selectedRole, allNamesRoles },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <>
      {status === 'setUp' && <SetUpGame />}
      {status === 'start' && <GodSheet/>}
    </>
  );
}

export default App;
