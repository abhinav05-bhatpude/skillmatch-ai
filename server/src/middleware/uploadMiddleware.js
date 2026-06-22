const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = path.join(
  __dirname,
  "../../uploads"
);

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(
      "Saving file to:",
      uploadPath
    );

    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const fileName =
      Date.now() +
      "-" +
      file.originalname;

    console.log(
      "Filename:",
      fileName
    );

    cb(null, fileName);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;