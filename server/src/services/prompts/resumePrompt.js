const resumePrompt =
(resumeText) => `
Analyze this resume.

Return ONLY valid JSON.

{
  "skills": [],
  "missingSkills": [],
  "atsScore": 0,
  "recommendedRoles": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

module.exports =
resumePrompt;