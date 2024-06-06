const { useTransform } = require('framer-motion');
const { User, Budget, Spending } = require('../models');
const { useContext } = require('react');
// TO DO: ADD AUTH
// const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
              }
              throw AuthenticationError;
            // TO DO: I think auth goes here?
         },
         budget: async (parent, args, context) => {
            try {
                const budget = await Budget.findOne({ _id: context.budget._id });
                return budget;
            } catch (error) {
                throw new Error('Failed to fetch budget');
            }
        },
        spending: async (parent, args, context) => {
            try {
                const spending = await Spending.find({ _id: context.spending._id });
                return spending;
            } catch (error) {
                throw new Error('Failed to fetch spending');
            }
        }
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
    }
};

module.exports = resolvers;
