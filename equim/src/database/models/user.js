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
            type:dataTypes.STRING(45),
            allowNull:false
        },
        
        avatar:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        direccion:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        ciudad:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        provincia:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        
    }
    let config = {
        tableName: "users",
        timestamps: true,
        underscored:true
    }
    const User = sequelize.define(alias,cols,config);
    
        

    
    return User;
}