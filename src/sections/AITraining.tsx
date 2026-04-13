'use client';

import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { aiData } from '@/data/ai';
import Link from 'next/link';
import { Cpu, Database, Activity, Globe, FileCode, Play, ArrowRight } from 'lucide-react';

export default function AITraining() {
  return (
    <section id="ai-training" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Exploring the intersection of artificial intelligence and civil engineering.">
          AI Training & Projects
        </SectionTitle>

        <div className="mb-12 flex justify-center">
          <Link 
            href="/projects/ai-projects"
            className="group flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25"
          >
            OPEN AI PROJECT SHOWCASE
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aiData.map((item, index) => (
            <Card key={item.id} delay={index * 0.1} className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <Cpu size={32} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-steel-900 dark:text-white mb-4">{item.name}</h4>
                  <p className="text-steel-600 dark:text-steel-400 mb-6 italic leading-relaxed">
                    "{item.purpose}"
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-steel-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="block text-xs font-bold uppercase text-steel-500 mb-1">Dataset</span>
                        <p className="text-sm text-steel-700 dark:text-steel-300">{item.dataset}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-steel-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="block text-xs font-bold uppercase text-steel-500 mb-1">Results / Accuracy</span>
                        <p className="text-sm text-steel-700 dark:text-steel-300 font-medium">{item.results}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {item.demoLink && item.demoLink !== '#' && (
                      <a 
                        href={item.demoLink}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <Globe size={16} />
                        VIEW LIVE DEMO
                      </a>
                    )}
                    
                    {item.modelLink && (
                      <a 
                        href={item.modelLink}
                        className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >
                        <FileCode size={16} />
                        DOWNLOAD MODEL
                      </a>
                    )}

                    {item.videoLinks && item.videoLinks.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Play size={16} />
                        {link.label.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
