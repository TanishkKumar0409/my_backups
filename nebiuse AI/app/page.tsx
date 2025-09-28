"use client";

import { useState } from "react";
import Link from "next/link";

interface GeneratedImage {
  url: string;
  prompt: string;
  id: string;
  timestamp: number;
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        const newImage: GeneratedImage = {
          url: data.imageUrl,
          prompt: data.prompt,
          id: Date.now().toString(),
          timestamp: Date.now(),
        };

        setGeneratedImages((prev) => [newImage, ...prev]);
        setPrompt("");
      } else {
        setError(data.error || "Failed to generate image");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">AI Tester</h1>
          <Link href="/chat" className="text-blue-600 hover:underline">
            AI Chat
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Prompt Input */}
          <div className="bg-white shadow rounded-lg p-6 space-y-6">
            <div>
              <label htmlFor="prompt" className="block font-medium text-gray-700 mb-1">
                Prompt
              </label>
              <textarea
                id="prompt"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                placeholder="A serene mountain landscape at sunset with a crystal clear lake reflecting the golden sky..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded-md text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? "Creating..." : "Generate"}
            </button>
          </div>

          {/* Generated Images */}
          <div className="space-y-6">
            {generatedImages.length === 0 && !isGenerating ? (
              <div className="bg-blue-50 border border-blue-200 text-center rounded-lg p-8 shadow">
                <p className="text-gray-700 text-lg font-medium">
                  Enter a prompt to view image here
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Generated Images</h2>

                {isGenerating && (
                  <div className="bg-blue-100 text-center p-6 rounded shadow text-blue-700">
                    Image is generating...
                  </div>
                )}

                {generatedImages.map((image) => (
                  <div key={image.id} className="bg-white shadow rounded overflow-hidden">
                    <div className="aspect-square w-full bg-gray-200">
                      <img
                        src={image.url}
                        alt={image.prompt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
