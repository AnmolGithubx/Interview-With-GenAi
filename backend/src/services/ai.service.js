const { GoogleGenAI } = require("@google/genai")
const { z, intersection } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema")



const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEN_API_KEY
})

const interviewReportSchema = z.object({
    technicalQuestions: z.array(z.object({
        question: z.string().description("The technical question can be asked in the interview"),
        intention: z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take etc.")
    })).description("Technical questions that can be asked in the interview along with their intention ans how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().description("The technical question can be asked in the interview"),
        intention: z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take etc.")
    })).description("Behavioral questions that can be asked in the interview along with their intention ans how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().description("The skill which the candidate is lacking"),
        severity: z.enum(["low","medium","high"]).description("The severity of the skill gap")
    })).description("List of skill gaps of the candidate's profile along with their severity"),
    preperationPlan: z.array(z.object({
        day: z.number().description("The day number in the preperation plan, starting from 1"),
        focus: z.string().description("The main focus of this day in the preperation plan"),
        tasks: z.array(z.string()).description("List of tasks to be done on this day to follow the preperation plan")
    })).description("A day-wise preperation plan for the candidate to be follow in order to prepare for the interview effectively")
})

async function generateInterviewReport(resume, selfDescription, jobDescription) {



}


module.exports = invokeGeminiAi