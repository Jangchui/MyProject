'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { projectsData, Project } from '@/data/projects';
import { ExternalLink, Folder } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'civil-design', name: 'Civil Design' },
  { id: 'structural-analysis', name: 'Structural Analysis' },
  { id: 'revit-bim', name: 'Revit/BIM' },
  { id: 'ai-projects', name: 'AI Projects' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-steel-50/50 dark:bg-steel-900/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="A selection of my academic and personal projects in civil engineering and technology.">
          Featured Projects
        </SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' 
                  : 'bg-white dark:bg-steel-800 text-steel-600 dark:text-steel-400 border border-steel-200 dark:border-steel-700 hover:border-primary-500'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group">
                  <div className="aspect-video bg-steel-100 dark:bg-steel-700 relative overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-steel-300 dark:text-steel-600">
                      <Folder size={48} />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.fileLink && (
                        <a href={project.fileLink} className="p-3 bg-white rounded-full text-primary-900 hover:scale-110 transition-transform">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                        {project.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-steel-900 dark:text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-steel-600 dark:text-steel-400 text-sm mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span key={tool} className="px-2.5 py-1 bg-steel-100 dark:bg-steel-700/50 text-steel-600 dark:text-steel-300 rounded text-[10px] font-bold uppercase">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
