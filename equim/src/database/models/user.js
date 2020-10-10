module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false, //permite nulo?
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false,
           
        },
        apellido:{
            type:dataTypes.STRING(45),
            allowNull:false,
            
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
            unique:true,
        },
        password:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        fecha:{
            type:dataTypes.DATEONLY()
        },
        avatar:{
            type:dataTypes.STRING(45)
        },
        domicilio:{
            type:dataTypes.STRING(255)
        },
        ciudad:{
            type:dataTypes.STRING(255)
        },
        provincia:{
            type:dataTypes.STRING(100)
        },
        rol:{
            type:dataTypes.STRING(45)
        }
    }
    let config = {
        tableName: "users",
        timestamps: true,
        underscored:true
    }
    const User = sequelize.define(alias,cols,config);
    User.associate = function(models){
        User.hasOne(models.Stores,{
            as:"tienda",
            foreignKey:"id_usuario"
        })

    }
    return User;
}