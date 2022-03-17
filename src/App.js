import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import Header from "./components/Header";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import Event from "./components/Event";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div>
      {showEventModal && <Event />}
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </div>
  );
}

export default App;
