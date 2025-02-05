const express = require('express')
const Product =  require('./ProductRouter')
const Cart = require("./CartRouter")
const Order = require("./OrderRouter")
const Category = require("./CategoryRouter")
const Wishlist = require("./WhishListRouter")
const User =  require("./UserRouter")

const Router = (app)=>{

    app.use("/Product",Product)
    app.use("/Cart",Cart)
    app.use("/Order",Order)
    app.use("/Category",Category)
    app.use("/Wishlist",Wishlist)
    app.use("/User",User)

}

module.exports = Router