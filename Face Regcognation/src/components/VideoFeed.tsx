import React from 'react';
import { Camera, AlertCircle } from 'lucide-react';

interface VideoFeedProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  isVideoReady: boolean;
  error: string | null;
  currentFace: any;
}

const VideoFeed: React.FC<VideoFeedProps> = ({
  videoRef,
  canvasRef,
  isVideoReady,
  error,
  currentFace
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Camera Feed</h3>
      
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        {error ? (
          <div className="flex items-center justify-center h-64 text-red-600">
            <div className="text-center">
              <AlertCircle className="mx-auto mb-2 h-8 w-8" />
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-64 object-cover"
              style={{ transform: 'scaleX(-1)' }}
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {currentFace && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                Face Detected
              </div>
            )}
            
            {!isVideoReady && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center text-gray-600">
                  <Camera className="mx-auto mb-2 h-8 w-8" />
                  <p>Loading camera...</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Current Expression */}
      {currentFace && (
        <div className="mt-3 p-3 bg-gray-50 rounded">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Current Expression:</h4>
          <div className="text-sm text-gray-600">
            {Object.entries(currentFace.expressions)
              .sort(([,a], [,b]) => (b as number) - (a as number))
              .slice(0, 3)
              .map(([emotion, confidence]) => (
                <div key={emotion} className="flex justify-between">
                  <span className="capitalize">{emotion}</span>
                  <span>{((confidence as number) * 100).toFixed(0)}%</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFeed;