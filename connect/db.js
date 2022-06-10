const mongoose=require("mongoose")
const connectDB= async ()=>{

    try {
         await mongoose.connect(process.env.MONGO_URL,{
        
        })
        console.log("mongodb ulandi");
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=connectDB