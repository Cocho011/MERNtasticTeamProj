import React, { useState, useEffect } from "react";
import { fetchUserData } from "../utils/api";
import MainWeek from "../components/MainWeek";
import SpendingHistory from "../components/SpendingHistory";
import AddNextWeekBudget from "../components/AddNextWeekBudget";
import AddSpending from "../components/AddSpending";
import BudgetHistory from "../components/BudgetHistory";
import { useQuery } from "@apollo/client";
import { GET_BUDGETS_BY_USERID, GET_SPENDINGS_BY_USERID } from "../queries";
import styled from "@emotion/styled";

const dummyUserID = "123";
const dummyDay = "06/10/2024";
const dummyNextWeek = "06/17/2024";


const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7% 7%;
  align-items: center;
  background-color: #66d88e;
  background-color: ;
  max-width: 900px;
  border-radius: 130px;
  margin: 50px auto;
  .addNextWeekBudget {
    border: 5px solid black;
    border-radius: 60px;
    background-color: #bbbbbb;
    width: 100%;
    margin-top: 40px;
    padding: 20px 0;
    .nextBudget {
      margin-right: 10px;
    }
  }

  .budgetHistory {
    border: 5px solid black;
    border-radius: 60px;
    background-color: #bbbbbb;
    width: 100%;
    margin-top: 40px;
    padding: 20px 0;
    .viewDropDown {
      cursor: pointer;
    }
  }
  .budgetHistoryContainer {
    width: 80%;
    .weekBudget {
      border: 3px solid black;
      border-radius: 10px;
      margin-top: 20px;
      .weekBudgetContainer {
        padding: 0 20px;
        .spendingHistory {
          border-top: 5px solid black;
        }
      }
    }
  }
`;

const StyledCurrentWeek = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 5px solid black;
  border-radius: 60px;
  background-color: #bbbbbb;
  > * {
    padding: 0 30px;
  }
  .currentWeekTop {
    border-bottom: 5px solid black;
    position: relative;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 300px;
    > * {
      flex: 1;
      max-height: 100%;
    }
    .spendingHistoryContainer {
      border-left: 5px solid black;
    }
  }
  .addSpending {
    padding: 20px 0;
    .for {
    margin-left: 10px;
    margin-right: 10px;
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
    <StyledDashboard>
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
            <SpendingHistory
              weekSpending={spendingsData ? spendingsData.spendings.slice(0,3) : null}
            />
          </div>
        </div>
        <AddSpending currentID={dummyUserID} currentDay={dummyDay} />
      </StyledCurrentWeek>
      <AddNextWeekBudget currentID={dummyUserID} nextWeekDate={dummyNextWeek} />
      {budgetsData && spendingsData && (
        <BudgetHistory budgetHistory={budgetsData.budgets.slice(1)} 
        spendingHistory={spendingsData.spendings}
        />
        
      )}
    </StyledDashboard>
  );
}

export default DashboardPage;
