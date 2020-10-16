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
            type:dataTypes.INTEGER(11),
         },
        id_producto:{
            type:dataTypes.INTEGER(11),
        },
        cantidad:{
            type:dataTypes.INTEGER(11),
        },
        remito:{
            type:dataTypes.INTEGER(11),
        },
                    
    }

    let config = {
        tablaName: "cart",
        timestamps:false
    }
    const Cart = sequelize.define(alias,cols,config);

      Cart.associate = function(models){
        Cart.belongsTo(models.Users,{
            as:"users",
            foreignKey:"id_usuario"
        })
        
        Cart.hasMany(models.Products,{
                as:"products",
                foreignKey:"id_producto"
            })
    
        }
    

    return Cart;
}