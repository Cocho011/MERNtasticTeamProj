const typeDefs = `

    # scalar DateTime

    type Budget {
        _id: ID
        amount: Int!
        weekDate: DateTime!
        # users: [User]
    }

    type Spending {
        _id: ID
        amount: Int!
        # timeSubmitted: DateTime!
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
    #      token: ID
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
