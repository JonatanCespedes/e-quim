const dbproductos = require('../data/productos.json');
const dbProducts = require('../data/dbProductos');
const fs = require('fs');
const path = require('path');



const db = require("../database/models");
const { where } = require('sequelize');

const productsController = {
    listar: function (req, res) {
        db.Products.findAll()
         .then(productos => {
            res.render('products',{
     title:"Todos los productos",
     productos:productos
         })
         })
 },
    productsDetail: function (req, res) {
        db.Products.findOne({
            where:{
                id:req.params.id
            }
        })
       
        .then(producto=>{
            res.render('productDetail', {
                title: "Detalle del Producto",
                id:req.params.id,
                producto: producto
            }) 
        })
    },
    agregar: function (req, res) {
       db.Categories.findAll()
        .then(categorias => {
           res.render('productAdd',{
                title:"agregar producto",
                categorias:categorias
           })
        })
},
add: function(req,res){
  
    db.Products.create({   
          nombre:req.body.nombre.trim(),
          precio:Number(req.body.precio),
          descripcion:req.body.descripcion,
          imagen : req.files[0].filename,
          id_categoria:Number(req.body.category)
      })
   .then(producto=>{
      db.Categories.findAll()
     
      .then(categorias => {
         res.render('productAdd',{
              title:"agregar producto",
              categorias:categorias
         })
      })
      .catch(error =>{
      res.send(error)
      })
  })
  .catch(error =>{
      res.send(error)
      })   
},

show :function (req,res) {      //pasar a sequelize 3
    
        let producto= db.Products.findByPk(req.params.id,{include:{association:"categoria"}})
        let categorias = db.Categories.findAll()

    
        Promise.all([producto,categorias])
        .then(([producto,categorias])=> {
           res.render('editarProducto',{
                title:"ver / Editar producto",
                categorias:categorias,
                producto:producto
            })
        })
 },
edit :function(req,res){
   console.log(req.body)
    db.Products.update({ 
        nombre:req.body.nombre.trim(),
        precio:Number(req.body.precio),
        descripcion:req.body.descripcion,
        imagen : req.files[0].filename,
        id_categoria:Number(req.body.category),
    },
         { where:{
                   id:req.params.id
    }})
 
    .then( () => {
        res.redirect('/products/show/' + req.params.id)
})
.catch(error =>{
    res.send(error)
    })  
}
        }
    
module.exports = productsController;
