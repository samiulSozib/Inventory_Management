const express=require('express')
const dotenv=require('dotenv')
const setMiddleware=require('./middleware/middleware')
const setRoute=require('./route/route')

const app=express()
dotenv.config()


setMiddleware(app)
setRoute(app)

require('./model/database')


app.listen(1000,()=>{
    console.log('server create success')
})