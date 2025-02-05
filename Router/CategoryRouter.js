const express = require('express')
const router = express.Router();
const CategoyController =  require("../Controller/CategoryController")

router.get("/getALL",CategoyController.GetAll)
router.get("/FindByIdCategory/:id",CategoyController.FindByIdCategory)


module.exports = router