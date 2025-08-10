import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Target, Users, Award, CheckCircle } from 'lucide-react';
import { getModelMetrics, getDatasetStats } from '../utils/modelUtils';

const HomePage = () => {
  const modelMetrics = getModelMetrics();
  const datasetStats = getDatasetStats();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4 mr-2" />
                  90%+ Accuracy Rate
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI-Powered 
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Pregnancy </span>
                  Trimester Detection
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced ultrasound image analysis powered by deep learning to accurately classify pregnancy trimesters and support healthcare professionals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/analysis"
                  className="group bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Start Analysis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about"
                  className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{modelMetrics.accuracy}%</div>
                  <div className="text-sm text-gray-500 mt-1">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{(datasetStats.totalImages / 1000).toFixed(1)}K</div>
                  <div className="text-sm text-gray-500 mt-1">Training Images</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{modelMetrics.processingTime}</div>
                  <div className="text-sm text-gray-500 mt-1">Processing Time</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl blur-3xl opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">AI Model Preview</p>
                    <p className="text-sm text-gray-500 mt-2">Upload ultrasound image for analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep learning model analyzes ultrasound images with medical-grade precision to determine pregnancy trimesters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Get trimester classification results in seconds with our optimized neural network architecture.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Trained on {(datasetStats.totalImages / 1000).toFixed(1)}K ultrasound images to achieve {modelMetrics.accuracy}% accuracy in trimester detection.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                All image data is processed securely and never stored, ensuring complete patient privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-16 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-amber-900 mb-3">Important Medical Notice</h3>
              <p className="text-amber-800 leading-relaxed">
                PregnancyTrimesterNet is designed as a supplementary tool for healthcare professionals and should not replace professional medical diagnosis. Always consult with qualified healthcare providers for accurate pregnancy assessment and prenatal care. This AI system is for research and educational purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience AI-Powered Analysis?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Upload your ultrasound images and see our advanced AI model in action.
          </p>
          <Link 
            to="/analysis"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Try Analysis Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;