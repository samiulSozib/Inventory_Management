const router=require('express').Router()
const {signUpController}=require('../controller/authController')

router.post('/auth/sign-up',signUpController)


module.exports=router