const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")


const UserSChema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Iltimos Ism Kiriting"],
        minlength:3,
        maxlength:40
    },
    email:{
        type:String,
        required:[true,"Iltimos email Kiriting"],
        minlength:3,
        maxlength:40,
        match:[ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"iltimos haqiqiy elektron pochta manzilini kiriting"
     ],
     unique:true
    }
    ,password:{
        type:String,
        required:[true,"Iltimos Parol Kiriting"],
        
    },
    


})



module.exports=mongoose.model("User",UserSChema)