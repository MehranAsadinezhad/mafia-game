import { FaMusic, FaPause, FaGun, FaBomb } from "react-icons/fa6";
import { useRef, useState } from "react";
import music from "../lion.mp3";
import secondMusic from "../frog.mp3";
import bomb from "../bomb.mp3";
import fakeBomb from "../fakeBomb.mp3";
import fakeShot from "../fakeShot.mp3";
import shot from "../shot.mp3";

export default function GodSheet({
  allNamesRoles,
  dispatch,
  selectedNameRole,
}) {
  const audio = useRef(new Audio(music));
  const frogMusic = useRef(new Audio(secondMusic));
  const fakeShotMusic = new Audio(fakeShot);
  const bombMusic = new Audio(bomb);
  const fakeBombMusic = new Audio(fakeBomb);
  const shotMusic = new Audio(shot);

  const [day, setDay] = useState(0);
  const [detect, setDetect] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [playingFrog, setPlayingFrog] = useState(false);
  const [check, setCheck] = useState(false);

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

  const playFrog = () => {
    setPlayingFrog(true);
    frogMusic.current.play();
  };

  const pauseFrog = () => {
    setPlayingFrog(false);
    frogMusic.current.pause();
  };

  const mafias = [
    "شعبده باز",
    "بمب ساز",
    "الکاپن",
    "الکاپون",
    "آلکاپن",
    "آلکاپون",
    "ساول گودمن",
    "گودمن",
    "پدرخوانده",
    "پدر خوانده",
    "پدرخانده",
    "پدر خانده",
    "بمبساز",
    "شعبدهباز",
    "ماتادور",
    "مافیای ساده",
    "مافیا ساده",
    "دکتر لکتر",
    "دکترلکتر",
    "مافیاساده",
    "گروگانگیر",
    "گروگان گیر",
  ];
  const dependece = ["زودیاک", "نوستراداموس", "جک گنجشکه", "جکگنجشکه", "مستقل"];

  return (
    <div className="flex flex-col justify-center">
      <table className="mb-4 table-auto">
        <thead>
          <tr className="h-9 border-b-2 border-cyan text-center font-secondary text-light">
            <td className="px-2 text-start font-semibold tracking-widest">
              بازیکنان
            </td>
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
              className="h-9 border-b-2 border-dark text-center font-secondary text-medium"
            >
              <td className="my-2 flex">
                <button
                  className={`ml-2 mr-2 font-secondary text-sm ${
                    player.line ? "line-through" : ""
                  }
                   
                  ${dependece.includes(player.role) ? "text-orange" : ""}${
                    mafias.includes(player.role) ? "text-red-600" : ""
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "selectNameRole",
                      payload: player.id,
                      changeLine: allNamesRoles.map((pl) => {
                        if (pl.id === player.id && player.line === false) {
                          return { ...pl, line: true };
                        }
                        if (pl.id === player.id && player.line === true) {
                          return { ...pl, line: false };
                        }
                        return pl;
                      }),
                    })
                  }
                >
                  {index + 1}- {player.name} / {player.role}
                </button>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                ></input>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                ></input>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                ></input>
              </td>
              <td>
                <input
                  className="my-2"
                  type="checkbox"
                ></input>
              </td>
              <td className="w-[70px]">
                <input className="my-2" type="checkbox"></input>
                <input className="mx-1" type="checkbox"></input>
                <input className="my-2" type="checkbox"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 flex justify-evenly">
        <textarea
          placeholder="یادداشت وقایع..."
          className="h-52 w-56 rounded-md bg-dark p-2 font-secondary text-sm text-medium outline-none ring-2 ring-cyan transition-all focus:ring-2 focus:ring-orange"
        ></textarea>
        <div className="flex flex-col items-center gap-y-3">
          <div className="flex flex-wrap justify-center gap-2 self-start">
            <button
              className="rounded-full bg-gradient-to-t from-cyan to-sky-800 p-2 font-secondary text-light outline-none focus:ring-2 active:ring-orange"
              onClick={playingFrog ? pauseFrog : playFrog}
            >
              {!playingFrog ? <FaMusic></FaMusic> : <FaPause />}
            </button>
            <button
              className="rounded-full bg-gradient-to-t from-cyan to-sky-800 p-2 font-secondary text-light outline-none focus:ring-2 active:ring-orange"
              onClick={playing ? pause : play}
            >
              {!playing ? <FaMusic></FaMusic> : <FaPause />}
            </button>
            <button
              className="rounded-full bg-gradient-to-t from-cyan to-sky-800 p-2 font-secondary text-red-500 outline-none focus:ring-2 active:ring-orange"
              onClick={() => shotMusic.play()}
            >
              {<FaGun></FaGun>}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-1 ">
            <label className="rounded-md  p-1 font-secondary text-light">
              روز شمار
            </label>
            <button
              className="mr-2 rounded-full bg-gradient-to-t from-cyan to-sky-800 p-1 px-3 text-center text-light transition-all active:ring-2 active:ring-orange"
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
              className="mr-2 rounded-full bg-gradient-to-t from-cyan to-sky-800 p-1 px-3 text-center text-light transition-all active:ring-2 active:ring-orange"
              onClick={() => {
                if (detect === 0) return;
                setDetect(detect - 1);
              }}
            >
              {detect}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 self-start">
            <button
              className="rounded-full bg-gradient-to-t from-cyan to-sky-800 p-2 font-secondary text-red-500 outline-none focus:ring-2 active:ring-orange"
              onClick={() => bombMusic.play()}
            >
              {<FaBomb></FaBomb>}
            </button>
            <button
              className="rounded-full bg-gradient-to-t from-cyan to-sky-800 p-2 font-secondary text-green-500 outline-none focus:ring-2 active:ring-orange"
              onClick={() => fakeBombMusic.play()}
            >
              {<FaBomb></FaBomb>}
            </button>
            <button
              className="rounded-full bg-gradient-to-t from-cyan to-sky-800 p-2 font-secondary text-green-500 outline-none focus:ring-2 active:ring-orange"
              onClick={() => fakeShotMusic.play()}
            >
              {<FaGun></FaGun>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
