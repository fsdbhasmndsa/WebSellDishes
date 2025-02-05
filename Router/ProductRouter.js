const express = require('express')
const router = express.Router();
const ProductController =  require("../Controller/ProductController")


router.get("/getALL",ProductController.GET_ALL)


module.exports = router