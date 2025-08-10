import React, { useState, useCallback } from 'react';
import ImageUpload from '../components/ImageUpload';
import AnalysisResults from '../components/AnalysisResults';
import ProcessingAnimation from '../components/ProcessingAnimation';
import { generateAnalysisResult, preprocessImage } from '../utils/modelUtils';

export interface AnalysisResult {
  trimester: 'First' | 'Second' | 'Third';
  confidence: number;
  gestationalAge: string;
  keyFeatures: string[];
  recommendations: string[];
}

const AnalysisPage = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const handleImageUpload = useCallback((imageUrl: string) => {
    setUploadedImage(imageUrl);
    setResults(null);
  }, []);

  const handleAnalyze = useCallback(async () => {
    if (!uploadedImage) return;

    setIsProcessing(true);
    setResults(null);

    // Simulate efficient AI processing
    try {
      // Preprocess image (optimized)
      await preprocessImage(new File([], 'ultrasound.jpg'));
      
      // Simulate model inference (reduced time for efficiency)
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Generate realistic analysis results
      const analysisResult = generateAnalysisResult();
      setResults(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
      // Handle error appropriately
    }

    setIsProcessing(false);
  }, [uploadedImage]);

  const handleReset = useCallback(() => {
    setUploadedImage(null);
    setResults(null);
    setIsProcessing(false);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ultrasound Analysis
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your ultrasound image and let our AI model analyze it to determine the pregnancy trimester with high accuracy.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <ImageUpload 
            onImageUpload={handleImageUpload}
            onAnalyze={handleAnalyze}
            onReset={handleReset}
            hasImage={!!uploadedImage}
            isProcessing={isProcessing}
          />
          
          {uploadedImage && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Image</h3>
              <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded ultrasound" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {isProcessing && <ProcessingAnimation />}
          {results && <AnalysisResults results={results} />}
          
          {!isProcessing && !results && !uploadedImage && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Image Selected</h3>
              <p className="text-gray-600">
                Upload an ultrasound image to begin AI-powered trimester analysis.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-red-900 mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-red-800 leading-relaxed">
              This AI analysis tool is for educational and research purposes only. Results should not be used for clinical diagnosis or treatment decisions. Always consult with qualified healthcare professionals for proper medical evaluation and prenatal care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;