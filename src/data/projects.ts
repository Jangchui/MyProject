export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  type: string;
  category: 'civil-design' | 'structural-analysis' | 'cad-drafting' | 'revit-bim' | 'ai-projects';
  image?: string;
  fileLink?: string;
}

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'High-Rise Residential Building Design',
    description: 'Complete structural analysis and design of a 15-story residential building using STAAD Pro.',
    tools: ['STAAD Pro', 'AutoCAD', 'Excel'],
    type: 'Structural Analysis',
    category: 'structural-analysis',
    image: '/assets/projects/structural-analysis/high-rise.jpg'
  },
  {
    id: 'project-2',
    title: 'Urban Drainage System Plan',
    description: 'Hydraulic design of an urban drainage system for a local township using HyrCAM.',
    tools: ['HyrCAM', 'AutoCAD'],
    type: 'Civil Design',
    category: 'civil-design',
    image: '/assets/projects/civil-design/drainage.jpg'
  },
  {
    id: 'project-3',
    title: 'BIM Model for Community Center',
    description: 'Developing a detailed 3D BIM model including structural and architectural elements.',
    tools: ['Revit', 'Navisworks'],
    type: 'Revit/BIM',
    category: 'revit-bim',
    image: '/assets/projects/revit-bim/community-center.jpg'
  },
  {
    id: 'project-4',
    title: 'Reinforced Concrete Bridge Analysis',
    description: 'Structural integrity assessment and load bearing analysis for a highway bridge.',
    tools: ['SAP2000', 'AutoCAD'],
    type: 'Structural Analysis',
    category: 'structural-analysis',
    image: '/assets/projects/structural-analysis/bridge.jpg'
  },
  {
    id: 'project-5',
    title: 'Smart City Traffic Simulation',
    description: 'Using AI to simulate and optimize traffic light patterns in a virtual city model.',
    tools: ['Python', 'Simulation Tool'],
    type: 'AI Projects',
    category: 'ai-projects',
    image: '/assets/projects/ai-projects/traffic.jpg'
  }
];
