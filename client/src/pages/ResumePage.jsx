import ResumeUpload from "../components/ResumeUpload";
import SkillsList from "../components/SkillsList";

function ResumePage() {

  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Git"
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-5xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-4">

          Resume Analysis

        </h1>

        <p className="text-gray-600 mb-10">

          Upload your resume and
          discover your skills.

        </p>

        <ResumeUpload />

        <SkillsList skills={skills} />

      </div>

    </div>
  );
}

export default ResumePage;