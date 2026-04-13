export interface AIItem {
  id: string;
  name: string;
  purpose: string;
  dataset: string;
  results: string;
  demoLink?: string;
  modelLink?: string;
  videoLinks?: { label: string; url: string }[];
}

export const aiData: AIItem[] = [
  {
    id: 'model-traffic',
    name: 'Traffic Vehicle Counting',
    purpose: 'Real-time vehicle detection and counting for traffic flow monitoring and density analysis.',
    dataset: 'Custom Traffic Video Dataset',
    results: 'High precision counting with YOLOv8 optimization.',
    modelLink: '/assets/ai-training/Traffic Vehicle Counting/Model/best.pt',
    videoLinks: [
      { label: 'Source Video', url: 'https://drive.google.com/file/d/1fdzPjHsaXD9W16qy0SHVr9CJZHD_ZAh5/view?usp=drivesdk' },
      { label: 'Output Results', url: 'https://drive.google.com/file/d/1VHEnLP7KV0ygEgLoPvCXUvyR5I6oOhuS/view?usp=drivesdk' }
    ]
  }
];
