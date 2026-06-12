const skillsDatabase = require("../data/skills");

const analyzeSkills = (resumeSkills) => {
  const missingSkills = skillsDatabase.filter(
    (skill) => !resumeSkills.includes(skill),
  );

  return {
    resumeSkills,
    missingSkills,
  };
};

module.export = analyzeSkills;
