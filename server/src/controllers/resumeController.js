const Resume =
require("../models/Resume");

const extractPdfText =
require("../services/pdfService");

const analyzeResume =
require("../services/groqService");

const uploadResume =
async (req, res) => {

  try {

    console.log(
      "UPLOAD STARTED"
    );

    const text =
      await extractPdfText(
        req.file.path
      );

    console.log(
      "PDF EXTRACTED"
    );

    const aiAnalysis =
      await analyzeResume(
        text
      );

    console.log(
      "AI ANALYSIS COMPLETE"
    );

    const resume =
      await Resume.create({

        fileName:
        req.file.filename,

        extractedText:
        text,

        skills:
        aiAnalysis.skills,

        atsScore:
        aiAnalysis.atsScore,

        missingSkills:
        aiAnalysis.missingSkills,

        recommendedRoles:
        aiAnalysis.recommendedRoles,

        suggestions:
        aiAnalysis.suggestions,

      });

    console.log(
      "MONGODB SAVED"
    );

    res.status(201).json({

      success: true,

      resume,

    });

  } catch (error) {

    console.error(
      "UPLOAD ERROR:",
      error
    );

    res.status(500).json({

      success: false,

      message:
      error.message,

    });

  }

};

const getResumes =
async (req, res) => {

  try {

    const resumes =
      await Resume.find();

    res.status(200)
    .json(resumes);

  } catch (error) {

    res.status(500).json({
      message:
      error.message,
    });

  }

};

const getResumeById =
async (req, res) => {

  try {

    const resume =
      await Resume.findById(
        req.params.id
      );

    res.json(resume);

  } catch (error) {

    res.status(500).json({
      message:
      error.message,
    });

  }

};

const previewResume =
async (req, res) => {

  try {

    const resume =
      await Resume.findById(
        req.params.id
      );

    res.json({

      text:
      resume.extractedText,

    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message,
    });

  }

};

const deleteResume =
async (req, res) => {

  try {

    await Resume
    .findByIdAndDelete(
      req.params.id
    );

    res.status(200)
    .json({

      success: true,

      message:
      "Resume Deleted",

    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message,
    });

  }

};

const getSkills =
async (req, res) => {

  try {

    const resume =
      await Resume.findById(
        req.params.id
      );

    res.json({

      skills:
      resume.skills,

    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message,
    });

  }

};

const getAnalysis =
async (req, res) => {

  try {

    const resume =
      await Resume.findById(
        req.params.id
      );

    res.json({

      atsScore:
      resume.atsScore,

      skills:
      resume.skills,

      missingSkills:
      resume.missingSkills,

      recommendedRoles:
      resume.recommendedRoles,

      suggestions:
      resume.suggestions,

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

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