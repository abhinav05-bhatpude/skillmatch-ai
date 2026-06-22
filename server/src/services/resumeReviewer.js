const skillsDatabase =
require("../data/skills");

const reviewResume = (
resumeSkills,
jobDescription
) => {

const detectedSkills =
resumeSkills || [];

const missingSkills =
skillsDatabase.filter(
(skill)=>
!detectedSkills.includes(skill)
);

const jdText =
jobDescription.toLowerCase();

const matchedSkills =
detectedSkills.filter(
(skill)=>
jdText.includes(
skill.toLowerCase()
)
);

let matchScore = 0;

if(detectedSkills.length > 0){

matchScore =
Math.round(
(
matchedSkills.length /
detectedSkills.length
) * 100
);

}

const suggestions = [];

if(
missingSkills.includes(
"Git"
)
){

suggestions.push(
"Learn Git and GitHub"
);

}

if(
missingSkills.includes(
"REST API"
)
){

suggestions.push(
"Build REST APIs with Express"
);

}

if(
missingSkills.includes(
"TypeScript"
)
){

suggestions.push(
"Learn TypeScript basics"
);

}

return {

matchScore,

matchedSkills,

missingSkills,

suggestions

};

};

module.exports =
reviewResume;