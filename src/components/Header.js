import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Header() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-12 py-2 flex items-center">     
      <button onClick={handleReset} className="border rounded bg-blue-600 text-white py-2 px-3">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined text-black mx-2 mt-2">
          chevron_left
        </span>
      </button>
      <h2 className="text-xl text-black-600">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined text-black mx-2 mt-2">
          chevron_right
        </span>
      </button>
    </header>
  );
}
