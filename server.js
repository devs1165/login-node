var express = require('express');
var userRouter = require('./router/router');
var restRouter = require('./router/restRouter');
var authMiddleware = require('./middlewares/auth');

var app = express();

app.use(authMiddleware.validate);
app.use('/user', userRouter);
app.use('/rest', restRouter);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

// jwt
// mongoose
