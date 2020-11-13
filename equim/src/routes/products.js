var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')
const upImagesProducts = require('../middlewares/upImagesProducts');
const adminUsserCheck = require ('../middlewares/adminUsserCheck')


router.get('/', productsController.listar);

// DETALLE DE PRODUCTO
router.get('/productDetail/:id',productsController.productsDetail);

// CATEGORIAS
router.get('/category/:id', productsController.category);

//Agregar productos
router.get('/agregarProducto',adminUsserCheck,productsController.agregar);
router.post('/agregarProducto',upImagesProducts.any(),productsController.add);

//EDITAR o ELIMINAR
router.get('/show/:id',adminUsserCheck,productsController.show);
router.put('/edit/:id',adminUsserCheck,upImagesProducts.any(),productsController.edit);
router.delete('/delete/:id',adminUsserCheck,productsController.delete)

module.exports = router;