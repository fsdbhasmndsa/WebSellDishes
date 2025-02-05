const express = require('express')
const Router =  require("./Router/indexRouter")
const bodyParser = require('body-parser');
const Database =  require("./config/database")
const dotenv = require('dotenv')



const app = express()
const port =  8080
dotenv.config()

Router(app)
Database.Connect()

// Sử dụng body-parser để phân tích dữ liệu JSON
app.use(bodyParser.json());
// Sử dụng body-parser để phân tích dữ liệu URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})