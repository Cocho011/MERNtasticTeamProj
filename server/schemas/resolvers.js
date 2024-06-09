// const { useTransform } = require('framer-motion');
const { User, Budget, Spending } = require('../models');
//const { useContext } = require('react');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
me: async (parent, args, context) => {
    if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        return userData;
    }  throw AuthenticationError;   
},  

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
                throw new Error('Failed to fetch budget');
            }
        },
        spendings: async (parent, args, context) => {
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
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
      
          // full weekly budget 
        addBudget: async (parent, { amount, weekDate,}, context) => {
            if (context.user) {
                const budget= await Budget.create({ amount, weekDate, });
            const user = await User.findByIdAndUpdate(context.user._id, { $push: { budgets: budget._id } }, { new: true });
            return user;    
        }
        throw AuthenticationError;
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
