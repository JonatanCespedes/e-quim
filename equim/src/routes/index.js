
var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController')
const adminUserCheck = require('../middlewares/adminUsserCheck')
router.get('/',mainController.index);



module.exports = router;
