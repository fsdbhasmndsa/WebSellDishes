const express = require('express')
const router = express.Router();
const OrderController =  require("../Controller/OrderController")


router.post("CreateOrder",OrderController.CreateOrder)
router.get("ViewOrder",OrderController.ViewOrder)
router.delete("DeleteOrder/:id",OrderController.DeleteOrder)

module.exports = router