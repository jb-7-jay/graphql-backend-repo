var mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLList } = require("graphql");
const UserType = require("../Typedefs/UserType");
const User = require("../../api/User/user.model");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Root Query",
  fields: () => ({
    user: {
      type: new GraphQLList(UserType),
      description: "List of all Users",
      resolve: async () => {
        const response = await User.find();
        return response;
      },
    },
  }),
});

module.exports = RootQuery;
