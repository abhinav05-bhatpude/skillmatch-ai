import ResumeUpload from "../components/ResumeUpload";
import SkillsList from "../components/SkillsList";
import RecommendationList from "../components/RecommendationList";

import {
  useState,
  useEffect,
} from "react";

import {
  getSkills,
} from "../services/resumeApi";

function ResumePage() {

  const [skills, setSkills] =
    useState([]);

  const [resumeId, setResumeId] =
    useState(null);

  useEffect(() => {

    const fetchSkills =
      async () => {

        if (!resumeId)
          return;

        try {

          const response =
            await getSkills(
              resumeId
            );

          setSkills(
            response.data.skills
          );

        } catch (error) {

          console.log(
            error
          );

        }

      };

    fetchSkills();

  }, [resumeId]);

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-5xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-4">

          Resume Analysis

        </h1>

        <p className="text-gray-600 mb-10">

          Upload your resume and
          get personalized
          internship recommendations.

        </p>

        <ResumeUpload
          onUploadSuccess={
            setResumeId
          }
        />

        <SkillsList
          skills={skills}
        />

        <RecommendationList />

      </div>

    </div>
  );
}

export default ResumePage;