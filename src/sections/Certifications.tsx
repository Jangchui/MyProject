'use client';

import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { FileText, Award, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'PWD Internship Certificate',
    issuer: 'Public Works Department',
    date: '2024',
    file: '/assets/Document/Pwd_Intenship_Certificate.pdf',
    type: 'Internship'
  },
  {
    title: '6-Month Computer Certificate',
    issuer: 'Computer Training Center',
    date: '2023',
    file: '/assets/Document/6MonthComputerCertificate.pdf',
    type: 'Certificate'
  },
  {
    title: '3-Day Training Certificate',
    issuer: 'Technical Workshop',
    date: '2023',
    file: '/assets/Document/3DayTraining.pdf',
    type: 'Training'
  },
  {
    title: '2nd Year Marksheet',
    issuer: 'University',
    date: '2024',
    file: '/assets/Document/2nd_year_Marksheet.pdf',
    type: 'Academic'
  },
  {
    title: '1st Year Marksheet',
    issuer: 'University',
    date: '2023',
    file: '/assets/Document/1st_year_mark sheet .pdf',
    type: 'Academic'
  },
  {
    title: 'Class 12 Marksheet',
    issuer: 'State Board',
    date: '2022',
    file: '/assets/Document/class 12_Marksheet.pdf',
    type: 'Academic'
  },
  {
    title: 'Class 10 Marksheet',
    issuer: 'State Board',
    date: '2020',
    file: '/assets/Document/Class10_Marksheet.pdf',
    type: 'Academic'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Official records of my academic performance and professional training.">
          Certifications & Documents
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:border-primary-500/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                    {cert.type === 'Internship' ? <Award size={24} /> : <FileText size={24} />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-steel-100 dark:bg-steel-800 text-steel-500 rounded">
                    {cert.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-steel-900 dark:text-white mb-1">{cert.title}</h4>
                <p className="text-sm text-steel-500 dark:text-steel-400 mb-4">{cert.issuer} • {cert.date}</p>
                
                <div className="mt-auto pt-4 border-t border-steel-100 dark:border-steel-800">
                  <a 
                    href={cert.file} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Download size={16} />
                    VIEW DOCUMENT
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
