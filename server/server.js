const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const context = require("./context");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});
