import React from 'react';
import { Brain, Zap, Target } from 'lucide-react';

const ProcessingAnimation = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <Brain className="h-8 w-8 text-blue-600 animate-bounce" />
            </div>
          </div>
          
          {/* Orbiting icons */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900">AI Analysis in Progress</h3>
          <p className="text-gray-600">Processing ultrasound image with neural networks...</p>
        </div>

        {/* Progress Steps */}
        <div className="space-y-3 max-w-md mx-auto">
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Image preprocessing completed</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Analyzing anatomical features...</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <span className="text-gray-400">Generating trimester classification...</span>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
        </div>

        <p className="text-sm text-gray-500">
          Processing with EfficientNet-B3 architecture for optimal speed and accuracy
        </p>
      </div>
    </div>
  );
};

export default ProcessingAnimation;