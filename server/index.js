const express = require('express')
const schema = require('./schema/schema')
const { graphqlHTTP } = require('express-graphql')

require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, console.log(`server running on ${port}`))
