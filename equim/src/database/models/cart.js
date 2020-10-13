module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false, 
            autoIncrement: true,
            primaryKey:true
        },
        id_usuario:{
            type:dataTypes.INTERGER(11),
         },
        id_producto:{
            type:dataTypes.INTERGER(11),
        },
        cantidad:{
            type:dataTypes.INTERGER(11),
        },
        remito:{
            type:dataTypes.INTERGER(11),
        }
                    
    },
}
    let config = {
        tablaName: "cart",
        timestamps:false
    }
    const Cart = sequelize.define(alias,cols,config);

    User.associate = function(models){
        User.hasOne(models.cart,{
            as:"cart",
            foreignKey:"id_usuario"
        })
        products.associate = function(models){
            products.hasOne(models.cart,{
                as:"cart",
                foreignKey:"id_producto"
            })
    
        }
    }

    return Cart;