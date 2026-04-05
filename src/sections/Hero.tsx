'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm">
            Civil Engineering Undergraduate
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-steel-900 dark:text-white mb-6"
        >
          Building the Future with <br />
          <span className="text-primary-600">Precision & Innovation</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-steel-600 dark:text-steel-400 max-w-3xl mx-auto mb-10"
        >
          Passionate civil engineering student dedicated to sustainable design, structural excellence, and leveraging AI to revolutionize the engineering landscape.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white dark:bg-steel-800 text-steel-900 dark:text-white border border-steel-200 dark:border-steel-700 rounded-lg font-semibold hover:bg-steel-50 dark:hover:bg-steel-700 transition-all flex items-center justify-center gap-2"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-steel-200/20 dark:bg-steel-900/10 rounded-full blur-3xl -z-10 animate-pulse" />
    </section>
  );
}
