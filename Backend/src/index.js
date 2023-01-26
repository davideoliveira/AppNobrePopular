const express = require('express')

const app = express()
require('dotenv').config()

const ip = require('ip').address()
const port = process.env.PORT || 3030

const routes = require('./routes')

app.use(routes)
app.listen(port, () => console.log(`
   
Server started in http://localhost:${port}
`))