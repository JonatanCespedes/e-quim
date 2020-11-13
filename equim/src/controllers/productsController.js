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
 category: function(req,res){
     let id = req.params.id;

     db.Categories.findByPk(id)
     .then(categoria=>{
        db.Products.findAll({
            where:{
                id_categoria: id
            }
        })
        .then(productos=>{
            res.render('products',{
                title: categoria.nombre,
                productos: productos
            })
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
                title:"Agregar producto",
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
              title:"Agregar producto",
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
                title:"Ver / Editar producto",
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
            id_categoria:Number(req.body.category),
        },
        { 
            where:{
                    id:req.params.id
                }
        })
        .then( () => {
            res.redirect('/products/show/' + req.params.id)
        })
        .catch(error =>{
            res.send(error)
        })  
    },
    delete :function(req,res){
        
        db.Products.destroy(
       { where:{
        id:req.params.id
        }
    })
    .then(() => {
        res.redirect('/')
    })
    .catch(error =>{
        res.send(error)
    })  
   },
   
}
    
module.exports = productsController;
