const mongoose = require('mongoose');
const GenerateToken =  require("../Helper/GenerateToken")
const Product =  require("../Schema/productSchema")



module.exports.GET_ALL = async (req,res) =>{

   const items =  await Product.find().select("-createdAt -updatedAt -description ").lean();
   
    res.json({message:"running",items:items})
}

module.exports.GetDetailProduct = async (req,res)=>{
    const id = req.params.id
    const itemDetail = await Product.findOne({_id:id}).select("-createdAt -updatedAt category").lean()
    res.json({message:"running",items:itemDetail})
}

module.exports.getProductSimilar = async (req,res)=>{
    const id = req.params.id
    console.log("first",id)
    const IDcategory = await Product.findOne({_id:id}).select("category").lean()
    console.log("IDcategory",IDcategory.category)
    const itemsSimilar = await Product.find({category:IDcategory.category}).select("-createdAt -updatedAt category").lean()


    res.json({message:"running",items:itemsSimilar})
}