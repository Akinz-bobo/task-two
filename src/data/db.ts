import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!);
      } catch (error) {
       console.log("error connecting to MongoDB", error)
      }
}

export default connectDB