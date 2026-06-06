const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"SkillMatch AI API Running"
    });
});

module.exports=router;