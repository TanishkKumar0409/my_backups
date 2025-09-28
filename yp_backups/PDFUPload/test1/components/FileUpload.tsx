'use client';

import React, { useCallback } from 'react';
import { Upload, X, FileText, Image, FileSpreadsheet } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
}

const getFileIcon = (fileType: string) => {
  if (fileType.startsWith('image/')) {
    return <Image className="w-5 h-5" />;
  } else if (fileType === 'application/pdf') {
    return <FileText className="w-5 h-5" />;
  } else if (fileType.includes('sheet') || fileType.includes('csv')) {
    return <FileSpreadsheet className="w-5 h-5" />;
  }
  return <FileText className="w-5 h-5" />;
};

const ACCEPTED_FILE_TYPES = [
  'image/*',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/csv'
];

export default function FileUpload({ onFileSelect, selectedFile }: FileUploadProps) {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileSelect(file);
  }, [onFileSelect]);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0] || null;
    onFileSelect(file);
  }, [onFileSelect]);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const removeFile = useCallback(() => {
    onFileSelect(null);
  }, [onFileSelect]);

  return (
    <div className="space-y-2">
      {selectedFile ? (
        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
          {getFileIcon(selectedFile.type)}
          <span className="text-sm text-gray-700 flex-1 truncate">
            {selectedFile.name}
          </span>
          <button
            onClick={removeFile}
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            Drop a file here or click to upload
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Images, PDF, DOCX, XLSX, CSV supported
          </p>
        </div>
      )}

      <input
        id="file-input"
        type="file"
        className="hidden"
        accept={ACCEPTED_FILE_TYPES.join(',')}
        onChange={handleFileChange}
      />
    </div>
  );
}