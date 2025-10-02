import mongoose from "mongoose";

console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line

const connectDB=async () =>{
    try {
        await(mongoose.connect(process.env.MONGO_URI));
        console.log('MongoDb connection is successfully')
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;