const dbproductos = require('../data/productos.json');
const fs = require('fs');
const path = require('path');


const productsController = {
    listar: function(req, res) {
        res.render('products', {
                title: "Todos los Productos",
                productos: dbproductos
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
        res.render('productAdd')
    },
    add:function(req,res,next){
        let lastID = 1;
        dbproductos.forEach(producto=>{
            if(producto.id > lastID){
                lastID = producto.id
            }
        })
        let newProduct = {
            id:lastID + 1,
            name:req.body.name,
            description:req.body.description,
            imagen:req.body.imagen,
            category:req.body.category,
            price:req.body.price,
        }
        dbproductos.push(newProduct);
        
        fs.writeFileSync(path.join(__dirname,"..","data","productos.json"),JSON.stringify(dbproductos),'utf-8')

        res.redirect('/')
},
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