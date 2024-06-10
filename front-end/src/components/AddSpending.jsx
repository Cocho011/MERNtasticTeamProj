import styled from "@emotion/styled";
import { addSpending } from "../dummyTest/dummyRoutes";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_SPENDING, GET_SPENDINGS_BY_USERID } from "../queries";


const StyledAddSpending = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.addSpendingForm {
display: flex;
}
`

function AddSpending({ currentDay, currentID }) {
  const [amount, setAmount] = useState(0);
  const [itemName, setItemName] = useState("");
  const [addSpending] = useMutation(ADD_SPENDING, {
    refetchQueries: [
      {
        query: GET_SPENDINGS_BY_USERID,
        variables: { userId: currentID },
      },
    ],
  }
  );
  const handleSubmit = async () => {
    console.log("running");
    await addSpending({
      variables: {
        amount: parseInt(amount),
        timeSubmitted: currentDay,
         purchaseDescription: itemName,
        userId: currentID,
       
        
        
      }
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
          <label className="for">for</label>
          <input
            type="text"
            placeholder="item"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          ></input>
        </div>
      </div>
      <button onClick={handleSubmit} disabled={!currentDay}>
        {" "}
        submit
      </button>
    </StyledAddSpending>
  );
}

export default AddSpending;
