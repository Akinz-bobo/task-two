import mongoose from "mongoose";
const personSchema = new mongoose.Schema({
    name: {
        type:String,
        require:[true, "name must be provided"],
        trim:true,
    },
    email:{
        type:String,
        require:[true, "email must be provided"],
        unique:true
    },
age:{
    type:Number,
    min:10,
}
},{timestamps:true})

const Person = mongoose.model("Person", personSchema)
export default Person