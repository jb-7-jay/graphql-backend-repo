var mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");
const UserType = require("../Typedefs/UserType");
const userModel = require("../../api/User/user.model");
const userDao = require("./../../api/User/user.dao");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        mobile: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        country: { type: GraphQLString },
        city: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const user = await userDao.saveUser(args);
        const response = user.save();
        return response;
      },
    },
  },
});

module.exports = Mutation;
