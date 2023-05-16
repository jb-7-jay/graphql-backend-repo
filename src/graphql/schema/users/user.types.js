import graphql from 'graphql'

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql

const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'This is user type data',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
  }),
})

export default UserType
