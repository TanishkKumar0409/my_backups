import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Play, Square } from 'lucide-react';

interface StatusIndicatorProps {
  isModelLoaded: boolean;
  isVideoReady: boolean;
  currentFace: any;
  error: string | null;
  isAnalyzing: boolean;
  onStartAnalysis: () => void;
  onStopAnalysis: () => void;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  isModelLoaded,
  isVideoReady,
  currentFace,
  error,
  isAnalyzing,
  onStartAnalysis,
  onStopAnalysis
}) => {
  const canStartAnalysis = isModelLoaded && isVideoReady && !error;

  return (
    <div>
      {!isAnalyzing ? (
        <button
          onClick={onStartAnalysis}
          disabled={!canStartAnalysis}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium ${
            canStartAnalysis
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Play className="h-4 w-4" />
          Start Analysis
        </button>
      ) : (
        <button
          onClick={onStopAnalysis}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white"
        >
          <Square className="h-4 w-4" />
          Stop Analysis
        </button>
      )}

      {error && (
        <div className="mt-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusIndicator;