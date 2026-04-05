'use client';

import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-steel-900 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Feel free to reach out for collaborations or just a friendly chat about engineering and AI.">
          Contact Me
        </SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
              <p className="text-steel-400 leading-relaxed mb-8">
                I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:your.email@example.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-steel-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-steel-500">Email Me</span>
                    <span className="text-lg">your.email@example.com</span>
                  </div>
                </a>
                
                <a href="tel:+1234567890" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-steel-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-steel-500">Call Me</span>
                    <span className="text-lg">+123 456 7890</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-steel-500 mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-steel-800 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:-translate-y-1 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-steel-400">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-steel-800 border border-steel-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-steel-400">Your Email</label>
                  <input
                    type="email"
                    className="w-full bg-steel-800 border border-steel-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-steel-400">Subject</label>
                <input
                  type="text"
                  className="w-full bg-steel-800 border border-steel-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Inquiry about project"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-steel-400">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-steel-800 border border-steel-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
