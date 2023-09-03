import { useRef } from "react";

export default function GodSheet({
  allNamesRoles,
  dispatch,
  selectedNameRole,
  status,
}) {
  const ref = useRef([]);
  console.log(ref);
  const unchecked = () => {
    for (let i = 0; i < ref.current.length; i++) {
      ref.current[i].checked = false;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <table className="mx-auto my-4 table-auto">
        <thead>
          <tr className="text-center font-secondary text-medium">
            <td className="font-bold">بازیکنان</td>
            <td>
              <span className="mx-1">🔫</span>
            </td>
            <td>
              <span className="mx-1">💖</span>
            </td>
            <td>
              <span className="mx-1">🔒</span>
            </td>
            <td>
              <span className="mx-1">🖐️</span>
            </td>
            <td>
              <span className="mx-1">⚠️</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {allNamesRoles?.map((player, index) => (
            <tr
              key={player.name}
              player={player}
              index={index}
              className="border-b-2 border-dark text-center font-secondary text-medium"
            >
              <td>
                <span className="ml-1 text-sm">
                  {index + 1}-{player.name} / {player.role}
                </span>
                <button
                  className="ml-1 rounded-full  transition-all text-xs focus:text-sm focus:px-1"
                  onClick={() => {
                    dispatch({
                      type: "removeNameRole",
                      payload: player.id,
                      filter: allNamesRoles.filter(
                        (player) => player.id !== selectedNameRole,
                      ),
                    });
                  }}
                >
                  ❌
                </button>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                  value="a"
                  ref={(element) => {
                    ref.current[index] = element;
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                  value="b"
                  ref={(element) => {
                    ref.current[index + 4] = element;
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                  value="c"
                  ref={(element) => {
                    ref.current[index + 8] = element;
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                  value="d"
                  ref={(element) => {
                    ref.current[index + 12] = element;
                  }}
                ></input>
              </td>
              <td>
                <input className="my-2" type="checkbox" value="e"></input>
                <input className="mx-1 my-2" type="checkbox" value="f"></input>
                <input className="my-2" type="checkbox" value="g"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4 flex items-center gap-x-3">
        <textarea
          placeholder="یادداشت وقایع..."
          className="w-56 rounded-md bg-dark p-2 font-secondary text-sm text-medium outline-none ring-2 ring-cyan transition-all focus:ring-2 focus:ring-orange"
        ></textarea>
        <button
          onClick={unchecked}
          className="rounded-full bg-cyan px-2 py-1 font-secondary text-light"
        >
          روز بعد
        </button>
      </div>
    </div>
  );
}
