import ResumeUpload from "../components/ResumeUpload";

function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-6">
        Upload Resume
      </h1>

      <ResumeUpload />

    </div>
  );
}

export default ResumePage;