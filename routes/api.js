const express = require('express');
const route = express.Router();
const apiUsers = require('../controllers/apidata')
// routes 

route.get('/users', apiUsers().users)
// route.get('/user/:name', apiUsers().userOne)
route.get('/user/delete/:name', apiUsers().deleteOne)
route.get('/user/update', apiUsers().updateOne)

module.exports = route;
