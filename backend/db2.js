const mongoose=require('mongoose');
const schema=mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is required']
    },
    name:{
        type:String,
        required:[true,'Nmae is required']
    },
   
    password:{
        type:String,
        required:[true,'Password is required']
    }
})
module.exports=mongoose.model("buyers",schema);