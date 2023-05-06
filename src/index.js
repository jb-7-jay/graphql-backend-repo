const express = require("express");

const { graphqlHTTP } = require("express-graphql");

const graphql = require("graphql");
const RootQuery = require("./graphql/Schema/query");
const Mutation = require("./graphql/Schema/mutation");
const { GraphQLSchema } = graphql;

const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://techbackend:techfest123@cluster0.f220u6r.mongodb.net/graphqltest"
  )
  .then(() => {
    console.log("Connected to db");
  });

const PORT = 3001;

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
