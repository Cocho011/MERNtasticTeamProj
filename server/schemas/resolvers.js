// const { useTransform } = require('framer-motion');
const { User, Budget, Spending } = require('../models');
//const { useContext } = require('react');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {        
        budgets: async (parent, args, context) => {
            try {
                const budget = await Budget.findOne({ _id: context.budget._id });
                return budget;
            } catch (error) {
                throw new Error('Failed to fetch budget');
            }
        },
        spendings: async (parent, args, context) => {
            try {
                const spending = await Spending.find({ _id: context.spending._id });
                return spending;
            } catch (error) {
                throw new Error('Failed to fetch spending');
            }
        },
        users: async () => {
            return await User.find({});
        },
    }
};

module.exports = resolvers;
