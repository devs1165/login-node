var express = require('express');
var router = express.Router();
var userApi = require('./../apis/userApi');

router.get('/login', userApi.login);
router.get('/register', userApi.register);
router.get('/token/refresh', userApi.refreshToken);

module.exports = router;