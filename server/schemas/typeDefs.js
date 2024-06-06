const typeDefs = `

    # TO DO: add custom scalar for Date type
    # https://stackoverflow.com/questions/49693928/date-and-json-in-type-definition-for-graphql

    type Budget {
        _id: ID
        amount: Int!
        # weekDate: Date
        # users: [User]
    }

    type Spending {
        _id: ID
        amount: Int!
        # timeSubmitted: Date
        purchaseDescription: String!
        # users: [User]
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
        # referencing 21-mern -> 07-query-arguments:
        # users: [User]
        # users(id: ID!): User
    }

`;

module.exports = typeDefs;
