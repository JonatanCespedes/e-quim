const dbproductos = require('../data/productos.json');
const fs = require('fs');
const path = require('path');

const db = require("../database/models");
const { where } = require('sequelize');

const productsController = {
    listar: function(req, res) {
        db.products.findAll()
        .them(productos=>{
            res.send(productos)

            })
    },
    productsDetail: function (req, res) {
        let id = req.params.id;
        let producto = dbproductos.filter(producto => {
            return producto.id == id
        })
        res.render('productDetail', {
            title: "Detalle del Producto",
            id: id,
            producto: producto[0]
        }) 
    },
    agregar: function (req, res) {
       db.categories.findAll()
        .them(categorias => {
           res.render('productAdd',{
    title:"agregar producto",
    categorias:categorias
        })
        })
},
    add:function(req,res,next){
       db.users.findOne({
           where:{
               id:req.session.user.id
           },
           })
        }
    .then(users =>{
        db.products.add({   
            nombre:req.body.nombre.trim(),
            precio:Number(req.body.precio),
            descripcion:req.body.descripcion,
            imagenes:req.file[0].filename,
           id_categories:Number(req.body.categories)
        })
    })

.catch(error =>{
    res.send(error)
}),

show:function(req,res){
    let idProducto = req.params.id;
    let resultado = dbproductos.filter(producto=>{
        return producto.id == idProducto
    })

    res.render('editarProducto',{
        title: "Ver / Editar Producto",
        producto:resultado[0],
        total:dbproductos.length,
        

    })
},
edit:function(req,res){
    let idProducto = req.params.id;

    dbproductos.forEach(producto => {
        if (producto.id == idProducto) {
            producto.id = Number(req.body.id);
            producto.name = req.body.name.trim();
            producto.price = Number(req.body.price);
            producto.category = req.body.category.trim();
            producto.description = req.body.description.trim();
            //producto.image = (req.files[0]) ? req.files[0].filename : producto.image
        }
    })

    fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSON.stringify(dbproductos))
    res.redirect('/products/show/' + idProducto)

}

}

module.exports = productsController;