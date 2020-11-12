var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')
const upImagesProducts = require('../middlewares/upImagesProducts');
const adminUsserCheck = require ('../middlewares/adminUsserCheck')

router.get('/',productsController.listar);
router.get('/productDetail/:id',productsController.productsDetail);

router.get('/agregarProducto',adminUsserCheck,productsController.agregar);
router.post('/agregarProducto',upImagesProducts.any(),productsController.add);
//router.post('/add', upImagesProducts.any(), productsController.add)

router.get('/show/:id',adminUsserCheck,productsController.show);
router.put('/edit/:id',adminUsserCheck,upImagesProducts.any(),productsController.edit);

module.exports = router;