require("dotenv").config();

const analyzeResume =
require(
"./src/services/groqService"
);

async function test() {

const resume = `

Abhinav Bhatpude

Computer Engineering Student

Skills:

React
Node.js
Express
MongoDB
Git
JavaScript

Projects:

SkillMatch AI

AI Resume Analyzer

`;

const result =
await analyzeResume(
resume
);

console.log(
JSON.stringify(
result,
null,
2
)
);

}

test();