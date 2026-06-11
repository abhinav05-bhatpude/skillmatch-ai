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
    <div
      className="
      border
      p-8
      rounded-xl
      shadow-md
      bg-white
      max-w-xl
      mx-auto
      "
    >
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="
        w-full
        border
        rounded-lg
        p-3
        cursor-pointer
        "
      />

      <p className="mt-4 text-gray-600">
        {file ? file.name : "No file selected"}
      </p>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
        bg-blue-600
        hover:bg-blue-700
        hover:scale-105
        transition-all
        duration-300
        text-white
        px-6
        py-3
        rounded-lg
        mt-4
        shadow-md
        hover:shadow-xl
        disabled:bg-gray-400
        disabled:cursor-not-allowed
        "
      >
        {loading ? "Uploading..." : "Upload Resume"}
      </button>
    </div>
  );
}

export default ResumeUpload;