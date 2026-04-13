'use client';

import { useRouter } from 'next/navigation';
import { Project } from '@/data/projects';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { ArrowLeft, Play, Database, Cpu, Download, FileCode, ShieldCheck, X, MonitorPlay, Building2, Layers, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CategoryPageClientProps {
  category: string;
  categoryName: string;
  filteredProjects: Project[];
}

export default function CategoryPageClient({ category, categoryName, filteredProjects }: CategoryPageClientProps) {
  const router = useRouter();
  const [selectedVideo, setSelectedVideo] = useState<{url: string, label: string} | null>(null);

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    const match = url.match(/\/file\/d\/([^\/]+)/) || url.match(/id=([^\/&]+)/);
    const videoId = match ? match[1] : '';
    if (videoId) {
      return `https://drive.google.com/file/d/${videoId}/preview?autoplay=1&mute=1`;
    }
    return url;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-steel-50 dark:bg-steel-950 text-steel-900 dark:text-steel-100">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => router.push('/#projects')}
          className="flex items-center gap-2 text-primary-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft size={20} />
          BACK TO PORTFOLIO
        </button>

        <SectionTitle subtitle={`Explore the details and resources for my ${categoryName} work.`}>
          {categoryName}
        </SectionTitle>

        {/* Dedicated Resource Hero Sections */}
        {category === 'ai-projects' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 p-8 md:p-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
              <Cpu size={200} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck size={16} />
                Verified YOLOv8 Model
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Traffic Vehicle Counting <br/>Neural Network Model</h3>
              <p className="text-primary-100 text-lg mb-10 leading-relaxed">Download the optimized <strong>best.pt</strong> weight file. Trained for real-time vehicle detection and density analysis.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/assets/ai-training/Traffic Vehicle Counting/Model/best.pt" download className="flex items-center gap-3 px-8 py-4 bg-white text-primary-700 rounded-2xl font-black hover:bg-primary-50 transition-all shadow-xl hover:scale-105">
                  <Download size={24} /> DOWNLOAD MODEL (.pt)
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {category === 'revit-bim' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 p-8 md:p-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
              <Building2 size={200} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Layers size={16} />
                Full BIM Model
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Architectural & Structural <br/>BIM Design Project</h3>
              <p className="text-emerald-50 text-lg mb-10 leading-relaxed">Download the complete <strong>MYDESIGN.rvt</strong> project file. Includes detailed floor plans, structural integration, and high-quality renders.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/assets/projects/First Revit Project/MYDESIGN.rvt" download className="flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 rounded-2xl font-black hover:bg-emerald-50 transition-all shadow-xl hover:scale-105">
                  <Download size={24} /> DOWNLOAD PROJECT (.rvt)
                </a>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Project Details */}
          <div className={`w-full transition-all duration-500 ${selectedVideo ? 'lg:w-1/2' : 'lg:w-full'}`}>
            <div className={`grid grid-cols-1 gap-8 ${!selectedVideo && 'md:grid-cols-2'}`}>
              {filteredProjects.map((project) => (
                <Card key={project.id} className="h-full flex flex-col group border-2 border-transparent hover:border-primary-500/30 transition-all overflow-hidden">
                  {/* Project Image Header */}
                  {project.image && (
                    <div className="aspect-video w-full overflow-hidden bg-steel-100 dark:bg-steel-800 relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 p-2 bg-white/90 dark:bg-steel-900/90 backdrop-blur-sm rounded-lg shadow-sm text-primary-600">
                        <ImageIcon size={18} />
                      </div>
                    </div>
                  )}

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-steel-100 dark:bg-steel-800 text-primary-600 rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        {category === 'ai-projects' ? <Cpu size={24} /> : <Building2 size={24} />}
                      </div>
                      {project.fileLink && (
                        <a href={project.fileLink} download className="p-3 bg-steel-50 dark:bg-steel-900 text-steel-400 hover:text-primary-600 rounded-xl transition-colors flex items-center gap-2 text-xs font-black">
                          <Download size={20} /> FILE
                        </a>
                      )}
                    </div>
                    
                    <h4 className="text-2xl font-black text-steel-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-steel-600 dark:text-steel-400 mb-8 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="px-3 py-1 bg-steel-100 dark:bg-steel-800 text-steel-700 dark:text-steel-300 rounded-lg text-xs font-bold uppercase">
                            {tool}
                          </span>
                        ))}
                      </div>

                      {project.videoLinks && project.videoLinks.length > 0 && (
                        <div className="pt-6 border-t border-steel-100 dark:border-steel-800">
                          <h5 className="text-[10px] font-black uppercase text-steel-400 tracking-widest mb-4">Project Media (Click to Preview)</h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.videoLinks.map((link, idx) => (
                              <button 
                                key={idx} 
                                onClick={() => setSelectedVideo(link)} 
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all text-sm font-bold border-2 ${
                                  selectedVideo?.url === link.url 
                                  ? 'bg-primary-600 text-white border-primary-400 shadow-lg' 
                                  : 'bg-steel-50 dark:bg-steel-900/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-steel-700 dark:text-steel-300 border-transparent'
                                }`}
                              >
                                <Play size={14} fill={selectedVideo?.url === link.url ? "white" : "currentColor"} className={selectedVideo?.url === link.url ? "text-white" : "text-primary-600"} />
                                {link.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Video Player */}
          <AnimatePresence>
            {selectedVideo && (
              <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className="w-full lg:w-1/2 sticky top-32">
                <div className="bg-white dark:bg-steel-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-steel-100 dark:border-steel-800">
                  <div className="p-6 bg-steel-50/50 dark:bg-steel-800/50 border-b border-steel-100 dark:border-steel-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-600 text-white rounded-lg"><MonitorPlay size={18} /></div>
                      <div>
                        <span className="block text-[10px] font-black uppercase text-steel-400 tracking-widest leading-none mb-1">Now Previewing</span>
                        <h4 className="font-bold text-steel-900 dark:text-white leading-none">{selectedVideo.label}</h4>
                      </div>
                    </div>
                    <button onClick={() => setSelectedVideo(null)} className="p-2 hover:bg-steel-200 dark:hover:bg-steel-700 rounded-full transition-colors"><X size={20} /></button>
                  </div>
                  <div className="aspect-video w-full bg-black">
                    <iframe src={getEmbedUrl(selectedVideo.url)} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" title={selectedVideo.label} />
                  </div>
                  <div className="p-6"><p className="text-sm text-steel-500 dark:text-steel-400 italic text-center">* Preview is muted by default. You can unmute via the player controls.</p></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
