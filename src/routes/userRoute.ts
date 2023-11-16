import express from 'express';
import { Router } from 'express';
import userModel from '../models/userModel'
import { Request , Response } from 'express';
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
router.post('/postData',(req:Request  ,res:Response )=>{
  const names = req.body
  const data =new userModel(names);
  const val = data.save()
  res.send(data)
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