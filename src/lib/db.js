import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGODB_URI = 'mongodb+srv://piyushvats:mongodb45@cluster0.ap81kct.mongodb.net/express'
    
    await mongoose.connect(MONGODB_URI).then(()=>{ 
        console.log("Database connected");
    })
}