import React from 'react';
import { Brain, Target, Users, Award, Shield, Zap } from 'lucide-react';
import { getModelMetrics, getDatasetStats } from '../utils/modelUtils';

const AboutPage = () => {
  const modelMetrics = getModelMetrics();
  const datasetStats = getDatasetStats();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          About PregnancyTrimesterNet
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Advanced artificial intelligence for ultrasound image analysis, designed to support healthcare professionals in pregnancy monitoring and trimester classification.
        </p>
      </div>

      {/* Technology Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Overview</h2>
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Deep Learning Architecture</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                PregnancyTrimesterNet utilizes a sophisticated convolutional neural network (CNN) architecture specifically designed for medical image analysis. Our model processes ultrasound images through multiple layers of feature extraction to identify key pregnancy markers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Convolutional Neural Network (CNN) based</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Transfer learning from medical datasets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Real-time image processing</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{modelMetrics.accuracy}%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{modelMetrics.processingTime}</div>
                      <div className="text-sm text-gray-600">Processing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Instant processing of ultrasound images with results delivered in {modelMetrics.processingTime}, enabling efficient workflow integration.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">High Precision</h3>
            <p className="text-gray-600 leading-relaxed">
              Achieves {modelMetrics.accuracy}% accuracy in trimester classification through extensive training on {(datasetStats.totalImages / 1000).toFixed(1)}K diverse ultrasound images.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy First</h3>
            <p className="text-gray-600 leading-relaxed">
              All image processing occurs locally with no data storage, ensuring complete patient privacy and HIPAA compliance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Provides detailed analysis including gestational age estimates, key anatomical features, and clinical recommendations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Designed as a decision-support tool to assist healthcare professionals in pregnancy monitoring and assessment.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Validated Results</h3>
            <p className="text-gray-600 leading-relaxed">
              Extensively tested and validated against clinical standards to ensure reliable performance in healthcare settings.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Image Upload</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Upload ultrasound images in standard DICOM or common image formats
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">AI Processing</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep neural networks analyze anatomical features and measurements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Classification</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trimester determination with confidence scores and detailed analysis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Results</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive report with clinical insights and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-3">Important Medical Disclaimer</h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              PregnancyTrimesterNet is designed as a research and educational tool to support healthcare professionals. It should never replace clinical judgment, professional medical diagnosis, or established prenatal care protocols.
            </p>
            <div className="space-y-2 text-sm text-amber-800">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Always consult qualified healthcare providers for medical decisions</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Results are supplementary to, not replacements for, clinical assessment</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>This tool is for research and educational purposes only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;