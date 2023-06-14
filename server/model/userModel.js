module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        email:{
            type:DataTypes.TEXT
        },
        phone: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.TEXT
        },
        thumbnailImage:{
            type:DataTypes.TEXT
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
        timestamps: true
    })
    return User
}