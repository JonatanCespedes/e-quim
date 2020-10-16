const dbUsers = require('../data/dbUsuarios');
const db = require('../database/models');

const {validationResult} = require('express-validator');
const fs = require('fs');
const path = require('path');

const userController = {
    registro: function (req,res){
        res.render('registro')
    },
    crear:function(req,res){
         /*let lastID = 1;
        dbUsers.forEach(user=>{
            if(user.id > lastID){
                lastID = user.id
            }
        })*/
        db.Users.create({
            email:req.body.email,
            password:req.body.password,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            
            telefono: Number(req.body.telefono),
            direccion:req.body.direccion,
            ciudad:req.body.ciudad,
            provincia:req.body.provincia,
            
            
        })
        .then(results=>{
            console.log(results),
            res.redirect('/')
        }) 
        .catch(error=>{
            res.send(error)
            return res.redirect('/users/registro')
           
        })

        
    },









}

module.exports= userController;