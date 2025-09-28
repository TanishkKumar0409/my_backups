const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = process.env.GEMINI_API_URL;

export async function getGeminiResponse(history, systemInstruction = "") {
  if (!GEMINI_API_KEY || !GEMINI_API_URL) {
    throw new Error("Missing Gemini API key or URL");
  }

  const contents = Array.isArray(history)
    ? history
    : [{ role: "user", parts: [{ text: history }] }];

  const body = { contents };

  if (systemInstruction) {
    body.system_instruction = {
      role: "system",
      parts: [{ text: systemInstruction }],
    };
  }

  const response = await fetch(`${GEMINI_API_URL}${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    console.log(data.error);
    throw new Error(data.error?.message || "Gemini API error");
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  return text;
}
