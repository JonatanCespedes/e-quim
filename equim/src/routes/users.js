var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const carritoController= require('../controllers/carritoControllers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registro', userController.registro )
router.post('/registro', userController.crear )
router.get('/carrito', carritoController.carrito )
module.exports = router;
