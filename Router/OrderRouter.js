const express = require('express')
const router = express.Router();
const OrderController =  require("../Controller/OrderController")


router.get("CreateOrder",OrderController.CreateOrder)
router.get("ViewOrder",OrderController.ViewOrder)


module.exports = router