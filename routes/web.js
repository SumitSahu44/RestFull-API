const express = require('express')
const route = express.Router()
const userRegisterController = require('../controllers/registerController')




route.get('/', userRegisterController().index)
route.post('/register', userRegisterController().register)
route.post('/signin, userRegisterController().login)

module.exports = route
