function get(req, res){
    if(req.params.id !== undefined && req.params.name !== undefined)
        res.send("get "+req.params.id+" name = "+req.params.name);
    else
        res.send("get without param");
}

function post(req, res){
    res.send("post");
}

function update(req, res){
    res.send("update");
}

function del(req, res){
    res.send("delete");
}

module.exports = {
    get : get,
    post : post,
    update :update,
    del : del
}