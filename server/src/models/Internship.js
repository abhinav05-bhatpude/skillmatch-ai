const mongoose=require("mongoose");

const internshipSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
        },

        company: {
            type:String,
            required:true,
        },

        location: {
            type:String,
            required:true,
        }, 

        description: {
            type:String,
            required:true,
        },

        skills: {
            type:[String],
            default:[],
        },
    },{
        timestamps:true,
    }
);

module.exports = mongoose.model(
    "Internship",
    internshipSchema
);