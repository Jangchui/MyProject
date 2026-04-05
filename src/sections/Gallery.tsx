'use client';

import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'CAD Drawing - Floor Plan', category: 'Drafting' },
  { id: 2, title: 'Structural Model Render', category: 'Modeling' },
  { id: 3, title: 'AI Training Plot', category: 'AI' },
  { id: 4, title: 'Site Visit Photo', category: 'Field Work' },
  { id: 5, title: 'Bridge Design Sketch', category: 'Design' },
  { id: 6, title: 'Certificate of Achievement', category: 'Awards' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-steel-50/50 dark:bg-steel-900/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="A visual collection of my drawings, renders, and certificates.">
          Work Showcase & Gallery
        </SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-steel-200 dark:bg-steel-800"
            >
              {/* Placeholder for Image */}
              <div className="absolute inset-0 flex items-center justify-center text-steel-400 dark:text-steel-600">
                <ImageIcon size={48} />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-2">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-lg">
                  {item.title}
                </h4>
                <div className="mt-4 w-10 h-1 bg-primary-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
