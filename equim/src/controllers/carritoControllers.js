
const carritoController={
    carrito : function(req,res){

        res.render('compra',{
            title:'Carrito de compras'
        })
    }
}
module.exports = carritoController;