import { addSpending } from "../../dummyTest/dummyRoutes";
import { useState } from "react";

function AddSpending({ currentID, current }) {
  const [amount, setAmount] = useState(0);
  const [itemName, setItemName] = useState("");
  const onSubmit = () => {
    console.log("running")
    addSpending({
      userID: currentID,
      date: current.week,
      spendingItem: {
        date: current.month + "/" + current.day,
        cost: amount,
        item: itemName || "item",
      },
    });
  };
  return (
    <div className="addSpending">
      <div className="addSpendingForm">
        <h3>Add Spending:</h3>
        <div>
          <label>$</label>
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <div>
          <label>for</label>
          <input
            type="text"
            placeholder="item"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          ></input>
        </div>
      </div>
      <button onClick={onSubmit} disabled={!current}> submit</button>
    </div>
  );
}

export default AddSpending;
