import express from 'express';
import mongoose from 'mongoose';
import useroute from './routes/userRoute'; 
import bodyParser from 'body-parser';
// import cors from 'cors'
import swaggerSpec from '../swagger/config'
import swaggerUi from 'swagger-ui-express'
const app = express();
mongoose.connect('mongodb://localhost:27017/abc')
.then(()=>{
    console.log('db is connected......!')
})
.catch(err=>{
    console.log(err)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json())
app.use('/user',useroute)
app.listen(3300,()=>{
    console.log("server is running......!")
})