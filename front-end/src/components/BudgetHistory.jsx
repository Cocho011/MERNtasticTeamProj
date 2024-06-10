import styled from "@emotion/styled";
import { useState } from "react";
import SpendingHistory from "./SpendingHistory.jsx";

const StyledBudgetHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .weekBudget {
    .weekBudgetContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 30px;
    }
  }
`;

function BudgetHistory({ budgetHistory, spendingHistory }) {
  const [viewAll, setViewAll] = useState(false);
  const displayedHistory = viewAll ? budgetHistory : budgetHistory.slice(0, 3);
  console.log(budgetHistory)

  return (
    <StyledBudgetHistory className="budgetHistory">
      <h2>Budget History</h2>
      <div className="budgetHistoryContainer">
        {displayedHistory.map((week, index) => (
          <WeekBudget key={index} weekDate={week.weekDate} amount={week.amount} 
            spendingHistory={spendingHistory}
          />
        ))}
        {/* <WeekBudget weekData={userHistory[0][1]} week={userHistory[0][0]} /> */}
      </div>
      <button
        className="viewDropDown"
        onClick={() => setViewAll(true)}
        hidden={viewAll}
      >
        View All
      </button>
    </StyledBudgetHistory>
  );
}

function WeekBudget({ weekDate, amount, spendingHistory }) {
  const [showSpending, setShowSpending] = useState(false);
  // console.log(weekData);
  return (
    <div className="weekBudget" onClick={() => setShowSpending(!showSpending)}>
      <div className="weekBudgetContainer">
        <h3 className="budgetHistoryDate">{weekDate}</h3>
        <div className="weekBudgetInfo">
          <p>Budget: ${amount}</p>
          <p>Spent: ${"0"}</p>
        </div>
      </div>
      {showSpending && <SpendingHistory weekSpending={spendingHistory} />}
    </div>
  );
}

export default BudgetHistory;
