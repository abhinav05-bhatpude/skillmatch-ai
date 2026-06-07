const Resume = require("../models/Resume");

const uploadResume = async (
  req,
  res
) => {
  try {

    const resume =
      await Resume.create({
        fileName: req.file.filename,
      });

    res.status(201).json({
      success: true,
      resume,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getResumes = async (req,res) => {
    try{
        const resumes = await Resume.find();

        res.status(200).json(resumes);
    } catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

const deleteResume = async (
  req,
  res
) => {
  try {

    await Resume.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Resume Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  uploadResume,
  getResumes,
  deleteResume,
};