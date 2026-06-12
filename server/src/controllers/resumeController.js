const Resume = require("../models/Resume");
const extractPdfText = require("../services/pdfService");
const extractSkills = require("../services/skillExtractor");
const analyzeSkills = require("../services/analysisService");

const uploadResume = async (req, res) => {
  try {
    const text = await extractPdfText(req.file.path);

    const detectedSkills = extractSkills(text);

    const resume = await Resume.create({
      fileName: req.file.filename,

      extractedText: text,

      skills: detectedSkills,
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

const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();

    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const previewResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    res.json({
      text: resume.extractedText,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteResume = async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);

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

const getSkills =
async(req,res)=>{

try{

const resume =
await Resume.findById(
req.params.id
);

res.json({
skills:
resume.skills
});

}catch(error){

res.status(500).json({
message:
error.message
});

}

};
const getAnalysis = async(req,res) => {
  try{
    const resume=await Resume.findById(req.params.id);

    const analysis = analyzeSkills(resume.skills);

    res.json(analysis);
  } catch(error){
    res.status(500).json({
      message:error.message
    });
  }
};

module.exports = {
  uploadResume,
  getResumes,
  getResumeById,
  deleteResume,
  previewResume,
  getSkills,
  getAnalysis,
};