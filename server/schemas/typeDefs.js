const typeDefs = `
 
    type Budget {
        _id: ID
        amount: Int!
        weekDate: String!
        spending: [Spending]
    }

    type Spending {
        _id: ID
        amount: Int!
        timeSubmitted: String!
        purchaseDescription: String!
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        budgets: [Budget]
    }

     type Auth {
     token: ID!
     user: User
     }

    type Query {
        budgets: [Budget]
        me: User 
        spendings: [Spending]
        users: [User]
        # referencing 21-mern -> 07-query-arguments:
        # user(userId: ID!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addBudget(amount: Int!, weekDate: String!): User
        addSpending(amount: Int!, timeSubmitted: String!, purchaseDescription: String!, userId: String!): Spending
        removeSpending(spendingId: ID!): Spending
    }

`;

module.exports = typeDefs;
