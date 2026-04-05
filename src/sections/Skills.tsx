'use client';

import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { softwareData } from '@/data/software';
import { Layers } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Professional software and tools I use to bring engineering concepts to life.">
          Software & Skills
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareData.map((item, index) => (
            <Card key={item.id} delay={index * 0.1} className="p-8 group hover:border-primary-500/50">
              <div className="mb-6 inline-flex p-4 bg-steel-50 dark:bg-steel-900/40 rounded-2xl text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <Layers size={28} />
              </div>
              <h4 className="text-xl font-bold text-steel-900 dark:text-white mb-3">{item.name}</h4>
              <p className="text-steel-600 dark:text-steel-400 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 pt-4 border-t border-steel-50 dark:border-steel-700/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-steel-400 dark:text-steel-500">
                  {item.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-steel-500 text-sm italic">
            * More software skills and certifications can be added easily via the data structure.
          </p>
        </div>
      </div>
    </section>
  );
}
