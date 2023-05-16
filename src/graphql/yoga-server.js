import { createYoga } from 'graphql-yoga'

import graphqlSchema from './schema/index.js'

const yogaServer = createYoga({ schema: graphqlSchema })

export default yogaServer
