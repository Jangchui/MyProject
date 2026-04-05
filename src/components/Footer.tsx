import { HardHat } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-steel-950 text-white border-t border-steel-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="p-1.5 bg-primary-600 rounded-lg text-white">
            <HardHat size={20} />
          </div>
          <span>MyPortfolio</span>
        </div>
        
        <div className="text-steel-500 text-sm">
          © {new Date().getFullYear()} Civil Engineering Portfolio. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-steel-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-steel-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
