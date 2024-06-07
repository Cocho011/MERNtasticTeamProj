// const { useTransform } = require('framer-motion');
const { User, Budget, Spending } = require('../models');
//const { useContext } = require('react');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {        
        budgets: async () => {
            return await Budget.find({});
        },
        spendings: async () => {
            return await Spending.find({});
        },
        users: async () => {
            return await User.find({});
        },
    }
};

module.exports = resolvers;
