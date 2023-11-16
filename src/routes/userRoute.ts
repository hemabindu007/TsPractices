import express from 'express';
import { Router } from 'express';
import userModel from '../models/userModel'
import { Request , Response } from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const secretekey ="nhjbvmvnd%$^$%#*^&(*#mnbihoglrj3424566"

// import user from '../models/userModel';

const router: Router = express.Router();
router.get('/',(req:Request  , res:Response )=>{
  res.json("Hello!")
})
router.get('/getAll',async(req:Request , res:Response)=>{
  try{
    const data = await userModel.find()
    res.json(data)
  }catch(error){
    res.send(error)
  }
})
router.post('/postData',async(req:Request  ,res:Response )=>{
  try{
    const data = new userModel(req.body);
    const salt = await bcrypt.genSalt(10)
    await bcrypt.hash(req.body.password,salt).then(hashedpassword=>{
    if(hashedpassword){
        console.log("hashed",hashedpassword)
        data.password = hashedpassword
    }
    })   
    await userModel.create(data).then(Stored=>{
    if(Stored && Stored._id){
        console.log("Data Sored Successfully.....!")
        res.json({status : 'ok' , data : Stored })
    }
    })
    .catch(err=>{
            if(err){
                res.json({status : 'err',data:err})
             }
    })
}
catch(error){
    console.error(error);
    res.status(500).json({ message: 'Data is mandatory so,please enter the data...!' });
}

})
router.get('/getById/:id' , async(req:Request , res : Response)=>{
  try{
    const id = req.params.id
    console.log(id)
    const user =await userModel.findOne({_id:id})
    res.json(user)
  }catch(error){
    res.send(error)
  }
})
//by email
router.get('/getByEmail/:email' , async(req:Request , res : Response)=>{
  try{
    const email = req.params.email
    console.log(email)
    const user =await userModel.findOne({email:email})
    res.json(user)
  }catch(error){
    res.send(error)
  }
})
router.put('/update/:id' , async(req:Request , res : Response)=>{
  try{
    const id = req.params.id
    const updatedData = req.body
    console.log(updatedData)
    const user = await userModel.findByIdAndUpdate(id,updatedData,{new:true})
    res.json(user)
  }catch(error){
    res.send(error)
  }
})
router.delete('/delete/:id' , async(req:Request , res : Response)=>{
  try{
    const id = req.params.id
    console.log(id)
    const user = await userModel.findByIdAndDelete(id)
    res.json("Data deleted successfully.....!")
  }catch(error){
    res.send(error)
  }
})
export default router;