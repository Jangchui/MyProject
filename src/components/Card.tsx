import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white dark:bg-steel-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-steel-100 dark:border-steel-700 overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
