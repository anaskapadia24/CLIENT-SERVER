// PATH : server/routes/auth.js
import express from "express";
import mongoose from "mongoose";

const router = express.Router();
const User = mongoose.model("User");

router.get('/',(req,res)=>{
   res.send("hello from routes/auth.js")
});

router.post('/signup',(req,res)=>{
    const {name, email, password}= req.body;
    if(!email || !password || !name){
        res.status(422).json({error:"please add all details"})
    }
    User.findOne({})

});

export default router;