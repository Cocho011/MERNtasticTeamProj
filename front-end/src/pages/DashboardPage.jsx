import React, { useState, useEffect } from "react";
import { fetchUserData } from "../utils/api";
import MainWeek from "../components/MainWeek";
import AddNextWeekBudget from "../components/AddNextWeekBudget";
import AddSpending from "../components/AddSpending";
import BudgetHistory from "../components/BudgetHistory";
import { useQuery } from "@apollo/client";
import { GET_BUDGETS_BY_USERID, GET_SPENDINGS_BY_USERID } from "../queries";
import styled from "@emotion/styled";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 7%;
  align-items: center;
`;

const StyledCurrentWeek = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .currentWeekTop {
    display: flex;
    flex-direction: row;
    > * {
      flex: 1;
    }
  }
  .spendingHistoryContainer {
    .spendingHistoryTitle {
      text-align: center;
    }
  }
`;

function DashboardPage() {
  const {
    loading: loadingBudgets,
    error: errorBudgets,
    data: budgetsData,
  } = useQuery(GET_BUDGETS_BY_USERID, {
    variables: { userId: "123" },
  });

  const {
    loading: loadingSpendings,
    error: errorSpending,
    data: spendingsData,
  } = useQuery(GET_SPENDINGS_BY_USERID, {
    variables: { userId: "123" },
  });
  // if (!loading) {console.log(data)}

  if (loadingBudgets || loadingSpendings) return <div>Loading...</div>;
  if (!loadingBudgets) {
    console.log(budgetsData);
  }
  if (!loadingSpendings) {
    console.log(spendingsData);
  }

  return (
    <StyledApp>
      <h2>
        Current Week (
        {budgetsData ? budgetsData.budgets[0].weekDate : "loading..."})
      </h2>
      <StyledCurrentWeek className="currentWeekWrapper">
        <div className="currentWeekTop">
          <MainWeek
            current={budgetsData.budgets[0].weekDate}
            budgetData={budgetsData.budgets[0]}
            spendingData={spendingsData.spendings}
          />
          <div className="spendingHistoryContainer">
            <h3 className="spendingHistoryTitle">Spending History</h3>
            {/* <SpendingHistory
                  weekSpending={
                    current ? userHistory[current.week].spending : null
                  }
                /> */}
          </div>
        </div>
        {/* <AddSpending currentID={dummyUserID} current={current} /> */}
      </StyledCurrentWeek>
      {/* <AddNextWeekBudget currentID={dummyUserID} nextWeekDate={nextWeek} /> */}
      {/* {userHistory && ( */}
      {/* <BudgetHistory userHistory={Object.entries(userHistory).slice(1)} /> */}
      {/* )} */}
    </StyledApp>
  );
}

export default DashboardPage;
