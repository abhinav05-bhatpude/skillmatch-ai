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

module.exports = {
  uploadResume,
};