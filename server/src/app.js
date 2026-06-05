const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"SkillMatch AI API Running"
    });
});

module.exports=app;