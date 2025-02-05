const GenerateToken =  require("../Helper/GenerateToken")

module.exports.GET_ALL = (req,res) =>{
    const token =  GenerateToken.GenerateToken(8)
    res.json({message:"running",token:token})
}