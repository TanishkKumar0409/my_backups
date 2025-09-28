import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import connectDB from "@/lib/mongodb";
import Chat from "@/models/Chat";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { convertFileToText } from "@/lib/fileConverter";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

const SUPPORTED_MIME_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/webp",
  "application/pdf",
  "text/plain",
  "text/csv",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

// Function to check if file type is supported by Gemini
function isFileTypeSupported(mimeType: string, fileName: string): boolean {
  // Check if it's a convertible file type
  if (
    mimeType.includes("spreadsheet") ||
    mimeType.includes("xlsx") ||
    fileName.toLowerCase().endsWith(".xlsx")
  ) {
    return true;
  }
  if (
    mimeType.includes("wordprocessing") ||
    mimeType.includes("docx") ||
    fileName.toLowerCase().endsWith(".docx")
  ) {
    return true;
  }
  return SUPPORTED_MIME_TYPES.includes(mimeType);
}

// Function to get friendly error message for unsupported files
function getUnsupportedFileMessage(fileName: string, mimeType: string): string {
  return `I'm sorry, I can't analyze files of type "${mimeType}" like "${fileName}". I can work with images (PNG, JPEG, GIF, WebP), PDFs, and text files. Please try uploading a supported file format.`;
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    let fileName: string | undefined;
    let fileType: string | undefined;
    let filePath: string | undefined;
    let fileBuffer: Buffer | undefined;

    // Handle file upload if present
    if (file) {
      fileName = file.name;
      fileType = file.type;

      // Create uploads directory if it doesn't exist
      const uploadsDir = path.join(process.cwd(), "uploads");
      if (!existsSync(uploadsDir)) {
        await mkdir(uploadsDir, { recursive: true });
      }

      // Generate unique filename
      const timestamp = Date.now();
      const uniqueFileName = `${timestamp}_${fileName}`;
      filePath = path.join(uploadsDir, uniqueFileName);

      // Save file to server
      const bytes = await file.arrayBuffer();
      fileBuffer = Buffer.from(bytes);
      await writeFile(filePath, fileBuffer);
    }

    // Prepare Gemini API request
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = message;
    let parts: any[] = [{ text: prompt }];

    // Add file to request if present
    if (file && fileBuffer) {
      // Check if file type is supported or convertible
      if (!isFileTypeSupported(fileType!, fileName!)) {
        const errorMessage = getUnsupportedFileMessage(fileName!, fileType!);

        // Save error conversation to database
        const errorChat = new Chat({
          userMessage: message,
          aiResponse: errorMessage,
          fileName,
          fileType,
          filePath,
        });
        await errorChat.save();

        return NextResponse.json({
          response: errorMessage,
          error: false, // Not a system error, just unsupported file type
        });
      }

      let finalBuffer = fileBuffer;
      let finalMimeType = fileType!;
      let conversionNote = "";

      // Convert DOCX and XLSX files to text/CSV
      if (
        fileType!.includes("spreadsheet") ||
        fileType!.includes("xlsx") ||
        fileName!.toLowerCase().endsWith(".xlsx")
      ) {
        const conversionResult = await convertFileToText(
          fileBuffer,
          fileType!,
          fileName!
        );
        if (conversionResult.success && conversionResult.csvContent) {
          finalBuffer = Buffer.from(conversionResult.csvContent, "utf-8");
          finalMimeType = "text/csv";
          conversionNote = " (converted from Excel to CSV)";
        } else {
          const errorMessage = `I couldn't convert your Excel file "${fileName}" to CSV format. ${
            conversionResult.error ||
            "Please try a different file or convert it manually to CSV."
          }`;

          const errorChat = new Chat({
            userMessage: message,
            aiResponse: errorMessage,
            fileName,
            fileType,
            filePath,
          });
          await errorChat.save();

          return NextResponse.json({
            response: errorMessage,
            error: false,
          });
        }
      } else if (
        fileType!.includes("wordprocessing") ||
        fileType!.includes("docx") ||
        fileName!.toLowerCase().endsWith(".docx")
      ) {
        const conversionResult = await convertFileToText(
          fileBuffer,
          fileType!,
          fileName!
        );
        if (conversionResult.success && conversionResult.csvContent) {
          finalBuffer = Buffer.from(conversionResult.csvContent, "utf-8");
          finalMimeType = "text/plain";
          conversionNote = " (converted from Word document to text)";
        } else {
          const errorMessage = `I couldn't convert your Word document "${fileName}" to text format. ${
            conversionResult.error ||
            "Please try a different file or copy the text manually."
          }`;

          const errorChat = new Chat({
            userMessage: message,
            aiResponse: errorMessage,
            fileName,
            fileType,
            filePath,
          });
          await errorChat.save();

          return NextResponse.json({
            response: errorMessage,
            error: false,
          });
        }
      }

      try {
        // Convert final buffer to base64
        const base64Data = finalBuffer.toString("base64");

        parts.push({
          inlineData: {
            data: base64Data,
            mimeType: finalMimeType,
          },
        });

        prompt += ` (File attached: ${fileName}${conversionNote})`;
      } catch (fileError) {
        console.error("Error processing file for Gemini:", fileError);

        const errorMessage = `There was an error processing your file "${fileName}". Please try a different file format.`;

        // Save error conversation to database
        const errorChat = new Chat({
          userMessage: message,
          aiResponse: errorMessage,
          fileName,
          fileType,
          filePath,
        });
        await errorChat.save();

        return NextResponse.json({
          response: errorMessage,
          error: false,
        });
      }
    }

    try {
      // Generate response from Gemini
      const result = await model.generateContent(parts);
      const response = await result.response;
      const aiResponse = response.text();

      // Save to database
      const chat = new Chat({
        userMessage: message,
        aiResponse,
        fileName,
        fileType,
        filePath,
      });
      await chat.save();

      return NextResponse.json({
        response: aiResponse,
      });
    } catch (geminiError: any) {
      console.error("Gemini API Error:", geminiError);

      let errorMessage =
        "I encountered an error while processing your request.";

      // Handle specific Gemini errors
      if (geminiError.message && geminiError.message.includes("mime_type")) {
        errorMessage = `There was an issue with the file format of "${fileName}". Please try a different file.`;
      } else if (geminiError.message && geminiError.message.includes("file")) {
        errorMessage = `There was an issue processing your file "${fileName}". Please try a different file or format.`;
      }

      // Save error conversation to database
      const errorChat = new Chat({
        userMessage: message,
        aiResponse: errorMessage,
        fileName,
        fileType,
        filePath,
      });
      await errorChat.save();

      return NextResponse.json({
        response: errorMessage,
        error: false,
      });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
