const { User, Budget, Spending } = require('../models');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        budgets: async () => {
            return await Budget.find({});
        }
        // users: async () => {
        //     return await User.find({});
        // }
    }
};

module.exports = resolvers;
