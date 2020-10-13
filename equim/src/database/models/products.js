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
        id_categorias:{
            type:dataTypes.INTEGER(11),
            allowNull:false
    },
}

    let config = {
        tableName  : "products",
        timestamps: true,
        underscored: true
    }
    const Product = sequelize.define(alias,cols,config)

    Categorie.associate = function(models){
        Categorie.hasMany(models.Products,{
            as:"categories",
            foreignKey:"id_categoria",
        
        })
    }


    return Product;
}