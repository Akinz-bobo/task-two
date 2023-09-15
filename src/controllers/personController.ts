import {PersonValidator} from "../utils/validateSchema"
import Person from "../models/Person";
import { Request, Response, NextFunction } from 'express';

export const create = async function(req:Request,res:Response,next:NextFunction){
try {
    const validatedData = await PersonValidator.validateAsync(req.body);
    const newUser = await Person.create(validatedData);
res.status(201).json({
    data:newUser
})
} catch (error) {
    res.status(500).json({error});
next(error);
}
}


export const getUser = async function(req:Request,res:Response,next:NextFunction){
    const id= req.params.id;
    try {
        const user = await Person.findById(id);
        res.status(200).json({ data:user });
    } catch (error) {
        res.status(500).json({error});
        next(error);
    }
}

export const deleteUser = async function(req:Request,res:Response,next:NextFunction){
    const id= req.params.id;
    try {
        await Person.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully!"})
    } catch (error) {
        res.status(500).json({error});
        next(error);
    }
}

export const updateUser = async function(req:Request,res:Response,next:NextFunction){
    const id= req.params.id;
    // const data = await PersonValidator.validateAsync(req.body);
    try {
        const user = await Person.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({ data:user });
    } catch (error) {
        res.status(500).json({error});
        next(error);
    }
}

export const getAll = async function(req:Request,res:Response,next:NextFunction){
    let queryStr = JSON.stringify(req.query);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=>`$${match}`)
    const queryObj = JSON.parse(queryStr)
console.log(queryObj)
    try {   
        const user = await Person.find(queryObj);
        res.status(200).json({ data:user });
    } catch (error) {
        res.status(500).json({error});
        next(error);
    }
}
