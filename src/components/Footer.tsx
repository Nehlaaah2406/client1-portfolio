import React from 'react';
import { ArrowUp, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="py-12 bg-[#1D1416] text-neutral-400 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              AISWARYA V R<span className="text-[#EDE7DF]">.</span>
            </span>
            <p className="text-xs text-neutral-400 font-mono-tech mt-1">
              B.Tech Electrical & Electronics Engineering • SCMS School of Engineering and Technology (KTU)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#6B0B20] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#6B0B20] transition-colors"
              title="Email Aiswarya"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={onScrollToTop}
              className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center hover:bg-[#6B0B20] hover:border-[#6B0B20] transition-colors ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono-tech gap-3">
          <span>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Electrical & Electronics Engineering Student Portfolio.
          </span>
          <div className="flex items-center space-x-4">
            <span className="text-neutral-500">Designed for Internships & Academic Review</span>
            <span>•</span>
            <span className="text-[#C4B5A2]">Ernakulam, Kerala</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
