const typeDefs = `

    # TO DO: add custom scalar for Date type
    # https://stackoverflow.com/questions/49693928/date-and-json-in-type-definition-for-graphql

    type Budget {
        _id: ID!
        amount: Int!
        # weekDate: Date
        # referencing 21-mern -> 07-query-arguments:
        users(id: ID!): User
    }

    type Spending {
        amount: Int!
        # timeSubmitted: Date
        purchaseDescription: String!
        # referencing 21-mern -> 07-query-arguments:
        users(id: ID!): User
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    # commented out query until finished
    # type Query {
        # stuff goes here. referencing 21 mern -> 05 typedefs-resolvers
    # }

}'
`;



module.exports = typeDefs;
