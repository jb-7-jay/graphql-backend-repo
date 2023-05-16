import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { createYoga, createSchema } from 'graphql-yoga'
import { GraphQLSchema } from 'graphql'

// Load ENV
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: '.env' })

import connectDB from './config/db.js'
import yogaServer from './graphql/yoga-server.js'

connectDB()

const app = express()
app.use(cors())

// Bind GraphQL Yoga to the graphql endpoint to avoid rendering the playground on any path
app.use(yogaServer.graphqlEndpoint, yogaServer)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
