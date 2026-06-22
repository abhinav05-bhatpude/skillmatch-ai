const Internship = require("../models/Internship");

const createInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);

    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getInternships = async (req,res)=>{
    try{
        const internships=await Internship.find();

        res.status(200).json(internships);
    } catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

const deleteInternship = async (req,res) => {
    try{
        await Internship.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"Deleted Successfully",
        });
    } catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

module.exports = {
  createInternship,
  getInternships,
  deleteInternship,
};