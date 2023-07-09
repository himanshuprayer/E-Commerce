console.log("API");

const express=require("express")
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
const User=require('./db1');
require('./config');
const Pro=require('./db');
const Buy=require('./db2');
app.post('/sign',async(req,resp)=>{
    let res=new User(req.body);
    res=await res.save();
    resp.send(res);
})
app.post('/buy',async(req,resp)=>{
    let res=new Buy(req.body);
     res=await res.save();
    resp.send(res);
})
app.post("/buyS",async(req,resp)=>{
    if(req.body.email && req.body.password){
        let res=await Buy.findOne(req.body)
        if(res){
            resp.send(res);
        }else{
            resp.send("No result found")
        }
    }
})
app.post('/login',async(req,resp)=>{
    if(req.body.email && req.body.password){
        let res=await User.findOne(req.body)
        if(res){
                resp.send(res);
        }else{
            resp.send('User not found')
        }
    }
})
app.post('/pro',async(req,resp)=>{
    const data= new Pro(req.body);
    const res= await data.save();
    resp.send(res);
})
app.get('/pro',async(req,resp)=>{
    let res=await Pro.find();
    resp.send(res);
})
app.get('/search/:key',async(req,resp)=>{
    let res=await Pro.find({
        "$or":[  
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
]
} );
resp.send(res);
})
app.listen(5000);