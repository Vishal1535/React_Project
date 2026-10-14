import mongoose from "mongoose";
const ConnectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb connect successfully");
        
    }
    catch(err){
        console.log("MongoDB not Connected");
        
    }
}
export default ConnectDB