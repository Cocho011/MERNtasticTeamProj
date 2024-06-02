import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getCurrent, getUserHistory } from "../dummyTest/dummyRoutes";
import MainWeek from "./components/MainWeek.jsx";
import SpendingHistory from "./components/SpendingHistory.jsx";
import AddSpending from "./components/AddSpending.jsx";

const dummyUserID = "98741";

function App() {
  const [current, setCurrent] = useState(null);
  const [userHistory, setUserHistory] = useState(null);

  useEffect(() => {
    setCurrent(getCurrent());
    setUserHistory(getUserHistory({ userID: dummyUserID }));
  }, []);

  return (
    <>
      <h2>Current Week ({current ? current.week : "loading..."})</h2>
      <div className="currentWeekWrapper">
        <div className="currentWeekTop">
          <MainWeek
            current={current}
            weekData={current ? userHistory[current.week] : null}
          />
          <div className="spendingHistoryContainer">
            <h3>Spending History</h3>
            <SpendingHistory
              weekSpending={current ? userHistory[current.week].spending : null}
            />
          </div>
        </div>
        <AddSpending currentID={dummyUserID} current={current} />
      </div>
    </>
  );
}

export default App;
