import express from 'express'
import Router from 'express'
import userModel from '../models/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const secretekey ="nhjbvmvnd%$^$%#*^&(*#mnbihoglrj3424566"
const router  = express.Router();
router.post('/login',async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    
    // Check if the username and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide username and password' });
  }
   else{
   const user = await userModel.findOne({email : email})
   const userPassword : any = user?.password
        if(user){
               if(user._id){
                bcrypt.compare(password , userPassword , (err,response)=>{
                  if(!err){
                     if(response){
                        const token = jwt.sign({_id : user._id , email :user.email},secretekey,{expiresIn:'1h'})
                         res.json({status : 'ok' , data : {token , response , user}})
                      }
                     else if(!response){
                         res.status(400).json({status:'ok',data:{response,message : 'incorrect password'}})
                     }
                  }
             })
               }
       }
       else if(user==null){
        res.status(400).json({status:'ok',data:{message : 'incorrect email'}})
       }
       

   }
 
  
})
export default router;