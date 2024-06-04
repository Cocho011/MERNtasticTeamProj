import styled from "@emotion/styled";

const StyledMainWeek = styled.div`
  display: flex;
  flex-direction: row;
  .currentBudgetRow {
  }
`;

function MainWeek({ current, weekData }) {
  return (
    <StyledMainWeek className="mainWeek">
      <CurrentBudget
        totalBudget={weekData ? weekData.totalBudget : 0}
        spent={weekData ? weekData.spent : 0}
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
      <p className="amount">{amount}</p>
      <p className="title">{title}</p>
    </div>
  );
}

export default MainWeek;
