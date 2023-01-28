const router = require('express').Router()

//import controllers
const UserController = require('./controllers/UserController')

router.post( '/login', UserController.login)
router.post( '/cadastro', UserController.createUser)

module.exports = router