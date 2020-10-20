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
        let errors = validationResult(req);
       
       if(errors.isEmpty()){
         
        db.Users.create({
            email:req.body.email.trim(),
            password:req.body.password.trim(),
            nombre:req.body.nombre.trim(),
            apellido:req.body.apellido.trim(),
            
            telefono: Number(req.body.telefono),
            direccion:req.body.direccion.trim(),
            ciudad:req.body.ciudad.trim(),
            provincia:req.body.provincia.trim(),
            
            
        })
        .then(results=>{
            console.log(results),
            res.redirect('/')
        }) 
        .catch(error=>{
            console.log(error)
            res.send(error)
            return res.redirect('/users/registro')
           
        })

    }  
    },









}

module.exports= userController;