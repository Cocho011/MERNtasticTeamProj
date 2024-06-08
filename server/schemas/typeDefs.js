const typeDefs = `

    # TO DO: add custom scalar for Date type
    # https://stackoverflow.com/questions/49693928/date-and-json-in-type-definition-for-graphql

    type Budget {
        _id: ID
        amount: Int!
        weekDate: String!
        userId: String!
    }

    type Spending {
        _id: ID
        amount: Int!
        timeSubmitted: String!
        purchaseDescription: String!
        userId: String!
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
    }

    # type Auth {
    #      token: ID!
    #     user: User
    # }

    type Query {
        budgets: [Budget]
        spendings: [Spending]
        users: [User]
        # referencing 21-mern -> 07-query-arguments:
        # user(userId: ID!): User
    }

    type Mutation {
        addBudget(amount: Int!, weekDate: String!, userId: String!): Budget
        addSpending(amount: Int!, timeSubmitted: String!, purchaseDescription: String!, userId: String!): Spending
    }

`;

module.exports = typeDefs;
