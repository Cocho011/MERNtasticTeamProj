const express = require('express');
const path = require('path');
// Import the ApolloServer class
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require ('cors');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => authMiddleware({req})
});

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  if (process.env.NODE_ENV === 'production') {
    const BUILD_PATH = path.resolve(__dirname,'../front-end/dist')
    app.use( express.static(BUILD_PATH))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(BUILD_PATH, 'index.html'))
    })
  }
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();



// const express = require('express');
// const db = require('./config/connection');
// const path = require('path');

// const PORT = 3001;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static(path.join(__dirname, '..', 'client')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
// });


// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}!`);
//   });
// });
