import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/user');
      } catch (error) {
       console.log("error connecting to MongoDB", error)
      }
}

export default connectDB