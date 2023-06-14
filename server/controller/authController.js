const db=require('../model/database')
const user=db.user
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.signUpController=async(req,res,next)=>{
    try{
        const {name,email,phone,password,address}=req.body
        if(name!="" && phone!="" && email!="" && password!=""){
            const findUser=await user.findOne({where:{email:email}})
            if(findUser){
                return res.json({msg:'Usre Already Exists'})
            }
            const hashPassword=await bcrypt.hash(password,10);
            const newUser=await user.create({
                name,
                email,
                phone,
                password:hashPassword,
                address
            })
            return res.json({msg:'User Create Success'})
        }else{
            return res.json({msg:"Please Enter Information"})
        }
    }catch(e){
        console.log(e)
        return res.json({msg:'Sign Up Fail'})
    }
}