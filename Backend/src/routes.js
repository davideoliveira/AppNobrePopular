const router = require('express').Router()

//import controllers
const UserController = require('./controllers/UserController')
const PropagandaController = require('./controllers/Propagandacontroller')

router.post( '/login', UserController.login)
router.post( '/cadastro', UserController.createUser)
router.get( '/produtos', PropagandaController.consultaPropaganda)

module.exports = router