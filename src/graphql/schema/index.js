import { GraphQLSchema } from 'graphql'

import rootQuery from './root-query.js'
import rootMutation from './root-mutation.js'

const graphqlSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
})

export default graphqlSchema
