const express = require('express')
const router = express.Router();
const CartController =  require("../Controller/CartController")


router.get("viewCart",CartController.viewCart)
router.get("AddtoCart",CartController.AddtoCart)
router.get("decreaseCart",CartController.decreasetoCart)
router.get("increaseCart",CartController.increasetoCart)
router.get("deleteToCart",CartController.ReducetoCart)
router.get("clearCart",CartController.clearCart)



module.exports = router