import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-steel-900 dark:text-white mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1.5 bg-primary-500 mx-auto mt-4 rounded-full" />
    </motion.div>
  );
}
