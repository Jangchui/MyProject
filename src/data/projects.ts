export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  type: string;
  category: 'civil-design' | 'structural-analysis' | 'cad-drafting' | 'revit-bim' | 'ai-projects';
  image?: string;
  fileLink?: string;
  videoLinks?: { label: string; url: string }[];
}

export const projectsData: Project[] = [
  {
    id: 'project-ai-traffic',
    title: 'Traffic Vehicle Counting',
    description: 'Advanced vehicle detection and counting system using YOLOv8, trained for real-time traffic monitoring and analysis across multiple video sources.',
    tools: ['YOLOv8', 'Python', 'OpenCV'],
    type: 'AI Training',
    category: 'ai-projects',
    fileLink: '/assets/ai-training/Traffic Vehicle Counting/Model/best.pt',
    videoLinks: [
      { label: 'Video 1', url: 'https://drive.google.com/file/d/1fdzPjHsaXD9W16qy0SHVr9CJZHD_ZAh5/view?usp=drivesdk' },
      { label: 'Video 1 Output', url: 'https://drive.google.com/file/d/1VHEnLP7KV0ygEgLoPvCXUvyR5I6oOhuS/view?usp=drivesdk' },
      { label: 'Video 2', url: 'https://drive.google.com/file/d/1-O3YLunPRLRT7Nv2HTuRAvl7GqlWr11R/view?usp=drivesdk' },
      { label: 'Video 2 Output', url: 'https://drive.google.com/file/d/1X4lVCbmxJKCeEVoZxjKnS-zYndUNKJ5b/view?usp=drivesdk' },
      { label: 'Video 3', url: 'https://drive.google.com/file/d/1ma7qkcFavo23wf1wyfpQiTHinvUdRSZ3/view?usp=drivesdk' },
      { label: 'Video 3 Output', url: 'https://drive.google.com/file/d/1794c5o7yK6jhNfSnQVQWmLXYpAZ25UbL/view?usp=drivesdk' },
      { label: 'Video 4', url: 'https://drive.google.com/file/d/1aAh871Ro1jpa-vG2JjtV1t4M9WQZsqEK/view?usp=drivesdk' },
      { label: 'Video 4 Output', url: 'https://drive.google.com/file/d/15-qVZkgsH-fzBDR1wyNWtwOhVjkYrQ-z/view?usp=drivesdk' }
    ]
  },
  {
    id: 'project-revit-1',
    title: 'First Revit Project - Architectural Design',
    description: 'A comprehensive Revit project focusing on architectural design and structural integration, showcasing the complete BIM modeling workflow.',
    tools: ['Revit'],
    type: 'Revit/BIM',
    category: 'revit-bim',
    image: '/assets/projects/First Revit Project/render.jpg',
    // Hosted on Google Drive to avoid GitHub 100MB limit
    fileLink: 'https://drive.google.com/file/d/your-google-drive-id-here/view?usp=sharing',
    videoLinks: [
      { label: 'Architecture Walkthrough', url: 'https://drive.google.com/file/d/1fdzPjHsaXD9W16qy0SHVr9CJZHD_ZAh5/view?usp=drivesdk' },
      { label: 'Structural Model Preview', url: 'https://drive.google.com/file/d/1VHEnLP7KV0ygEgLoPvCXUvyR5I6oOhuS/view?usp=drivesdk' }
    ]
  }
];
