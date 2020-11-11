module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre: {
            type:dataTypes.STRING(45),
            allowNull:false
        },
        precio: {
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        
        descripcion:{
            type:dataTypes.STRING(300),
            allowNull:false
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        id_categoria:{
            type:dataTypes.INTEGER(11),
            allowNull:false
    },
}

    let config = {
        tableName  : "products",
        timestamps: false,
       
    }
    const Product = sequelize.define(alias,cols,config)

    Product.associate = function(models){
        Product.belongsTo(models.Categories,{
            as:"categoria",
            foreignKey:"id_categoria",
        
        })
       /* Product.belongsTo(models.Cart,{
            as:"cart",
            foreignKey:"id_cart",

    })*/

    }
    return Product;
}