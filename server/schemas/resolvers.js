const { User, Budget, Spending } = require('../models');
import { DateTimeResolver } from 'graphql-scalars';
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        budgets: async () => {
            return await Budget.find({});
        }
    }
};

module.exports = resolvers;
