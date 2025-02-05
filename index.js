const express = require('express')
const Router =  require("./Router/indexRouter")
const Database =  require("./config/database")
const dotenv = require('dotenv')



const app = express()
const port =  8080
dotenv.config()

Router(app)
Database.Connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})