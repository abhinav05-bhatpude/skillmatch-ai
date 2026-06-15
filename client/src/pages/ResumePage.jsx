import { useState,useEffect } from "react";

import ResumeUpload from "../components/ResumeUpload";

import SkillsList from "../components/SkillsList";

import ATSScoreCard from "../components/ATSScoreCard";

import MissingSkills from "../components/MissingSkills";

import RecommendedRoles from "../components/RecommendedRoles";

import SuggestionsCard from "../components/SuggestionsCard";

import { getSkills }
from "../services/resumeApi";

import { getAnalysis }
from "../services/analysisApi";

function ResumePage() {

  const [resumeId,
  setResumeId] =
  useState(null);

  const [skills,
  setSkills] =
  useState([]);

  const [analysis,
  setAnalysis] =
  useState(null);

  useEffect(() => {

    const fetchData =
    async () => {

      if(!resumeId)
      return;

      try {

        const skillsResponse =
        await getSkills(
          resumeId
        );

        setSkills(
          skillsResponse
          .data
          .skills
        );

        const analysisResponse =
        await getAnalysis(
          resumeId
        );

        setAnalysis(
          analysisResponse
          .data
        );

      }
      catch(error){

        console.log(
          error
        );

      }

    };

    fetchData();

  },[resumeId]);

  return (

    <div
      className="
      min-h-screen
      bg-black
      text-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          mb-4
          "
        >
          Resume Analysis
        </h1>

        <p
          className="
          text-slate-400
          mb-10
          "
        >
          Upload your resume
          and receive AI
          powered insights.
        </p>

        <ResumeUpload
          onUploadSuccess={
            setResumeId
          }
        />

        {analysis && (

          <div
            className="
            mt-12
            space-y-8
            "
          >

            <ATSScoreCard
              score={
                analysis
                .atsScore
              }
            />

            <SkillsList
              skills={skills}
            />

            <MissingSkills
              skills={
                analysis
                .missingSkills
              }
            />

            <RecommendedRoles
              roles={
                analysis
                .recommendedRoles
              }
            />

            <SuggestionsCard
              suggestions={
                analysis
                .suggestions
              }
            />

          </div>

        )}

      </div>

    </div>

  );

}

export default ResumePage;