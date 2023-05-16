import graphql from 'graphql'
import UserType from '../users/user.types.js'
import User from '../../../api/User/user.model.js'

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql

const ProjectType = new GraphQLObjectType({
  name: 'project',
  description: 'This is project type data',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    user: {
      type: UserType,
      // No need to resolve foreign key here as we are populating in resolve it self
      // resolve(parent, args) {
      //   console.log('parent', parent)
      //   return User.findById(parent.user)
      // },
    },
  }),
})

export default ProjectType
