export interface FaceDetection {
  id: string;
  timestamp: number;
  box: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  expressions: {
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    neutral: number;
  };
  landmarks: any;
  confidence: number;
}

export interface EmotionState {
  dominant: string;
  confidence: number;
  changed: boolean;
  lastUpdate: number;
  stability?: number; // How stable the emotion is across frames (0-1)
}

export interface GeminiResponse {
  text: string;
  timestamp: number;
  type: 'greeting' | 'emotion' | 'action' | 'error';
}

export interface FrameData {
  timestamp: number;
  expressions: any;
  confidence: number;
  faceDetected: boolean;
  imageData?: string; // Base64 image data
  landmarks?: any;
  faceBox?: any;
}

export interface AnalysisData {
  validFrames: number;
  totalFrames: number;
  dominantEmotion: string;
  stability: number;
  averageConfidence: number;
  emotionTrends: { [key: string]: number[] };
  facialFeatures: {
    eyeOpenness: number;
    mouthOpenness: number;
    eyebrowPosition: number;
    jawTension: number;
  };
}