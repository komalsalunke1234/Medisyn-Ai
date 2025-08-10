import React, { useCallback, useState } from 'react';
import { Upload, X, Play, RotateCcw } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  onAnalyze: () => void;
  onReset: () => void;
  hasImage: boolean;
  isProcessing: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  onAnalyze,
  onReset,
  hasImage,
  isProcessing
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageUpload(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileChange(files[0]);
    }
  }, [handleFileChange]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  }, [handleFileChange]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Ultrasound Image</h2>
      
      {!hasImage ? (
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            isDragOver
              ? 'border-blue-500 bg-blue-50 scale-105'
              : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
              isDragOver ? 'bg-blue-500' : 'bg-gray-100 group-hover:bg-blue-100'
            }`}>
              <Upload className={`h-8 w-8 ${
                isDragOver ? 'text-white' : 'text-gray-400'
              }`} />
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900 mb-2">
                Drop your ultrasound image here
              </p>
              <p className="text-gray-500 mb-4">
                Supports JPEG, PNG, DICOM formats up to 10MB
              </p>
              
              <label className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium cursor-pointer hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
                <Upload className="h-5 w-5 mr-2" />
                Choose File
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-green-900">Image uploaded successfully</p>
                <p className="text-sm text-green-700">Ready for AI analysis</p>
              </div>
            </div>
            <button
              onClick={onReset}
              className="p-2 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition-colors"
              title="Remove image"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onAnalyze}
              disabled={isProcessing}
              className="flex-1 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Play className="h-5 w-5 mr-2" />
                  Start Analysis
                </>
              )}
            </button>
            
            <button
              onClick={onReset}
              className="px-4 py-4 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              title="Reset"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <h4 className="font-medium text-blue-900 mb-2">Upload Guidelines</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Use high-quality ultrasound images for best results</li>
          <li>• Ensure clear visibility of anatomical structures</li>
          <li>• Standard B-mode ultrasound images work best</li>
          <li>• Remove any patient identifiers before upload</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUpload;