const dbUsers = require('../data/users.json');
const fs = require('fs');
const path = require('path');

const userController = {
    registro: function (req,res){
        res.render('registro')
    },
    crear:function(req,res,next){
        let lastID = 1;
        dbUsers.forEach(user=>{
            if(user.id > lastID){
                lastID = user.id
            }
        })
        let newUser = {
            id:lastID + 1,
            name:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            category:req.body.category,
            telephone: Number(req.body.telephone),
            address:req.body.address,
            state:req.body.state,
            postalCode:Number(req.body.postalCode),
            
        }
        dbUsers.push(newUser);
        
        fs.writeFileSync(path.join(__dirname,"..","data","users.json"),JSON.stringify(dbUsers),'utf-8')

        res.redirect('/')
    },









}

module.exports= userController;