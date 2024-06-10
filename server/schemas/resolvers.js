const { User, Budget, Spending } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).populate("budgets");
                return userData;
            }  
            throw new AuthenticationError('Not authenticated');   
        },

        budgets: async (parent, args, context) => {
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
        users: async () => {
            return User.find({});
        },
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
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
      
        addBudget: async (parent, { amount, weekDate }, context) => {
            if (context.user) {
                const budget = await Budget.create({ amount, weekDate });
                const user = await User.findByIdAndUpdate(
                    context.user._id, 
                    { $push: { budgets: budget._id } }, 
                    { new: true }
                ).populate("budgets");
                return user;    
            }
            throw new AuthenticationError('Not authenticated');
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
