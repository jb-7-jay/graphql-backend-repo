import mongoose from 'mongoose'

import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
} from 'graphql'

import userModel from '../../api/User/user.model.js'
import userDao from '../../api/User/user.dao.js'
import projectDao from '../../api/Project/project.dao.js'
import UserType from './users/user.types.js'
import ProjectType from './projects/project.types.js'

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Add new user',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        gender: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return userDao.saveUser(args)
      },
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => {
        return userDao.deleteUserAndRelatedProject(args.id)
      },
    },
    addProject: {
      type: ProjectType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatus',
            values: {
              new: { value: 'Not Started' },
              inProgress: { value: 'In Progress' },
              completed: { value: 'Completed' },
            },
          }),
          defaultValue: 'Not Started',
        },
        user: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        return projectDao.saveProject(args)
      },
    },
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatusUpdate',
            values: {
              new: { value: 'Not Started' },
              inProgress: { value: 'In Progress' },
              completed: { value: 'Completed' },
            },
          }),
          defaultValue: 'Not Started',
        },
      },
      resolve: (parent, args) => {
        return projectDao.updateProject(args)
      },
    },
    deleteProject: {
      type: ProjectType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => {
        return projectDao.deleteProject(args.id)
      },
    },
  },
})

export default RootMutation
