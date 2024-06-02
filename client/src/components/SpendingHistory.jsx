function SpendingHistory({ weekSpending }) {
  return (
    <div className="spendingHistory">
      {weekSpending ? weekSpending.map((data, index) => (
        <SpendingHistoryRow key={index} data={data} />
      )) :0}
      </div>
  )
}

function SpendingHistoryRow({ data }) {
  return (
    <div className="spendingHistoryRow">
      <p className="date">{data.date}</p>
      <p className="cost">{data.cost}</p>
      <p className="item">{data.item}</p>
    </div>
  )
}

export default SpendingHistory;