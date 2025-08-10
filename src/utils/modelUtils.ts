// Model utility functions for PregnancyTrimesterNet
import type { AnalysisResult } from '../types/analysis';
import modelConfig from '../data/dataset/metadata/model_config.json';

// Optimized model configuration
export const MODEL_CONFIG = {
  name: modelConfig.model_name,
  version: modelConfig.version,
  architecture: 'EfficientNet-B3',
  inputSize: [512, 512, 3],
  batchSize: 16,
  inferenceTime: parseFloat(String(modelConfig.deployment.inference_time).replace('s','')), // seconds
  memoryUsage: 384, // MB
  accuracy: Math.round(modelConfig.performance_metrics.overall_accuracy * 1000) / 10, // e.g., 94.7
  precision: {
    first: Math.round(modelConfig.performance_metrics.precision.first_trimester * 1000) / 10,
    second: Math.round(modelConfig.performance_metrics.precision.second_trimester * 1000) / 10,
    third: Math.round(modelConfig.performance_metrics.precision.third_trimester * 1000) / 10
  }
};

// Simple deterministic hash for strings
const hashString = (value: string): number => {
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) + hash) + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

// Enhanced mock analysis with realistic medical data
export const generateAnalysisResult = (imageKey: string): AnalysisResult => {
  const scenarios = [
    {
      trimester: 'First' as const,
      confidence: Math.round(modelConfig.performance_metrics.precision.first_trimester * 1000) / 10,
      gestationalAge: '8-10 weeks',
      keyFeatures: [
        'Crown-rump length: 18-25mm',
        'Fetal pole clearly visible',
        'Yolk sac present (4-5mm)',
        'Gestational sac: 25-30mm',
        'Early limb buds developing',
        'Neural tube closure complete'
      ],
      recommendations: [
        'Continue folic acid supplementation',
        'Schedule nuchal translucency scan at 11-13 weeks',
        'Monitor for first trimester bleeding',
        'Confirm viability with follow-up scan',
        'Discuss genetic screening options'
      ]
    },
    {
      trimester: 'Second' as const,
      confidence: Math.round(modelConfig.performance_metrics.precision.second_trimester * 1000) / 10,
      gestationalAge: '20-22 weeks',
      keyFeatures: [
        'Biparietal diameter: 45-52mm',
        'Head circumference: 165-185mm',
        'Abdominal circumference: 140-165mm',
        'Femur length: 32-38mm',
        'Four-chamber heart view normal',
        'Spine alignment normal',
        'Placental position assessed'
      ],
      recommendations: [
        'Detailed anatomy scan completed',
        'Consider glucose tolerance test',
        'Monitor fetal growth parameters',
        'Assess cervical length if indicated',
        'Schedule follow-up growth scan at 28-32 weeks'
      ]
    },
    {
      trimester: 'Third' as const,
      confidence: Math.round(modelConfig.performance_metrics.precision.third_trimester * 1000) / 10,
      gestationalAge: '32-34 weeks',
      keyFeatures: [
        'Biparietal diameter: 78-85mm',
        'Head circumference: 285-310mm',
        'Abdominal circumference: 260-290mm',
        'Femur length: 58-65mm',
        'Estimated fetal weight: 1800-2200g',
        'Amniotic fluid volume normal',
        'Fetal presentation: vertex'
      ],
      recommendations: [
        'Monitor fetal growth velocity',
        'Assess fetal well-being with NST/BPP',
        'Plan delivery timing and mode',
        'Consider steroid administration if preterm risk',
        'Schedule weekly monitoring if high-risk'
      ]
    }
  ];

  // Deterministic selection and slight variation based on imageKey
  const key = imageKey || 'default';
  const hash = hashString(key);
  const baseScenario = scenarios[hash % scenarios.length];

  // ±0.5% variation, deterministic by hash
  const variationSeed = ((hash >> 3) % 1000) / 1000; // [0,1)
  const confidenceVariation = (variationSeed - 0.5) * 1.0; // [-0.5, 0.5]

  return {
    ...baseScenario,
    confidence: Math.max(85, Math.min(98, parseFloat((baseScenario.confidence + confidenceVariation).toFixed(1))))
  };
};

// Optimized image preprocessing simulation
export const preprocessImage = async (input: File | string): Promise<boolean> => {
  // Simulate quick validation and preprocessing
  const simulatedWork = 150; // ms
  const hasContent = typeof input === 'string' ? input.length > 0 : input.size >= 0;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!hasContent) {
        reject(new Error('Invalid image input'));
        return;
      }
      resolve(true);
    }, simulatedWork);
  });
};

// Model performance metrics
export const getModelMetrics = () => ({
  accuracy: Math.round(modelConfig.performance_metrics.overall_accuracy * 1000) / 10,
  precision: {
    first_trimester: Math.round(modelConfig.performance_metrics.precision.first_trimester * 1000) / 10,
    second_trimester: Math.round(modelConfig.performance_metrics.precision.second_trimester * 1000) / 10,
    third_trimester: Math.round(modelConfig.performance_metrics.precision.third_trimester * 1000) / 10
  },
  recall: {
    first_trimester: Math.round(modelConfig.performance_metrics.recall.first_trimester * 1000) / 10,
    second_trimester: Math.round(modelConfig.performance_metrics.recall.second_trimester * 1000) / 10,
    third_trimester: Math.round(modelConfig.performance_metrics.recall.third_trimester * 1000) / 10
  },
  f1Score: Math.round(modelConfig.performance_metrics.f1_score * 1000) / 10,
  aucRoc: modelConfig.performance_metrics.auc_roc,
  processingTime: modelConfig.deployment.inference_time,
  modelSize: modelConfig.deployment.model_size
});

// Dataset statistics
export const getDatasetStats = () => ({
  totalImages: 15420,
  trainingImages: 10794,
  validationImages: 3084,
  testImages: 1542,
  classDistribution: {
    first_trimester: 5240,
    second_trimester: 5380,
    third_trimester: 4800
  }
});