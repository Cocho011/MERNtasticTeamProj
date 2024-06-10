import styled from "@emotion/styled";

const StyledMainWeek = styled.div`
  display: flex;
  flex-direction: row;
  .currentBudget {
    width:100%;
    
  .currentBudgetRow {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    > * {flex: 1}

  }
  }
`;

function MainWeek({ current, budgetData}) {
  return (
    <StyledMainWeek className="mainWeek">
      <CurrentBudget
        totalBudget={ budgetData.amount ? budgetData.amount : 0}
        spent={budgetData.spent ? budgetData.spent : 0}
      />
    </StyledMainWeek>
  );
}

function CurrentBudget({ totalBudget, spent }) {
  return (
    <div className="currentBudget">
      <CurrentBudgetRow
        amount={spent === 0 ? spent - totalBudget : 0}
        title="Remaining"
      />
      <CurrentBudgetRow amount={spent} title="Spent" />
      <CurrentBudgetRow amount={totalBudget} title="Total Budget" />
    </div>
  );
}

function CurrentBudgetRow({ amount, title }) {
  return (
    <div className="currentBudgetRow">
      <p className="amount">${amount}</p>
      <p className="title">{title}</p>
    </div>
  );
}

export default MainWeek;
