import React, { useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import { useFaceDetection } from './hooks/useFaceDetection';
import { useGemini } from './hooks/useGemini';
import VideoFeed from './components/VideoFeed';
import GeminiChat from './components/GeminiChat';
import StatusIndicator from './components/StatusIndicator';

function App() {
  const {
    videoRef,
    canvasRef,
    isModelLoaded,
    isVideoReady,
    currentFace,
    emotionState,
    error,
    isAnalyzing,
    loadModels,
    initializeVideo,
    startAnalysis,
    stopAnalysis
  } = useFaceDetection();

  const { responses, isLoading, sendToGemini } = useGemini();
  const hasGreeted = useRef(false);
  const lastEmotionSent = useRef<string | null>(null);
  const lastResponseCount = useRef(0);

  // Initialize on mount
  useEffect(() => {
    loadModels();
    initializeVideo();
  }, [loadModels, initializeVideo]);

  // Auto-stop analysis after AI response
  useEffect(() => {
    if (responses.length > lastResponseCount.current && isAnalyzing) {
      stopAnalysis();
      hasGreeted.current = false;
      lastEmotionSent.current = null;
    }
    lastResponseCount.current = responses.length;
  }, [responses.length, isAnalyzing, stopAnalysis]);

  // Handle face detection events
  useEffect(() => {
    if (!currentFace || !isAnalyzing) {
      hasGreeted.current = false;
      lastEmotionSent.current = null;
      return;
    }

    if (!hasGreeted.current) {
      hasGreeted.current = true;
      sendToGemini(currentFace, emotionState, 'greeting');
      return;
    }

    if (emotionState?.changed && emotionState.dominant !== lastEmotionSent.current) {
      lastEmotionSent.current = emotionState.dominant;
      sendToGemini(currentFace, emotionState, 'emotion');
    }
  }, [currentFace, emotionState, sendToGemini, isAnalyzing]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column - Video */}
          <div className="space-y-4">
            <VideoFeed
              videoRef={videoRef}
              canvasRef={canvasRef}
              isVideoReady={isVideoReady}
              error={error}
              currentFace={currentFace}
            />
            
            <StatusIndicator
              isModelLoaded={isModelLoaded}
              isVideoReady={isVideoReady}
              currentFace={currentFace}
              error={error}
              isAnalyzing={isAnalyzing}
              onStartAnalysis={startAnalysis}
              onStopAnalysis={stopAnalysis}
            />
          </div>

          {/* Right Column - AI Chat */}
          <div>
            <GeminiChat
              responses={responses}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;