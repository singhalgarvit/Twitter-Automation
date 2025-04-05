const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.gemini_api);

const prompts = [
  'Generate an interesting topic discussion on twitter of 30-40 words about NodeJS',
  'Act as a tech influencer and write a short, engaging, and viral-worthy tweet (30-40 words) about the latest trends in web development. The tweet should be easy to read, thought-provoking, and include a hook to grab attention. Use simple yet powerful language.The tech preference is React,Node,express,html,css and javascript',
  'Generate an interesting topic discussion on twitter of 30-40 words about CSS',
  'Generate a thought-provoking, 30-40 word tweet that resonates with web developers. It could be about JavaScript quirks, React.js best practices, or an interesting programming analogy. The tweet should be relatable and encourage discussion.',
  'Write a 30-40 word Twitter post that highlights the power of the MERN stack (Express.js, React.js, Node.js). The post should be informative, engaging, and slightly opinionated to drive engagement. Keep it crisp and appealing for tech professionals.',
  'Create a 30-40 word tweet predicting the future of web development. Focus on technologies like AI-powered coding, WebAssembly, or serverless architecture. Keep it futuristic, intriguing, and engagement-driven.',
  'Generate an interesting topic discussion on twitter of 30-40 words about ReactJS',
  'Write a concise and practical 30-40 word tweet about an underrated coding best practice in JavaScript, React.js, or Node.js. The tweet should provide instant value and be shareable among developers.',
  'Generate an interesting topic discussion on twitter of 30-40 words about Javascript',
  'Write a witty and humorous 30-40 word tweet about a common struggle faced by web developers. It should be relatable, slightly sarcastic, and fun to read. No hashtags, just pure developer humor.',
  'Write a short but impactful 30-40 word tweet about a productivity hack every developer should know. It should be practical, unique, and help devs write better code in less time.',
  'Ask a questions to techies on twitter post , question must be funny and engaging ',
  'Create a twitter post on any topic of HTML/CSS , JS ,Nodejs, Reactjs (30-40 words)',
  'Generate an interesting topic discussion on twitter of 30-40 words about HTML',
]

async function generateTechContent() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `${prompts[Math.floor(Math.random() * prompts.length)]} also remember one thing that your response will directly be published on twitter so dont add any cover line for me just give the answer of that is asked.Also the length and style of the tweet will be similar to this account e.g. : https://x.com/Prathkum`;
    
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

module.exports = generateTechContent;
