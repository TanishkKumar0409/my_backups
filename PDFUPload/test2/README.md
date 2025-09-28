# Next.js Chat App with Google Gemini AI

A modern chat application built with Next.js 14, featuring Google Gemini AI integration, file uploads, and MongoDB storage.

## Features

- **Chat Interface**: Clean, minimal design with user messages on the right and AI responses on the left
- **File Upload Support**: Upload images, PDFs, DOCX, XLSX, and CSV files for AI analysis
- **Google Gemini Integration**: Powered by Google's Gemini AI for intelligent responses
- **MongoDB Storage**: Persistent chat history with metadata
- **Error Handling**: Graceful handling of unsupported file types and API errors
- **Secure File Storage**: Files stored securely on the server in the uploads directory

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/chatapp
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```

### 2. Get Google AI API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy it to your `.env.local` file

### 3. MongoDB Setup

**Option A: Local MongoDB**
- Install MongoDB locally
- The app will connect to `mongodb://localhost:27017/chatapp`

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create a new cluster
- Get your connection string
- Update `MONGODB_URI` in `.env.local`

### 4. Install and Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Text Messages**: Type your message and click "Send"
2. **File Upload**: Click the "📎 File" button to select and upload files
3. **Supported Files**: Images (PNG, JPEG, etc.), PDF, DOCX, XLSX, CSV
4. **File Limits**: Maximum 10MB per file
5. **Chat History**: Previous conversations are automatically loaded

## Error Handling

The app includes comprehensive error handling for:
- Unsupported file types
- Large files (>10MB)
- Gemini API errors
- Network connectivity issues
- MongoDB connection problems

## File Storage

Uploaded files are stored securely in the `/uploads` directory on the server with unique timestamps to prevent conflicts.

## API Routes

- `POST /api/chat` - Send messages and files to Gemini AI
- `GET /api/history` - Fetch the last 20 chat messages

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **AI**: Google Gemini API
- **File Handling**: Multer for file uploads
- **Styling**: Tailwind CSS (minimal black & white theme)