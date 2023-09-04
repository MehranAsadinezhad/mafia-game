import { useState } from "react";
import music from "../music.mp3";

export default function GodSheet({
  allNamesRoles,
  dispatch,
  selectedNameRole,
  playMusic,
  status,
}) {
  const audio = new Audio(music);
  const [day, setDay] = useState(0);
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
              <td className="px-2 text-start">
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
      <div className="my-4 flex justify-evenly">
        <textarea
          placeholder="یادداشت وقایع..."
          className="h-40 w-56 rounded-md bg-dark p-2 font-secondary text-sm text-medium outline-none ring-2 ring-cyan transition-all focus:ring-2 focus:ring-orange"
        ></textarea>
        <div className="flex flex-col items-center gap-y-3">
          <div className="flex flex-wrap justify-center gap-x-1 self-start">
            <button
              className="mr-2 rounded-md bg-cyan p-1 font-secondary text-light"
              onClick={() => {
                audio.play();
              }}
            >
              پخش
            </button>
            <button
              className="mr-2 rounded-md bg-cyan p-1 font-secondary text-light"
              onClick={() => {
                audio.pause();
              }}
            >
              توقف
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-1 self-start">
            <label className="rounded-md  p-1 font-secondary text-light">
              روز شمار
            </label>
            <button
              className="mr-2 rounded-full bg-cyan px-3 font-secondary text-light transition-all active:ring-2 active:ring-orange"
              onClick={() => {
                setDay(day + 1);
              }}
            >
              {day}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
