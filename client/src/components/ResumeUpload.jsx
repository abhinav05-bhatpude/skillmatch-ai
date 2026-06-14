import { useState } from "react";
import { uploadResume } from "../services/resumeApi";

function ResumeUpload({ onUploadSuccess }) {
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

      const response =
        await uploadResume(formData);

      console.log(
        "UPLOAD RESPONSE:",
        response.data
      );

      if (
        response.data &&
        response.data.resume &&
        response.data.resume._id
      ) {
        onUploadSuccess(
          response.data.resume._id
        );

        alert(
          "Resume Uploaded Successfully!"
        );
      } else {
        alert(
          "Resume uploaded but Resume ID not found."
        );
      }

    } catch (error) {

      console.error(
        "UPLOAD ERROR:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Upload Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div
      className="
      mt-12
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      rounded-3xl
      shadow-2xl
      max-w-2xl
      mx-auto
      "
    >

      <h2
        className="
        text-3xl
        font-bold
        text-center
        mb-4
        text-white
        "
      >
        Upload Resume
      </h2>

      <p
        className="
        text-center
        text-slate-300
        mb-8
        "
      >
        Upload your PDF resume and let
        SkillMatch AI analyze your skills.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="
        w-full
        border-2
        border-dashed
        border-cyan-400
        rounded-2xl
        p-6
        cursor-pointer
        bg-black/20
        text-white
        "
      />

      <p
        className="
        mt-4
        text-center
        text-slate-300
        "
      >
        {file
          ? file.name
          : "No file selected"}
      </p>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
        w-full
        mt-6
        bg-gradient-to-r
        from-purple-500
        to-cyan-500
        hover:scale-105
        transition-all
        duration-300
        text-white
        font-bold
        py-4
        rounded-2xl
        shadow-xl
        disabled:bg-gray-500
        disabled:cursor-not-allowed
        "
      >
        {loading
          ? "Uploading..."
          : "Upload Resume"}
      </button>

    </div>
  );
}

export default ResumeUpload;