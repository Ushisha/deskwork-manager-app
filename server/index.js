const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const schema = require('./schema/schema')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

//connect to DB
connectDB()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, console.log(`server running on ${port}`))
