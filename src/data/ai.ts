export interface AIItem {
  id: string;
  name: string;
  purpose: string;
  dataset: string;
  results: string;
  demoLink?: string;
}

export const aiData: AIItem[] = [
  {
    id: 'model-1',
    name: 'Crack Detection Model',
    purpose: 'Automating the detection of structural cracks in concrete surfaces using computer vision.',
    dataset: 'SDNET2018 Concrete Crack Dataset',
    results: 'Achieved 94% accuracy on validation set.',
    demoLink: '#'
  },
  {
    id: 'model-2',
    name: 'Traffic Flow Predictor',
    purpose: 'Predicting peak hour traffic flow in urban intersections for better signal timing.',
    dataset: 'Local Municipal Traffic Data',
    results: 'Reduced RMSE by 15% compared to traditional models.',
    demoLink: '#'
  },
  {
    id: 'model-3',
    name: 'Soil Classification CNN',
    purpose: 'Classifying soil types from field images to assist in geotechnical assessments.',
    dataset: 'Custom Geotechnical Image Library',
    results: 'Precision: 0.92, Recall: 0.89.',
    demoLink: '#'
  }
];
