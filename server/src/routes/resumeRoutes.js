const express = require("express");

const router = express.Router();

const upload =
  require("../middleware/uploadMiddleware");

const {
  uploadResume,
  getResumes,
  deleteResume
} = require("../controllers/resumeController");

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);
router.get("/",getResumes);
router.delete("/:id",deleteResume);

module.exports = router;