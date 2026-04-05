'use client';

import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { aiData } from '@/data/ai';
import { Cpu, Database, Activity, Globe } from 'lucide-react';

export default function AITraining() {
  return (
    <section id="ai-training" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Exploring the intersection of artificial intelligence and civil engineering.">
          AI Training & Projects
        </SectionTitle>
        
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
                  
                  {item.demoLink && (
                    <div className="mt-8">
                      <a 
                        href={item.demoLink}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <Globe size={16} />
                        VIEW LIVE DEMO
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
