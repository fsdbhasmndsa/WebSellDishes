const User = require("../Schema/userSchema")
const Helper =  require("../Helper/GenerateToken")

module.exports.Login = async (req, res) => {
    const { username, password } = req.body;
    console.log("first", username)
    console.log("first", password)
    const user = await User.findOne({ username: username });
    if (user) {
        if (password != user.password) {
            res.json({ code: 400, message: "Login failed" })
        }
        res.json({ code: 200, message: "Login failed", Token: user.Token })
    }
    else {
        res.json({ code: 400, message: "Login failed" })
    }
}

module.exports.Register = async (req, res) => {
    const { fullname, username, password, phonenumber } = req.body
    
    const user = await User.findOne({ username: username }).select("username");
    const Token = Helper.GenerateToken(8)
    if (user) {
        res.json({ code: 400, message: "Username exitst" })
    }
    else {
        const userCreate = new User({
            fullname: fullname,
            password:password,
            username:username,
            phonenumber:phonenumber,
            role:"User",
            Token:Token
        })

        await userCreate.save();
        res.json({ code: 200, message: "Create successful" })


    }
}

module.exports.Fogotpassword = async (req, res) => {

}

module.exports.Changepassword = async (req, res) => {

}