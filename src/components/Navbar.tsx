import React, { useState, useEffect } from 'react';
import { Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'COVER' },
    { id: 'about', label: 'ABOUT' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'interests', label: 'INTERESTS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'internship', label: 'INTERNSHIP' },
    { id: 'leadership', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONNECT' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out py-3 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DDD2] shadow-xs ${
        isScrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Student Brand / Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-baseline group text-left cursor-pointer focus:outline-hidden"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#6B0B20] transition-colors">
              AISWARYA V R<span className="text-[#6B0B20]">.</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[11px] font-mono-tech text-neutral-500 uppercase tracking-wider">
              B.Tech EEE
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#6B0B20] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-[#EDE7DF]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Direct LinkedIn */}
          <div id="nav-social-actions" className="flex items-center space-x-3">
            <a
              id="social-linkedin-btn"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Aiswarya V R on LinkedIn"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[#6B0B20] bg-[#6B0B20] text-white text-xs font-semibold hover:bg-[#540718] hover:border-[#540718] transition-colors shadow-2xs"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono-tech tracking-wider">LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-[#6B0B20] hover:border-[#6B0B20] transition-colors lg:hidden bg-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-[#E5DDD2] px-6 py-6 animate-in slide-in-from-top-2 duration-200 shadow-xl"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-2.5 px-4 rounded-xl text-left text-sm font-semibold tracking-wider transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#6B0B20] text-white'
                    : 'text-neutral-800 hover:bg-[#EDE7DF]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#E5DDD2]">
              <a
                id="mobile-linkedin-action-btn"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-[#6B0B20] text-white text-xs font-semibold tracking-wider hover:bg-[#540718]"
              >
                <span>CONNECT ON LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
