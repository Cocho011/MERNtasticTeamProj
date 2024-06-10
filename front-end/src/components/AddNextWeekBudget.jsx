import styled from "@emotion/styled";
import { addNextWeekBudget } from "../dummyTest/dummyRoutes";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BUDGET, GET_BUDGETS_BY_USERID } from "../queries";

const SyledAddNextWeekBudget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function AddNextWeekBudget({ currentID, nextWeekDate }) {
  const [addBudget] = useMutation(ADD_BUDGET, {
    refetchQueries: [
      {
        query: GET_BUDGETS_BY_USERID,
        variables: { userId: currentID },
      },
    ],
  });
  const [totalBudget, setTotalBudget] = useState(0);
  const handleSubmit = () => {
    addBudget({
      variables: {
        amount: parseInt(totalBudget),
        weekDate: nextWeekDate,
        userId: currentID,
      },
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
        onClick={handleSubmit}
        disabled={!nextWeekDate}
        className="nextWeekSubmit"
      >
        Submit
      </button>
    </SyledAddNextWeekBudget>
  );
}

export default AddNextWeekBudget;
