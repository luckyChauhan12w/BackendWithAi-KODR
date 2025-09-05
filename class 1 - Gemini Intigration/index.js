import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("Error: The GEMINI_API_KEY environment variable is not set.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = "Who is Most famous chai wala in india.";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("Generated Text:");
        console.log(text);

    } catch (error) {
        console.error("An error occurred during the API call:", error);
    }
}

run();