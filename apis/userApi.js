function login(req, res){
    console.log("login",req.user)
    res.send("User is logged in")
}

function register(req, res){
    console.log("register", req.user)
    res.send("User is registered");
}

function refreshToken(req, res){
    res.send("TOken is refreshed")
}

module.exports = {
    login : login,
    register : register,
    refreshToken : refreshToken
}