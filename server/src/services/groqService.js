const groq =
require("../config/groq");

const resumePrompt =
require("./prompts/resumePrompt");

const analyzeResume =
async (resumeText) => {

  const completion =
    await groq.chat.completions.create({

      model:
      "llama-3.3-70b-versatile",

      temperature: 0.3,

      messages: [
        {
          role: "user",
          content:
          resumePrompt(
            resumeText
          ),
        },
      ],

    });

  const content =
    completion
    .choices[0]
    .message
    .content;

  try {

    return JSON.parse(
      content
    );

  } catch (error) {

    console.log(
      "Groq Parse Error:",
      error
    );

    return {
      skills: [],
      missingSkills: [],
      atsScore: 0,
      recommendedRoles: [],
      suggestions: [],
    };

  }

};

module.exports =
analyzeResume;