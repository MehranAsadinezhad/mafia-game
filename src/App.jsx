import { useEffect, useReducer } from "react";
import SetUpGame from "./features/SetUpGame";
import GodSheet from "./features/GodSheet";
import mask from "./assets/images/g.png";
import Login from "./features/Login";
import { Toaster, toast } from "react-hot-toast";

const initialState = {
  status: "login",
  players: [],
  roles: [],
  selectedPlayer: "",
  selectedRole: "",
  selectedId: "",
  allNamesRoles: [],
  selectedNameRole: "",
  auth: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "user":
      return {
        ...state,
        auth: action.payload,
        status: action.payload === true ? "setUp" : state.status,
      };
    case "addPlayer":
      return { ...state, players: [...state.players, action.payload] };
    case "selectPlayer":
      return {
        ...state,
        selectedPlayer: action.payload,
        selectedId: action.id,
      };
    case "addRole":
      return { ...state, roles: [...state.roles, action.payload] };
    case "selectRole":
      return {
        ...state,
        selectedRole: action.payload,
        allNamesRoles: [...state.allNamesRoles, action.loadpay],
        roles: action.Rfilter,
        players: action.Pfilter,
      };
    case "randomisRoles":
      return { ...state, roles: action.payload };
    case "recordRole":
      return { ...state, selectedRole: "", selectedPlayer: "", selectedId: "" };
    case "start":
      return { ...state, status: "start" };
    case "selectNameRole":
      return {
        ...state,
        selectedNameRole: action.payload,
        allNamesRoles: action.changeLine,
      };
    case "playMusic":
      return { ...state, playMusic: action.payload };
    case "pauseMusic":
      return { ...state, playMusic: action.payload };

    default:
      throw new Error("invalid action type");
  }
}
function App() {
  const [
    {
      status,
      players,
      roles,
      selectedPlayer,
      selectedRole,
      allNamesRoles,
      selectedId,
      selectedNameRole,
      auth,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    window.onbeforeunload = () => {
      return "";
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <>
      {selectedRole && selectedPlayer ? (
        <div className="flex h-screen w-screen flex-col items-center justify-center rounded-lg bg-dark p-5 font-secondary  font-bold">
          <img alt="mask" src={mask} className="w-44"></img>
          <h1 className="my-2 w-full rounded-lg bg-light p-3 text-center text-2xl font-semibold text-cyan">
            {selectedRole}
          </h1>
          <button
            className="rounded-ful my-3 rounded-full bg-gradient-to-t from-cyan to-sky-800 px-9 py-3 text-center font-secondary text-xl text-light"
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
              selectedId={selectedId}
              dispatch={dispatch}
            />
          )}
          {status === "login" && (
            <>
              <Login dispatch={dispatch} auth={auth} />
              <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                  error: {
                    duration: 5000,
                  },
                  style: {
                    fontSize: "16px",
                    maxWidth: "300px",
                    padding: "10px",
                    backgroundColor: "#ced4da",
                    color: "#343a40",
                    fontFamily:"shabnam"
                  },
                }}
              />
            </>
          )}
          {status === "start" && (
            <GodSheet
              status={status}
              allNamesRoles={allNamesRoles}
              selectedNameRole={selectedNameRole}
              dispatch={dispatch}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
