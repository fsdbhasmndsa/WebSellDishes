const wishlist = require("../Schema/wishlistSchema")

module.exports.viewWishlist = async (req,res)=>{
    
   try {
    const items =  await wishlist.find({userId:req.user._id})
    res.json({code:200,message:"Get successful",items:items})
   } catch (error) {
    res.json({code:400,message:"Get failded",items:items})
   }

}
module.exports.addWishlist = async (req,res)=>{
    const id = req.user._id;
    const idSP = req.params.id;

    try {
        const wish =  new wishlist({userId:id,items:idSP})
        await wish.save()
        res.json({code:200,message:"Successful"})
    } catch (error) {
        res.json({code:400,message:"Failed"})
    }
}
module.exports.deleteWishlist = async (req,res)=>{
    const idWish = req.params.id;

    try {
        await wishlist.deleteOne({_id:idWish})
        res.json({code:200,message:"Successful"})
    } catch (error) {
        res.json({code:400,message:"Failed"})
    }

}

module.exports.CheckWishList = async(req,res)=>{
    
}