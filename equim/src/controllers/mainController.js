const dbproductos = require('../data/productos.json');
const fs = require('fs');
const path = require('path');


const mainController = {
    index: function(req, res) {
        res.render('index', {
                title: "Poductos destacados",
                productos: dbproductos
            })
        },
        }
module.exports = mainController ;