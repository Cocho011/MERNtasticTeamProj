import React, { useState, useEffect } from "react";
import { fetchUserData } from "../utils/api";
import MainWeek from "../components/MainWeek";
import AddNextWeekBudget from "../components/AddNextWeekBudget";
import AddSpending from "../components/AddSpending";
import BudgetHistory from "../components/BudgetHistory";
import { useQuery } from "@apollo/client";
import { GET_BUDGETS_BY_USERID,  GET_SPENDINGS_BY_USERID } from "../queries";

function DashboardPage() {
  const { loading: loadingBudgets, error: errorBudgets, data: budgetsData } = useQuery(
    GET_BUDGETS_BY_USERID,
    {
      variables: { userId: "123" },
    }
  );

  const { loading: loadingSpendings, error: errorSpending, data: spendingsData } = useQuery(
    GET_SPENDINGS_BY_USERID,
    {
      variables: { userId: "123" },
    }
  );
  // if (!loading) {console.log(data)}

  if (loadingBudgets || loadingSpendings) return <div>Loading...</div>;
  if (!loadingBudgets) { console.log(budgetsData) };
  if (!loadingSpendings) { console.log(spendingsData) };

  return (
    <div>
      <h1>Dashboard</h1>
      <MainWeek
        current={budgetsData.budgets[0].weekDate}
        budgetData={budgetsData.budgets[0]}
        spendingData= {spendingsData.spendings}
      />
      {/* <AddNextWeekBudget currentID={userData.id} nextWeekDate={userData.nextWeekDate} /> */}
      {/* <AddSpending currentID={userData.id} current={userData.currentWeek} /> */}
      {/* <BudgetHistory userHistory={userData.history} /> */}
    </div>
  );
}

export default DashboardPage;
