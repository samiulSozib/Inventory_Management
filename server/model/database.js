const { Sequelize, DataTypes } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()
const DB_NAME = process.env.DATABASE_NAME
const DB_USERNAME = process.env.DATABASE_USERNAME
const DB_PASSWORD = process.env.DATABASE_PASSWORD



const sequelize = new Sequelize("inventory_management", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    pool: { max: 5, min: 0, idle: 1000 }
})

sequelize.authenticate()
    .then(() => {
        console.log('Database connect success')
    })
    .catch(error => {
        console.log('error' + error)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('sync databse')
    })
    .catch(e => {
        console.log(e)
    })

db.user=require('./userModel')(sequelize,DataTypes)


module.exports = db