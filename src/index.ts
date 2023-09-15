import express, { NextFunction,Request,Response } from 'express'
import bodyParser from 'body-parser'
import mongoSanitizer  from 'express-mongo-sanitize' 
import personRoutes from './routes/personRoutes'
import connectDB from './data/db'

// connect to database
connectDB().then(()=>{
    const app = express()
    app.use(bodyParser.json())
    // sanitize against NoSQL injection
    app.use(mongoSanitizer());
    // sanitize against site script xss
    
app.use("/api",personRoutes)
app.all('*', (error:Error, req:Request, res:Response, next:NextFunction)=>{
console.log("An error occurred")
res.status(500).json({message: "internal server error",error:error.stack })
})

    app.listen(5000, ()=>console.log("server listening on port:5000"))
    
    
})

