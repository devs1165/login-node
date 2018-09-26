function validate(req, res, next){
    if(true){
        req.user = {
            username : "Deep Prakash"
        }
        
        next()
    }
    else{
        res.status(401).send("Unauthorized!");
    }
}

module.exports = {
    validate : validate
}