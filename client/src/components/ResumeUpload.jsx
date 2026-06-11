import { useState } from "react";
import { uploadResume } from "../services/resumeApi";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      await uploadResume(formData);

      alert("Resume Uploaded Successfully!");
    } catch (error) {
      console.log(error);

      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-8 rounded-lg">

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <p className="mt-4">
        {file ? file.name : "No file selected"}
      </p>

      <button
        onClick={handleUpload}
        className="
          bg-blue-600
          text-white
          px-4
          py-2
          rounded
          mt-4
        "
      >
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;