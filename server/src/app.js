const express=require("express");
const cors=require("cors");
const healthRoutes=require("./routes/healthRoutes");
const internshipRoutes=require("./routes/internshipRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app=express();

app.use("/api/health",healthRoutes);
app.use("/api/internships",internshipRoutes);
app.use("/api/resumes",resumeRoutes);
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"SkillMatch AI API Running"
    });
});

module.exports=app;