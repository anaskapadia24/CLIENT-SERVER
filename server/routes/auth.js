// PATH : server/routes/auth.js
import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
   res.send("hello from routes/auth.js")
});

router.post('/signup',(req,res)=>{
    console.log(req.body)    
});

export default router;