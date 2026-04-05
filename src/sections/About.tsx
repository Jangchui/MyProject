'use client';

import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { hobbiesData } from '@/data/hobbies';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-steel-50/50 dark:bg-steel-900/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Get to know the person behind the projects.">
          About Me
        </SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-steel-900 dark:text-white">
              Aspiring Civil Engineer & AI Enthusiast
            </h3>
            <p className="text-steel-600 dark:text-steel-400 leading-relaxed">
              I am a dedicated undergraduate student with a strong foundation in structural analysis and design. My journey in civil engineering is driven by a curiosity to solve complex urban challenges through innovative technology and sustainable practices.
            </p>
            <p className="text-steel-600 dark:text-steel-400 leading-relaxed">
              Beyond traditional engineering, I am deeply involved in AI training and coding, exploring how machine learning can optimize infrastructure maintenance and resource management.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Civil Engineering', 'CAD/Design', 'Structural Analysis', 'AI Training', 'Coding', 'AI Productivity'].map((strength) => (
                <div key={strength} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  <span className="text-sm font-medium text-steel-700 dark:text-steel-300">{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            {hobbiesData.map((hobby, index) => {
              const IconComponent = (LucideIcons as any)[hobby.icon];
              return (
                <Card key={hobby.name} delay={index * 0.1} className="p-6 text-center group">
                  <div className="mb-4 inline-flex p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h4 className="font-semibold text-steel-900 dark:text-white">{hobby.name}</h4>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
