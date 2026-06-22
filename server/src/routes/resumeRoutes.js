const express = require("express");

const router = express.Router();

const upload =
require("../middleware/uploadMiddleware");

const {
  uploadResume,
  getResumes,
  deleteResume,
  getResumeById,
  previewResume,
  getSkills,
  getAnalysis,
} = require("../controllers/resumeController");

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

router.get("/", getResumes);

router.get(
  "/preview/:id",
  previewResume
);

router.get(
  "/skills/:id",
  getSkills
);

router.get(
  "/analysis/:id",
  getAnalysis
);

router.get(
  "/:id",
  getResumeById
);

router.delete(
  "/:id",
  deleteResume
);

module.exports = router;