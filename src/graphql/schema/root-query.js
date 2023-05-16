import mongoose from 'mongoose'

import { GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql'

import User from '../../api/User/user.model.js'
import Project from '../../api/Project/project.model.js'
import UserType from './users/user.types.js'
import ProjectType from './projects/project.types.js'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'root query',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: 'List of all Users',
      resolve: async () => {
        return User.find()
      },
    },
    user: {
      type: UserType,
      description: 'Get user details',
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return User.findById(args.id)
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      description: 'List of all projects',
      resolve: () => {
        return Project.find().populate('user')
      },
    },
    project: {
      type: ProjectType,
      description: 'Get project details by Id',
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return Project.findById(args.id)
      },
    },
  }),
})

export default RootQuery
