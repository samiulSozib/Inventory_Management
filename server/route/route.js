const authRoute=require('./authRoute')

const routes=[
    {
        path:'/api',
        handler:authRoute
    },
    {
        path:'/',
        handler:(req,res)=>{
            return res.json({msg:'Welcome to my application'})
        }
    }
]

module.exports=(app)=>{
    routes.forEach(r=>{
        if(r.path=='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}