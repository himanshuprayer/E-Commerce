const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    price:{
        type:Number,
        required:[true,'Price is required']
    },
    company:{
        type:String,
        required:[true,"Compnay is required"]
    },
    image:{
        type:String,
        required:[true,'Image is required']
    }
})
module.exports=mongoose.model('products',schema)