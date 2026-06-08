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
} = require("../controllers/resumeController");

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);
router.get("/",getResumes);
router.delete("/:id",deleteResume);
router.get("/:id",getResumeById);
router.get("/preview/:id",previewResume);

module.exports = router;