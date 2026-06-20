require("dotenv").config();

const groq =
require("./src/config/groq");

async function test() {

  const response =
    await groq.chat.completions.create({
      model:
      "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content:
          "Say hello from Groq",
        },
      ],
    });

  console.log(
    response.choices[0].message.content
  );
}

test();