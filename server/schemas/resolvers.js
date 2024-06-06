const { User, Budget, Spending } = require('../models');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        budgets: async () => {
            return await Budget.find({});
        }
    }
};

module.exports = resolvers;
