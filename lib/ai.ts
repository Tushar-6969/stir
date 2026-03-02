// lib/ai.ts
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const API_KEY = process.env.GROQ_API_KEY;

if (!API_KEY) {
  throw new Error("GROQ_API_KEY is not defined in environment variables");
}

/**
 * Summarize movie reviews using Groq LLM API
 * @param reviews Array of audience reviews
 * @returns { summary: string, sentiment: 'positive' | 'mixed' | 'negative' }
 */
export async function summarizeSentiment(reviews: string[]) {
  if (!reviews || reviews.length === 0) {
    return { summary: "No reviews available", sentiment: "mixed" };
  }

  const prompt = `
Analyze the following audience reviews for a movie and provide:
1. A short summary of overall audience sentiment.
2. Classify overall sentiment as positive, mixed, or negative.

Reviews:
${reviews.map((r, i) => `${i + 1}. ${r}`).join("\n")}

Respond in JSON format:
{
  "summary": "...",
  "sentiment": "positive|mixed|negative"
}
`;

  try {
    const res = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const output = res.data.choices[0]?.message?.content || "";

    // Parse JSON response from Groq
    let result = { summary: "Unable to generate sentiment", sentiment: "mixed" };
    try {
      result = JSON.parse(output);
    } catch (err) {
      console.warn("Failed to parse Groq output:", output);
    }

    return result;
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    return { summary: "Error fetching sentiment", sentiment: "mixed" };
  }
}