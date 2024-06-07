import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  getCurrent,
  getUserHistory,
  getNextWeek,
} from "../dummyTest/dummyRoutes";
import MainWeek from "./components/MainWeek.jsx";
import SpendingHistory from "./components/SpendingHistory.jsx";
import AddSpending from "./components/AddSpending.jsx";
import AddNextWeekBudget from "./components/AddNextWeekBudget.jsx";
import BudgetHistory from "./components/BudgetHistory.jsx";
import styled from "@emotion/styled";

const StyledApp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 7%;
align-items: center;
`

const StyledCurrentWeek = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  .currentWeekTop {
    display: flex;
    flex-direction: row;
    > * {flex: 1;}
  }
  .spendingHistoryContainer {
    .spendingHistoryTitle {
      text-align: center;
    }

  }
  `

const dummyUserID = "98741";

function App() {
  const [current, setCurrent] = useState(null);
  const [userHistory, setUserHistory] = useState(null);
  const [nextWeek, setNextWeek] = useState(null);

  useEffect(() => {
    setCurrent(getCurrent());
    setUserHistory(getUserHistory({ userID: dummyUserID }));
    setNextWeek(getNextWeek().week);
  }, []);

  return (
    <StyledApp>
      <h2>Current Week ({current ? current.week : "loading..."})</h2>
      <StyledCurrentWeek className="currentWeekWrapper">
        <div className="currentWeekTop">
          <MainWeek
            current={current}
            weekData={current ? userHistory[current.week] : null}
          />
          <div className="spendingHistoryContainer">
            <h3 className="spendingHistoryTitle">Spending History</h3>
            <SpendingHistory
              weekSpending={current ? userHistory[current.week].spending : null}
            />
          </div>
        </div>
        <AddSpending currentID={dummyUserID} current={current} />
      </StyledCurrentWeek>
      <AddNextWeekBudget currentID={dummyUserID} nextWeekDate={nextWeek} />
      {userHistory && (
        <BudgetHistory userHistory={Object.entries(userHistory).slice(1)} />
      )}
    </StyledApp>
  );
}

export default App;
