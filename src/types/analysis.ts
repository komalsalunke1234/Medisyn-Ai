export interface AnalysisResult {
  trimester: 'First' | 'Second' | 'Third';
  confidence: number;
  gestationalAge: string;
  keyFeatures: string[];
  recommendations: string[];
}