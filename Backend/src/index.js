const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

//server config
app.use(bodyParser.json())

//import routes
const routes = require('./routes')
app.use(routes)


//serrver data config
const ip = require('ip').address()
const port = process.env.PORT || 3030


app.listen(port, () => console.log(`
   
Server started in http://localhost:${port}
`))