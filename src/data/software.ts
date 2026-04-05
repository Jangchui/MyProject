export interface Software {
  id: string;
  name: string;
  description: string;
  icon?: string;
  category: string;
}

export const softwareData: Software[] = [
  {
    id: 'autocad',
    name: 'AutoCAD',
    description: 'Expertise in 2D drafting and basic 3D modeling for architectural and engineering plans.',
    category: 'Drafting'
  },
  {
    id: 'revit',
    name: 'Revit',
    description: 'BIM modeling for structural and architectural design, including coordination and documentation.',
    category: 'BIM'
  },
  {
    id: 'staad-pro',
    name: 'STAAD Pro',
    description: 'Structural analysis and design of buildings and bridges under various loading conditions.',
    category: 'Analysis'
  },
  {
    id: 'hyrcam',
    name: 'HyrCAM',
    description: 'Hydrological and hydraulic modeling for water resource management.',
    category: 'Hydraulics'
  },
  {
    id: 'adonis',
    name: 'ADONIS',
    description: 'Business process management and modeling for engineering workflows.',
    category: 'Management'
  },
  {
    id: 'sap2000',
    name: 'SAP2000',
    description: 'General-purpose structural analysis and design software for complex geometries.',
    category: 'Analysis'
  },
  {
    id: 'civil3d',
    name: 'Civil 3D',
    description: 'BIM-powered civil engineering design and documentation software for infrastructure.',
    category: 'Civil Design'
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Scripting for automation and AI model training in engineering contexts.',
    category: 'Development'
  }
];
