const Order =  require("../Schema/orderSchema")
const User = require("../Schema/userSchema")
module.exports.CreateOrder = async(req,res)=>{
    const {id,items,total,address} =  req.body

    const order =  new Order({
        userId:id,
        items:items,
        totalAmount:total,
        address:address,
        status:"Pending"
    })

    try {
        order.save()
        res.json({code:200,message:"Order successful"})
    } catch (error) {
        res.json({code:400,message:"Order failed"})
    }


}

module.exports.ViewOrder = async(req,res)=>{
    const token = req.user.Token
    const user =  await User.findOne({Token:token}).select("_id")

    const ListOrder = await Order.find({userId:user._id});

    res.json({code:200,message:"Get Order Successful",ListOrder:ListOrder})
}

module.exports.DeleteOrder = async (req,res)=>{
    const id =  req.params.id

    try {
       await Order.deleteOne({_id:id}) 
       res.json({code:200,message:"Delete Successful"})
    } catch (error) {
        res.json({code:400,message:"Delete Failed"})
    }
}