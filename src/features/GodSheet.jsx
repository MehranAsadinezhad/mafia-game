
import music from "../music.mp3";

export default function GodSheet({
  allNamesRoles,
  dispatch,
  selectedNameRole,
  playMusic,
  status,
}) {
  const audio = new Audio(music);
  return (
    <div className="flex flex-col justify-center">
      <table className="my-4 table-auto">
        <thead>
          <tr className="border-b-2 border-cyan text-center font-secondary text-medium">
            <td className="font-bold">بازیکنان</td>
            <td>
              <span className="py-2">🔫</span>
            </td>
            <td>
              <span className="mx-2 py-2">💖</span>
            </td>
            <td>
              <span className="mx-2 py-2">🔒</span>
            </td>
            <td>
              <span className="mx-2 py-2">🖐️</span>
            </td>
            <td>
              <span className="py-2">⚠️</span>
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
                <span className="ml-2 font-secondary text-sm">
                  {index + 1}- {player.name} / {player.role}
                </span>
                <button
                  className="ml-1 rounded-full  text-xs transition-all focus:px-1 focus:text-base"
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
                <input className="my-2" type="checkbox"></input>
              </td>
              <td>
                <input className="my-2" type="checkbox"></input>
              </td>
              <td>
                <input className="my-2" type="checkbox"></input>
              </td>
              <td>
                <input className="my-2" type="checkbox"></input>
              </td>
              <td>
                <input className="my-2" type="checkbox"></input>
                <input className="mx-1 my-2" type="checkbox"></input>
                <input className="my-2" type="checkbox"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 flex items-center justify-center">
        <textarea
          placeholder="یادداشت وقایع..."
          className="h-40 w-56 rounded-md bg-dark p-2 font-secondary text-sm text-medium outline-none ring-2 ring-cyan transition-all focus:ring-2 focus:ring-orange"
        ></textarea>
        <div className="flex flex-wrap justify-center gap-y-2 self-start">
          
            <button
              className="mr-2 rounded-full bg-cyan p-1 font-secondary text-light"
              onClick={() => {
                audio.play();
              }}
            >
              🎵
            </button>
          
            <button
              className="mr-2 rounded-full bg-cyan p-1 font-secondary text-light"
              onClick={() => {
                audio.pause();
                
              }}
            >
              ⏸️
            </button>
          
        </div>
      </div>
    </div>
  );
}
