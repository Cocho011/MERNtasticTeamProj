const typeDefs = `

    # TO DO: add custom scalar for Date type
    # https://stackoverflow.com/questions/49693928/date-and-json-in-type-definition-for-graphql

    scalar DateTime

    type Budget {
        _id: ID
        amount: Int!
        weekDate: DateTime!
        userId: ID
        user: User
    }

    type Spending {
        _id: ID
        amount: Int!
        timeSubmitted: DateTime!
        purchaseDescription: String!
        userId: ID
        user: User
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
        user(userId: ID!): User
    }

`;

module.exports = typeDefs;


// ID cannot represent value: { _id: 6663bfb1946f5940f5173c26, username: "myuser", email: "email@email.com", password: "asdfjkl", __v: 0, id: "6663bfb1946f5940f5173c26" }