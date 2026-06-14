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
        if (!resumeId) return;

        try {
          const response =
            await getSkills(
              resumeId
            );

          setSkills(
            response.data.skills
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchSkills();
  }, [resumeId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100">

      <div className="max-w-6xl mx-auto px-6 py-10">

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