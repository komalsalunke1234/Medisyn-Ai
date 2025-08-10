import React from 'react';
import { CheckCircle, Clock, User, AlertTriangle } from 'lucide-react';
import type { AnalysisResult } from '../pages/AnalysisPage';

interface AnalysisResultsProps {
  results: AnalysisResult;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results }) => {
  const getTrimesterColor = (trimester: string) => {
    switch (trimester) {
      case 'First':
        return 'from-blue-600 to-blue-700';
      case 'Second':
        return 'from-green-600 to-green-700';
      case 'Third':
        return 'from-purple-600 to-purple-700';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600 bg-green-50 border-green-200';
    if (confidence >= 75) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
      </div>

      {/* Main Result */}
      <div className={`bg-gradient-to-r ${getTrimesterColor(results.trimester)} rounded-2xl p-6 text-white`}>
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">{results.trimester} Trimester</h3>
          <p className="text-blue-100 text-lg">Estimated Gestational Age: {results.gestationalAge}</p>
        </div>
      </div>

      {/* Confidence Score */}
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-xl border-2 ${getConfidenceColor(results.confidence)}`}>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">{results.confidence}%</div>
            <div className="text-sm font-medium">Confidence Score</div>
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl text-blue-600">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">AI</div>
            <div className="text-sm font-medium">Analysis Method</div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <User className="h-5 w-5 mr-2 text-blue-600" />
          Key Features Identified
        </h4>
        <div className="grid gap-2">
          {results.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <Clock className="h-5 w-5 mr-2 text-green-600" />
          Clinical Recommendations
        </h4>
        <div className="space-y-2">
          {results.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-green-800">{recommendation}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-amber-800 font-medium mb-1">Clinical Validation Required</p>
            <p className="text-xs text-amber-700">
              This AI analysis is for reference only. Always confirm with qualified healthcare professionals and clinical examination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;