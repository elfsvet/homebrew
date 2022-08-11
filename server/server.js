const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

const path = require('path');

//import typeDefs/resolvers
//const { typeDefs, resolvers } = requires('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// create a new Apollo Server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an ApolloServer with GQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate Apollo server with the express application as middleware
  server.applyMiddleware({ app })

  // serve up static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      // log where we can go to test GQL API
      console.log(`Use GQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
}

// call the async function to start the server
startApolloServer(typeDefs, resolvers)