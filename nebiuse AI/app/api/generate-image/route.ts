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
    const { prompt } = body;
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    if (!process.env.NEBIUS_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }

    const response = await client.images.generate({
      model: "black-forest-labs/flux-dev",
      response_format: "url",
      prompt: prompt,
    });

    const imageUrl = response?.data?.[0]?.url;

    return NextResponse.json({
      success: true,
      imageUrl: imageUrl,
      prompt: prompt,
    });
  } catch (error: any) {
    console.error("Error generating image:", error);

    let errorMessage = "Failed to generate image";

    if (error?.error?.code === "content_policy_violation") {
      errorMessage =
        "Your prompt violates our content policy. Please try a different prompt.";
    } else if (error?.error?.code === "rate_limit_exceeded") {
      errorMessage = "Rate limit exceeded. Please try again later.";
    } else if (error?.error?.code === "insufficient_quota") {
      errorMessage =
        "Insufficient API quota. Please check your OpenAI account.";
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
