import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
export const dynamic = "froce-dynamic";

const client = new OpenAI({
  baseURL: "https://api.studio.nebius.com/v1/",
  apiKey: process.env.NEBIUS_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history = [] } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.NEBIUS_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }

    // Convert history to OpenAI format
    const messages = [
      {
        role: "system" as const,
        content:
          "You are a helpful, knowledgeable, and friendly AI assistant. Provide clear, accurate, and engaging responses to help users with their questions and tasks.",
      },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      {
        role: "user" as const,
        content: message,
      },
    ];

    const response = await client.chat.completions.create({
      model: "deepseek-ai/DeepSeek-R1-0528",
      max_tokens: 8192,
      temperature: 0.6,
      top_p: 0.95,
      messages: messages,
    });

    const assistantResponse = response.choices[0]?.message?.content;

    if (!assistantResponse) {
      return NextResponse.json(
        { error: "No response generated" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      response: assistantResponse,
    });
  } catch (error: any) {
    console.error("Error in chat API:", error);

    let errorMessage = "Failed to get response";

    if (error?.error?.code === "rate_limit_exceeded") {
      errorMessage = "Rate limit exceeded. Please try again later.";
    } else if (error?.error?.code === "insufficient_quota") {
      errorMessage =
        "Insufficient API quota. Please check your OpenAI account.";
    } else if (error?.error?.code === "invalid_api_key") {
      errorMessage = "Invalid API key. Please check your OpenAI configuration.";
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
