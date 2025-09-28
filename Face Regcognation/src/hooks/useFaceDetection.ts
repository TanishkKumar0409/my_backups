import { useRef, useCallback, useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import type { FaceDetection, EmotionState } from '../types/face-analysis';

interface FrameData {
  timestamp: number;
  expressions: any;
  confidence: number;
  faceDetected: boolean;
  imageData?: string;
  landmarks?: any;
  faceBox?: any;
}

interface AnalysisData {
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
  expressionBalance: { [key: string]: number };
  microExpressionCount: number;
}

export const useFaceDetection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const captureCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [currentFace, setCurrentFace] = useState<FaceDetection | null>(null);
  const [emotionState, setEmotionState] = useState<EmotionState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [frameBuffer, setFrameBuffer] = useState<FrameData[]>([]);
  const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const frameBufferRef = useRef<FrameData[]>([]);
  const lastAnalysisTime = useRef<number>(0);
  const BUFFER_SIZE = 15;
  const ANALYSIS_INTERVAL = 3000;
  const MIN_CONFIDENCE_THRESHOLD = 0.5; // Lowered for better detection

  // Enhanced emotion detection with balanced thresholds
  const EMOTION_THRESHOLDS = {
    happy: 0.1,
    sad: 0.08,
    angry: 0.08,
    fearful: 0.08,
    disgusted: 0.08,
    surprised: 0.1,
    neutral: 0.15
  };

  useEffect(() => {
    if (!captureCanvasRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = 320;
      canvas.height = 240;
      captureCanvasRef.current = canvas;
    }
  }, []);

  const captureFrameImage = useCallback((detection?: any): string | undefined => {
    if (!videoRef.current || !captureCanvasRef.current) return undefined;

    const canvas = captureCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    if (detection) {
      const scaleX = canvas.width / videoRef.current.videoWidth;
      const scaleY = canvas.height / videoRef.current.videoHeight;

      // Draw face detection box
      ctx.strokeStyle = detection.detection.score > 0.7 ? '#00ff00' : '#ffff00';
      ctx.lineWidth = 2;
      ctx.strokeRect(
        detection.detection.box.x * scaleX,
        detection.detection.box.y * scaleY,
        detection.detection.box.width * scaleX,
        detection.detection.box.height * scaleY
      );

      // Draw confidence score
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Arial';
      ctx.fillRect(
        detection.detection.box.x * scaleX,
        detection.detection.box.y * scaleY - 20,
        80,
        20
      );
      ctx.fillStyle = '#000000';
      ctx.fillText(
        `${(detection.detection.score * 100).toFixed(0)}%`,
        detection.detection.box.x * scaleX + 5,
        detection.detection.box.y * scaleY - 5
      );

      // Draw landmarks
      if (detection.landmarks) {
        ctx.fillStyle = '#ff0000';
        detection.landmarks.positions.forEach((point: any) => {
          const x = point.x * scaleX;
          const y = point.y * scaleY;
          ctx.fillRect(x - 1, y - 1, 2, 2);
        });
      }

      // Draw dominant emotion
      const dominantEmotion = Object.entries(detection.expressions).reduce((prev, current) =>
        prev[1] > current[1] ? prev : current
      );
      
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(
        detection.detection.box.x * scaleX,
        (detection.detection.box.y + detection.detection.box.height) * scaleY,
        120,
        20
      );
      ctx.fillStyle = '#000000';
      ctx.fillText(
        `${dominantEmotion[0]}: ${(dominantEmotion[1] as number * 100).toFixed(0)}%`,
        detection.detection.box.x * scaleX + 5,
        (detection.detection.box.y + detection.detection.box.height) * scaleY + 15
      );
    }

    return canvas.toDataURL('image/jpeg', 0.8);
  }, []);

  const analyzeFacialFeatures = useCallback((landmarks: any) => {
    if (!landmarks) return {
      eyeOpenness: 0,
      mouthOpenness: 0,
      eyebrowPosition: 0,
      jawTension: 0
    };

    try {
      const leftEye = landmarks.getLeftEye();
      const rightEye = landmarks.getRightEye();
      const mouth = landmarks.getMouth();
      const jaw = landmarks.getJawOutline();

      const leftEyeHeight = Math.abs(leftEye[1].y - leftEye[5].y);
      const rightEyeHeight = Math.abs(rightEye[1].y - rightEye[5].y);
      const eyeOpenness = (leftEyeHeight + rightEyeHeight) / 2;

      const mouthHeight = Math.abs(mouth[3].y - mouth[9].y);
      const mouthWidth = Math.abs(mouth[6].x - mouth[0].x);
      const mouthOpenness = mouthHeight / mouthWidth;

      const leftEyebrowY = leftEye[1].y;
      const rightEyebrowY = rightEye[1].y;
      const eyebrowPosition = (leftEyebrowY + rightEyebrowY) / 2;

      const jawWidth = Math.abs(jaw[16].x - jaw[0].x);
      const faceWidth = Math.abs(jaw[16].x - jaw[0].x);
      const jawTension = jawWidth / faceWidth;

      return {
        eyeOpenness: Math.min(eyeOpenness / 10, 1),
        mouthOpenness: Math.min(mouthOpenness, 1),
        eyebrowPosition: Math.min(eyebrowPosition / 100, 1),
        jawTension: Math.min(jawTension, 1)
      };
    } catch (error) {
      return {
        eyeOpenness: 0,
        mouthOpenness: 0,
        eyebrowPosition: 0,
        jawTension: 0
      };
    }
  }, []);

  const loadModels = useCallback(async () => {
    try {
      setError(null);
      const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
      
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ]);
      
      setIsModelLoaded(true);
    } catch (err) {
      setError('Failed to load face detection models');
      console.error('Model loading error:', err);
    }
  }, []);

  const initializeVideo = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          setIsVideoReady(true);
        };
      }
    } catch (err) {
      setError('Cannot access webcam. Please grant camera permissions.');
      console.error('Video initialization error:', err);
    }
  }, []);

  const addFrameToBuffer = useCallback((frameData: FrameData) => {
    frameBufferRef.current.push(frameData);
    
    if (frameBufferRef.current.length > BUFFER_SIZE) {
      frameBufferRef.current.shift();
    }

    setFrameBuffer([...frameBufferRef.current]);
  }, []);

  // Enhanced emotion analysis with balanced detection
  const analyzeFrameBuffer = useCallback((): { emotionState: EmotionState | null, analysisData: AnalysisData | null } => {
    const frames = frameBufferRef.current;
    if (frames.length < 10) return { emotionState: null, analysisData: null };

    const validFrames = frames.filter(frame => 
      frame.faceDetected && frame.confidence > MIN_CONFIDENCE_THRESHOLD
    );

    if (validFrames.length < 5) return { emotionState: null, analysisData: null };

    // Enhanced emotion processing with balanced thresholds
    const emotionSums: { [key: string]: number } = {};
    const emotionCounts: { [key: string]: number } = {};
    const emotionTrends: { [key: string]: number[] } = {};
    const expressionBalance: { [key: string]: number } = {};

    validFrames.forEach(frame => {
      Object.entries(frame.expressions).forEach(([emotion, confidence]) => {
        const conf = confidence as number;
        const threshold = EMOTION_THRESHOLDS[emotion as keyof typeof EMOTION_THRESHOLDS] || 0.1;
        
        // Apply balanced weighting - boost underrepresented emotions
        let weightedConfidence = conf;
        if (emotion === 'sad' || emotion === 'disgusted' || emotion === 'fearful') {
          weightedConfidence = conf * 1.3; // Boost subtle emotions
        } else if (emotion === 'neutral') {
          weightedConfidence = conf * 0.8; // Reduce neutral dominance
        }

        if (!emotionSums[emotion]) {
          emotionSums[emotion] = 0;
          emotionCounts[emotion] = 0;
          emotionTrends[emotion] = [];
        }
        emotionSums[emotion] += weightedConfidence;
        emotionCounts[emotion]++;
        emotionTrends[emotion].push(weightedConfidence);
      });
    });

    // Calculate balanced averages
    const averageEmotions: { [key: string]: number } = {};
    Object.keys(emotionSums).forEach(emotion => {
      averageEmotions[emotion] = emotionSums[emotion] / emotionCounts[emotion];
      expressionBalance[emotion] = averageEmotions[emotion];
    });

    // Find dominant emotion with enhanced detection
    const dominant = Object.entries(averageEmotions).reduce((prev, current) => {
      const [prevEmotion, prevConf] = prev;
      const [currEmotion, currConf] = current;
      
      // Apply threshold-based selection
      const prevThreshold = EMOTION_THRESHOLDS[prevEmotion as keyof typeof EMOTION_THRESHOLDS] || 0.1;
      const currThreshold = EMOTION_THRESHOLDS[currEmotion as keyof typeof EMOTION_THRESHOLDS] || 0.1;
      
      // Emotion is significant if it exceeds its threshold
      const prevSignificant = prevConf > prevThreshold;
      const currSignificant = currConf > currThreshold;
      
      if (currSignificant && (!prevSignificant || currConf > prevConf)) {
        return current;
      }
      return prev;
    });

    // Count micro-expressions (brief emotion spikes)
    let microExpressionCount = 0;
    Object.entries(emotionTrends).forEach(([emotion, values]) => {
      const spikes = values.filter((val, idx) => {
        if (idx === 0) return false;
        return val > values[idx - 1] * 1.5 && val > 0.15;
      });
      microExpressionCount += spikes.length;
    });

    const recentFramesWithLandmarks = validFrames.filter(f => f.landmarks).slice(-5);
    let avgFacialFeatures = {
      eyeOpenness: 0,
      mouthOpenness: 0,
      eyebrowPosition: 0,
      jawTension: 0
    };

    if (recentFramesWithLandmarks.length > 0) {
      const featuresSum = recentFramesWithLandmarks.reduce((sum, frame) => {
        const features = analyzeFacialFeatures(frame.landmarks);
        return {
          eyeOpenness: sum.eyeOpenness + features.eyeOpenness,
          mouthOpenness: sum.mouthOpenness + features.mouthOpenness,
          eyebrowPosition: sum.eyebrowPosition + features.eyebrowPosition,
          jawTension: sum.jawTension + features.jawTension
        };
      }, avgFacialFeatures);

      avgFacialFeatures = {
        eyeOpenness: featuresSum.eyeOpenness / recentFramesWithLandmarks.length,
        mouthOpenness: featuresSum.mouthOpenness / recentFramesWithLandmarks.length,
        eyebrowPosition: featuresSum.eyebrowPosition / recentFramesWithLandmarks.length,
        jawTension: featuresSum.jawTension / recentFramesWithLandmarks.length
      };
    }

    const now = Date.now();
    const hasSignificantChange = !emotionState || 
      emotionState.dominant !== dominant[0] || 
      Math.abs(emotionState.confidence - dominant[1]) > 0.15 ||
      now - emotionState.lastUpdate > 12000;

    const recentFrames = validFrames.slice(-8);
    const recentDominantEmotions = recentFrames.map(frame => {
      return Object.entries(frame.expressions).reduce((prev, current) => {
        const [prevEmotion, prevConf] = prev;
        const [currEmotion, currConf] = current;
        
        // Apply same balanced logic for recent frames
        let prevWeighted = prevConf as number;
        let currWeighted = currConf as number;
        
        if (prevEmotion === 'sad' || prevEmotion === 'disgusted' || prevEmotion === 'fearful') {
          prevWeighted *= 1.3;
        }
        if (currEmotion === 'sad' || currEmotion === 'disgusted' || currEmotion === 'fearful') {
          currWeighted *= 1.3;
        }
        
        return currWeighted > prevWeighted ? current : prev;
      })[0];
    });

    const dominantCount = recentDominantEmotions.filter(emotion => emotion === dominant[0]).length;
    const stabilityRatio = dominantCount / recentDominantEmotions.length;
    const isStable = stabilityRatio >= 0.5; // Reduced threshold for better detection

    const averageConfidence = validFrames.reduce((sum, frame) => sum + frame.confidence, 0) / validFrames.length;

    const analysisData: AnalysisData = {
      validFrames: validFrames.length,
      totalFrames: frames.length,
      dominantEmotion: dominant[0],
      stability: stabilityRatio,
      averageConfidence,
      emotionTrends,
      facialFeatures: avgFacialFeatures,
      expressionBalance,
      microExpressionCount
    };

    const newEmotionState: EmotionState = {
      dominant: dominant[0],
      confidence: dominant[1],
      changed: hasSignificantChange && isStable,
      lastUpdate: now,
      stability: stabilityRatio
    };

    return { emotionState: newEmotionState, analysisData };
  }, [emotionState, analyzeFacialFeatures]);

  const detectSingleFrame = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !isModelLoaded || !isVideoReady || !isAnalyzing) {
      return;
    }

    try {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const now = Date.now();

      if (detections.length > 0) {
        const detection = detections[0];
        const imageData = captureFrameImage(detection);
        
        addFrameToBuffer({
          timestamp: now,
          expressions: detection.expressions,
          confidence: detection.detection.score,
          faceDetected: true,
          imageData,
          landmarks: detection.landmarks,
          faceBox: detection.detection.box
        });

        const faceData: FaceDetection = {
          id: `face_${now}`,
          timestamp: now,
          box: detection.detection.box,
          expressions: detection.expressions,
          landmarks: detection.landmarks,
          confidence: detection.detection.score
        };

        setCurrentFace(faceData);

        if (now - lastAnalysisTime.current > ANALYSIS_INTERVAL) {
          const { emotionState: newEmotionState, analysisData } = analyzeFrameBuffer();
          
          setCurrentAnalysis(analysisData);
          
          if (newEmotionState && newEmotionState.changed) {
            setEmotionState(newEmotionState);
            lastAnalysisTime.current = now;
          }
        }
      } else {
        const imageData = captureFrameImage();
        
        addFrameToBuffer({
          timestamp: now,
          expressions: {},
          confidence: 0,
          faceDetected: false,
          imageData
        });

        if (currentFace && now - currentFace.timestamp > 5000) {
          setCurrentFace(null);
          setEmotionState(null);
          frameBufferRef.current = [];
          setFrameBuffer([]);
          setCurrentAnalysis(null);
        }
      }
    } catch (err) {
      console.error('Face detection error:', err);
    }
  }, [videoRef, canvasRef, isModelLoaded, isVideoReady, isAnalyzing, currentFace, addFrameToBuffer, analyzeFrameBuffer, captureFrameImage]);

  useEffect(() => {
    if (!isModelLoaded || !isVideoReady || !isAnalyzing) return;

    const interval = setInterval(detectSingleFrame, 200);
    return () => clearInterval(interval);
  }, [detectSingleFrame, isModelLoaded, isVideoReady, isAnalyzing]);

  const startAnalysis = useCallback(() => {
    setIsAnalyzing(true);
    frameBufferRef.current = [];
    setFrameBuffer([]);
    setCurrentAnalysis(null);
    setEmotionState(null);
    lastAnalysisTime.current = 0;
  }, []);

  const stopAnalysis = useCallback(() => {
    setIsAnalyzing(false);
  }, []);

  return {
    videoRef,
    canvasRef,
    isModelLoaded,
    isVideoReady,
    currentFace,
    emotionState,
    error,
    frameBuffer,
    currentAnalysis,
    isAnalyzing,
    loadModels,
    initializeVideo,
    startAnalysis,
    stopAnalysis
  };
};