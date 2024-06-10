import styled from "@emotion/styled";
import { addNextWeekBudget } from "../../../server/seeds/budgetData.json";
import { useState } from "react";

const SyledAddNextWeekBudget = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

function AddNextWeekBudget({ currentID, nextWeekDate }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const onSubmit = () => {
    addNextWeekBudget({
      userID: currentID,
      date: nextWeekDate,
      totalBudget: totalBudget,
    });
  };
  // if you only have access to the current date, a function will
  // need to be created to calculate the next week date
  return (
    <SyledAddNextWeekBudget className="addNextWeekBudget">
      <h2>Next Week</h2>
      <div>
        <label>My budget will be:</label>
        <input
          onChange={(e) => setTotalBudget(e.target.value)}
          type="number"
          placeholder="0"
        ></input>
      </div>
      <button
        onClick={onSubmit}
        disabled={!nextWeekDate}
        className="nextWeekSubmit"
      >
        Submit
      </button>
    </SyledAddNextWeekBudget>
  );
}

export default AddNextWeekBudget;
