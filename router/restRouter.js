var express = require('express');
var router = express.Router();
var restApi = require('./../apis/restApi');

router.get('/permission/:id?/:name?', restApi.get)
      .post('/permission', restApi.post)
      .put('/permission', restApi.update)
      .delete('/permission', restApi.del);

module.exports = router;