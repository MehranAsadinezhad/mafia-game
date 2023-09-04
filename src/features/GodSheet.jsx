import { useRef, useState } from "react";
import music from "../music.mp3";
import shotMusic from "../shot.mp3";

export default function GodSheet({
  allNamesRoles,
  dispatch,
  selectedNameRole,
}) {
  const audio = useRef(new Audio(music));
  const shot = new Audio(shotMusic);
  const [day, setDay] = useState(0);
  const [detect, setDetect] = useState(2);
  const [playing, setPlaying] = useState(false);
  const sortedAllNamesRoles = allNamesRoles
    .slice()
    .sort((a, b) => a.role.localeCompare(b.role));

  const play = () => {
    setPlaying(true);
    audio.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audio.current.pause();
  };

  return (
    <div className="flex flex-col justify-center">
      <table className="my-4 table-auto">
        <thead>
          <tr className="border-b-2 border-cyan text-center font-secondary text-medium">
            <td className="px-2 text-start font-bold">بازیکنان</td>
            <td>
              <span className="py-2">🔫</span>
            </td>
            <td>
              <span className="mx-2 py-2">❤️</span>
            </td>
            <td>
              <span className="mx-2 py-2">🔒</span>
            </td>
            <td>
              <span className="mx-2 py-2">🤏</span>
            </td>
            <td>
              <span className="py-2">⚠️</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {sortedAllNamesRoles?.map((player, index) => (
            <tr
              key={player.name}
              player={player}
              index={index}
              className="border-b-2 border-dark text-center font-secondary text-medium"
            >
              <td className="px-2 text-start">
                <button
                  className={`ml-2 font-secondary text-sm 
                  focus:line-through
                  ${player.role === "زودیاک" ? "text-orange" : ""}${
                    player.role === "نوستراداموس" ? "text-orange" : ""
                  }${player.role === "شعبده باز" ? "text-red-600" : ""}
                  ${player.role === "بمب ساز" ? "text-red-600" : ""}
                  ${player.role === "الکاپن" ? "text-red-600" : ""}`}
                  onClick={() =>
                    dispatch({ type: "selectNameRole", payload: player.id })
                  }
                >
                  {index + 1}- {player.name} / {player.role}
                </button>
                <button
                  className="ml-1 rounded-full  text-xs transition-all focus:px-1 focus:text-base"
                  onClick={() => {
                    dispatch({
                      type: "removeNameRole",
                      filter: allNamesRoles.filter(
                        (player) => player.id !== selectedNameRole,
                      ),
                    });
                  }}
                >
                  👋
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
              <td className="px-2">
                <input className="my-2" type="checkbox"></input>
                <input className="mx-1 my-2" type="checkbox"></input>
                <input className="my-2" type="checkbox"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 flex justify-evenly">
        <textarea
          placeholder="یادداشت وقایع..."
          className="h-48 w-56 rounded-md bg-dark p-2 font-secondary text-sm text-medium outline-none ring-2 ring-cyan transition-all focus:ring-2 focus:ring-orange"
        ></textarea>
        <div className="flex flex-col items-center gap-y-3">
          <div className="flex flex-wrap justify-center gap-x-1 self-start">
            <button
              className="mr-2 rounded-full bg-cyan p-1 px-2 font-secondary text-light focus:ring-2 focus:ring-orange"
              onClick={playing ? pause : play}
            >
              {!playing ? "پخش 🎵" : "توقف 🎵"}
            </button>
            <button
              className="mr-2 rounded-full  bg-cyan p-1 px-2 font-secondary text-light focus:ring-2 focus:ring-orange"
              onClick={() => shot.play()}
            >
              شات
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-1 ">
            <label className="rounded-md  p-1 font-secondary text-light">
              روز شمار
            </label>
            <button
              className="mr-2 rounded-full bg-cyan p-1 px-3 text-center text-light transition-all active:ring-2 active:ring-orange"
              onClick={() => {
                setDay(day + 1);
              }}
            >
              {day}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-1">
            <label className="rounded-md  p-1 font-secondary text-light">
              استعلام
            </label>
            <button
              className="mr-2 rounded-full bg-cyan p-1 px-3 text-center text-light transition-all active:ring-2 active:ring-orange"
              onClick={() => {
                if (detect === 0) return;
                setDetect(detect - 1);
              }}
            >
              {detect}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
