const skills =
require("../data/skills");

const extractSkills = (
text
) => {

const foundSkills =
skills.filter((skill)=>

text
.toLowerCase()
.includes(
skill.toLowerCase()
)

);

return foundSkills;

};

module.exports =
extractSkills;