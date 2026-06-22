const fs = require("fs");

const pdfParse = require("pdf-parse");

console.log("PDF PARSE:", pdfParse);

const extractPdfText = async (filePath) => {
  const dataBuffer =
    fs.readFileSync(filePath);

  const data =
    await pdfParse(dataBuffer);

  return data.text;
};

module.exports =
  extractPdfText;