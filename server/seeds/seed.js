const db = require("../config/connection");
const { Budget } = require("../models");
const { User } = require("../models");
const { Spending } = require("../models");
const cleanDB = require("./cleanDB");
const mongoose = require("mongoose");

const budgetData = require("./budgetData.json");
const userData = require("./userData.json");
const spendingData = require("./spendingData.json");

db.once("open", async () => {
  await cleanDB("Budget");
  // await cleanDB('User');
  await cleanDB("Spending");

  // await Budget.insertMany(budgetData);
  // // await User.insertMany(userData);
  // const spendingItems = spendingData.map((item) => ({
  //     ...item,
  //     userId: new mongoose.Types.ObjectId(item.userId)
  // }));
  // // console.log(spendingItems);

  // await Spending.insertMany(spendingItems);

  console.log("DB seeded!");
  process.exit(0);
});
