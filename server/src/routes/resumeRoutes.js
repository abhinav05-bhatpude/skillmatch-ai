const express = require("express");

const router = express.Router();

const upload =
  require("../middleware/uploadMiddleware");

const {
  uploadResume,
  getResumes,
  deleteResume,
  getResumeById
} = require("../controllers/resumeController");

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);
router.get("/",getResumes);
router.delete("/:id",deleteResume);
router.get("/:id",getResumeById);

module.exports = router;