import { useReducer } from "react";
import SetUpGame from "./features/SetUpGame";
import GodSheet from "./features/GodSheet";
import mask from "./assets/images/g.png";

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
    case "addPlayer":
      return { ...state, players: [...state.players, action.payload] };
    case "selectPlayer":
      return { ...state, selectedPlayer: action.payload, players: action.filter };
    case "addRole":
      return { ...state, roles: [...state.roles, action.payload] };
    case "selectRole":
      return {
        ...state,
        selectedRole: action.payload,
        allNamesRoles: [...state.allNamesRoles, action.loadpay],
        roles: action.filter,
      };
    case "recordRole":
      return { ...state, selectedRole: "", selectedPlayer: "" };
    default:
      throw new Error("invalid action type");
  }
}
function App() {
  const [
    { status, players, roles, selectedPlayer, selectedRole, allNamesRoles },
    dispatch,
  ] = useReducer(reducer, initialState);

  // console.log();
  return (
    <>
      {selectedRole ? (
        <div className="flex h-screen w-screen flex-col items-center justify-center rounded-lg bg-dark p-5 font-secondary  font-bold">
          <img alt="mask" src={mask} className="w-44"></img>
          <h1 className="my-2 w-full rounded-lg bg-light p-3 text-center text-2xl font-semibold text-cyan">
            {selectedRole}
          </h1>
          <button
            className="rounded-ful my-3 rounded-full bg-cyan px-9 py-3 text-xl text-light"
            onClick={() => dispatch({ type: "recordRole" })}
          >
            ثبت
          </button>
        </div>
      ) : (
        <>
          {status === "setUp" && (
            <SetUpGame
              status={status}
              players={players}
              roles={roles}
              selectedPlayer={selectedPlayer}
              selectedRole={selectedRole}
              allNamesRoles={allNamesRoles}
              dispatch={dispatch}
            />
          )}
          {status === "start" && (
            <GodSheet
              status={status}
              allNamesRoles={allNamesRoles}
              dispatch={dispatch}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
