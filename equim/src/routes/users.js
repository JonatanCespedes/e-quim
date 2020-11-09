var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const carritoController= require('../controllers/carritoControllers')

const loginValidator = require('../validations/loginValidator');
const sessionUserCheck = require('../middlewares/sessionUserCheck')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registro', userController.registro )
router.post('/registro', userController.crear )

router.get('/login', sessionUserCheck,userController.login);
router.post('/login',loginValidator,userController.processLogin);
router.get('/logout', userController.logout);

router.get('/profile', userController.profile);
router.put('/updateProfile/:id',userController.updateProfile);
router.get('/carrito', carritoController.carrito )
module.exports = router;
