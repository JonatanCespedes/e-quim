var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')


router.get('/',productsController.listar);
router.get('/productDetail/:id',productsController.productsDetail);

router.get('/agregarProducto',productsController.agregar);
router.post('/agregarProducto',productsController.add);

router.get('/show/:id',productsController.show);
router.put('/edit/:id',productsController.edit);

module.exports = router;