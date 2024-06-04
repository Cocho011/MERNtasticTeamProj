import styled from "@emotion/styled";

const StyledSpendingHistory = styled.div`
align-items: center;
display: flex;
flex-direction: column;
.spendingHistoryRow {
  display: grid;
  grid-template-columns: 2fr 1fr 4fr;
  flex: 1;
  gap: 30px;
}
`

function SpendingHistory({ weekSpending }) {
  return (
    <StyledSpendingHistory className="spendingHistory">
      {weekSpending
        ? weekSpending.map((data, index) => (
            <SpendingHistoryRow key={index} data={data} />
          ))
        : 0}
    </StyledSpendingHistory>
  );
}

function SpendingHistoryRow({ data }) {
  return (
    <div className="spendingHistoryRow">
      <p className="date">{data.date}</p>
      <p className="cost">{data.cost}</p>
      <p className="item">{data.item}</p>
    </div>
  );
}

export default SpendingHistory;
