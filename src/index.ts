import express, { NextFunction,Request,Response } from 'express'
import bodyParser from 'body-parser'
import mongoSanitizer  from 'express-mongo-sanitize' 
import personRoutes from './routes/personRoutes'
import connectDB from './data/db'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(bodyParser.json())
// sanitize against NoSQL injection
app.use(mongoSanitizer());
const PORT = process.env.PORT||5000;

// connect to database
connectDB().then(()=>{
    
app.use("/api",personRoutes)
app.all('*', (error:Error, req:Request, res:Response, next:NextFunction)=>{
console.log("An error occurred")
res.status(500).json({message: "internal server error",error:error.stack })
})

    app.listen(PORT, ()=>console.log("server listening on port:"+PORT))
    
    
})

