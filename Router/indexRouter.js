const express = require('express')
const Product =  require('./ProductRouter')

const Router = (app)=>{

    app.use("/product",Product)

}

module.exports = Router