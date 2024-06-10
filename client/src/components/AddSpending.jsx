import styled from "@emotion/styled";
import { addSpending } from "../../../server/seeds/spendingData.json";
import { useState } from "react";

const StyledAddSpending = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.addSpendingForm {
display: flex;
}
`

function AddSpending({ currentID, current }) {
  const [amount, setAmount] = useState(0);
  const [itemName, setItemName] = useState("");
  const onSubmit = () => {
    console.log("running");
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
    <StyledAddSpending className="addSpending">
      <h3>Add Spending:</h3>
      <div className="addSpendingForm">
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
      <button onClick={onSubmit} disabled={!current}>
        {" "}
        submit
      </button>
    </StyledAddSpending>
  );
}

export default AddSpending;
