'use client';

import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const galleryItems = [
  { 
    id: 1, 
    title: 'First Revit Project - Architectural Design', 
    category: 'Modeling',
    image: '/assets/projects/First Revit Project/render.jpg' 
  },
  { 
    id: 2, 
    title: 'Traffic Vehicle Counting - AI Output', 
    category: 'AI Training' 
  },
  { 
    id: 3, 
    title: 'Revit BIM Structural Integration', 
    category: 'Modeling' 
  },
  { 
    id: 4, 
    title: 'PWD Internship Work', 
    category: 'Field Work' 
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-steel-50/50 dark:bg-steel-900/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="A visual collection of my actual project renders and work samples.">
          Work Showcase & Gallery
        </SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-steel-200 dark:bg-steel-800"
            >
              {/* Image with fall back to placeholder */}
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-steel-400 dark:text-steel-600 bg-gradient-to-br from-steel-100 to-steel-200 dark:from-steel-800 dark:to-steel-900">
                  <div className="flex flex-col items-center gap-2">
                    <ImageIcon size={48} />
                    <span className="text-[10px] font-black uppercase tracking-tighter opacity-50">Image Preview</span>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-2">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-sm">
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
