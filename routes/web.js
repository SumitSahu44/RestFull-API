const express = require('express')
const route = express.Router()
const userRegisterController = require('../controllers/registerController')



// route.get('/', registerController().index)
route.get('/', userRegisterController().index)
route.post('/register', userRegisterController().register)


module.exports = route