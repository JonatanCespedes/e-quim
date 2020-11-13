const db = require ('../database/models')
const fs = require('fs');
const path = require('path');


const mainController = {
    index: function(req, res) {
        db.Products.findAll()
        .then((productos)=>{
            res.render('index', {
                title: "Productos destacados",
                productos: productos
            })
        })
        .catch(error =>{
            console.log(error)
        }) 
        
        },
        }
module.exports = mainController ;