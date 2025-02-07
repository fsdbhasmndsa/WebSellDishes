const express = require('express')
const router = express.Router();
const wishlist =  require("../Controller/WhishlistController")


router.get("/viewWishlist",wishlist.viewWishlist)
router.get("/addWishlist/:id",wishlist.addWishlist)
router.get("/deleteWishlist/:id",wishlist.deleteWishlist)
router.get("/CheckWishList/:id",wishlist.CheckWishList)



module.exports = router