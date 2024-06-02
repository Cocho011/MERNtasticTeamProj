import { users, userIDs, Budget } from "./dummyData.js";
const dummyUsername = "johnDoe";
const dummyUserID = "98741";

export const GetWeekData = (req) => {
  return Budget[req.userID][req.date];
};

export const addSpending = (req) => {
  Budget[req.userID][req.date].spending.push(req.spendingItem);
  console.log(Budget[req.userID][req.date].spending);
};
 
export const getUserHistory = (req) => { 
return Budget[req.userID];
};

export const getCurrent = () => {
  return {
    month: "05",
    day: "17",
    year: "2024",
    week: "05/13/2024",
  }
};

const test = function () {

  // addSpending({ userID: dummyUserID, date: "05/13/2024", item: { date:"05/16", cost:25, item:"lays" }});
  // console.log(GetWeekData({ userID: dummyUserID, date: "05/13/2024"}));
  console.log (getUserHistory({ userID: dummyUserID }));
};

// test();



