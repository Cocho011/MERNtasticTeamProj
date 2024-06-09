// const { useTransform } = require('framer-motion');
const { User, Budget, Spending } = require("../models");
const { DateTimeResolver } = require("graphql-scalars");
//const { useContext } = require('react');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  DateTime: DateTimeResolver,
  Spending: {
    user: async (spendingItem) => {
      await User.findById(spendingItem.userId);
    },
  },

//   User: {
//     // budgets: async (user) => {
//     //     await Budget.find({ userId: user._id });
//     // },
//     spendings: async (user) => {
//       await Spending.find({ userId: user._id });
//     },
//   },

  Query: {
    budgets: async (parent, args, context) => {
      // Testing to make sure static data works
      // try {
      //     const staticBudgets = [
      //         { _id: '1', amount: 1000 },
      //         { _id: '2', amount: 2000 },

      //     ];
      //     return staticBudgets;
      // } catch (error) {
      //     throw new Error('Failed to fetch budgets');
      // }
      try {
        const budget = await Budget.find({});
        return budget;
      } catch (error) {
        throw new Error("Failed to fetch budget");
      }
    },
    spendings: async (_, { userId }) => {
      try {
        const spending = await Spending.find({}).populate("userId");
        return spending;
      } catch (error) {
        throw new Error("Failed to fetch spending");
      }
    },
    //This works for querying users
    users: async () => {
      return User.find({});
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
      // TO DO: I think auth goes here?
    },
  },
};

module.exports = resolvers;
