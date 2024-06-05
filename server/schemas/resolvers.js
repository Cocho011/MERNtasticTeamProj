const { User, Budget, Spending } = require('../models');
const { DateTimeResolver } = require ('graphql-scalars');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    DateTime: DateTimeResolver,
    // Query: {
    // users: async () => {
    //     return await User.find({});
    // }
    // }
};

module.exports = resolvers;
