import { useState } from "react";
import SpendingHistory from "./SpendingHistory.jsx";

function BudgetHistory({ userHistory }) {
  const [viewAll, setViewAll] = useState(false);
  const displayedHistory = viewAll ? userHistory : userHistory.slice(0,3);

  return (
    <div className="budgetHistory">
      <h2>Budget History</h2>
      <div className="budgetHistoryContainer">
        {displayedHistory.map((week, index) => (
          <WeekBudget key={index} weekData={week[1]} week={week[0]} />
        ))}
        {/* <WeekBudget weekData={userHistory[0][1]} week={userHistory[0][0]} /> */}
      </div>
      <p className="viewDropDown" onClick={() => setViewAll(true)} hidden={viewAll}>View All</p>
    </div>
  );
}

function WeekBudget({ weekData, week }) {
  const [showSpending, setShowSpending] = useState(false);
  // console.log(weekData);
  return (
    <div className="weekBudget" onClick={() => setShowSpending(!showSpending)}>
      <div className="weekBudgetContainer">
        <h3 className="budgetHistoryDate">{week}</h3>
        <div className="weekBudgetInfo">
          <p>Budget: ${weekData.totalBudget}</p>
          <p>Spent: ${weekData.spent}</p>
        </div>
      </div>
      {showSpending && <SpendingHistory weekSpending={weekData.spending} />}
    </div>
  );
}

export default BudgetHistory;