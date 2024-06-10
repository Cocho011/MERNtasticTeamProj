// const { useTransform } = require('framer-motion');
const { User, Budget, Spending } = require('../models');
//const { useContext } = require('react');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        budgets: async (parent, args, context) => {
            if (args.userId) {
                try {
                    return await Budget.find({ userId: args.userId });
                }
                catch (error) {
                    throw new Error('Failed to fetch budgets for ' + args.userId );
                }
            }
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
                throw new Error('Failed to fetch budget');
            }
        },
        spendings: async (parent, args, context) => {
             if (args.userId) {
               try {
                 return await Spending.find({ userId: args.userId });
               } catch (error) {
                 throw new Error("Failed to fetch budgets for " + args.userId);
               }
             }
            try {
                const spending = await Spending.find({});
                return spending;
            } catch (error) {
                throw new Error('Failed to fetch spending');
            }
        },
        //This works for querying users
        users: async () => {
            return User.find({});
        },
        // user: async (parent, { userId }) => {
        //     return User.findOne({_id: userId});
        //     // TO DO: I think auth goes here?
        //  },
    },

    Mutation: {
        addBudget: async (parent, { amount, weekDate, userId }) => {
            return await Budget.create({ amount, weekDate, userId });
        },
        addSpending: async (parent, { amount, timeSubmitted, purchaseDescription, userId }) => {
            return await Spending.create({ amount, timeSubmitted, purchaseDescription, userId });
        },
        removeSpending: async (parent, { spendingId }) => {
            return Spending.findOneAndDelete({ _id: spendingId });
        },
    },
};

module.exports = resolvers;
