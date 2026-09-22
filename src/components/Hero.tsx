import React from 'react';
import {
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Landscape hero photo matching the editorial reference framing
import landscapeHeroPhoto from '../assets/images/ChatGPT Image Sep 22, 2026, 07_08_18 PM.png';
import couchPortrait from '../assets/images/WhatsApp Image 2026-09-20 at 11.28.55 PM.jpeg';

interface HeroProps {
  currentPhoto?: string;
  onExploreClick: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onNavigateTo
}) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-black text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          1. TOP LANDSCAPE PHOTO BANNER (MAGAZINE COVER REPLICA)
         ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#EAE3D9] flex flex-col justify-between">
        
        {/* Top Minimal Utility Bar */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 flex items-center justify-between">
          
          {/* Left: Professional Connection Icons */}
          <div className="flex items-center space-x-5 text-neutral-900">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 hover:text-[#6B0B20] transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="opacity-90 hover:opacity-100 hover:text-[#6B0B20] transition-all"
              aria-label="Email Aiswarya"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="hidden sm:inline-block text-[11px] font-mono-tech tracking-widest text-neutral-700 uppercase">
              B.Tech Electrical & Electronics
            </span>
          </div>

          {/* Right: "CONNECT ON LINKEDIN ──>" */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs sm:text-[13px] font-mono-tech tracking-[0.2em] font-semibold text-neutral-900 uppercase hover:text-[#6B0B20] transition-colors group cursor-pointer"
          >
            <span>CONNECT ON LINKEDIN</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-sans">
              &rarr;
            </span>
          </a>
        </div>

        {/* Edge-to-Edge Wide Landscape Photo Frame with Unclipped Typography */}
        <div className="relative w-full mt-3 sm:mt-5">
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] lg:h-[600px] overflow-hidden">
            <motion.img
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src={landscapeHeroPhoto}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-[50%_15%]"
            />

            {/* Smooth Vignette Gradient ensuring 100% crystal-clear contrast for white title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

            {/* Huge White Overlapping Editorial Typography - Fully visible & never cut off */}
            <div className="absolute inset-x-0 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 z-20 flex flex-col items-center text-center px-4 pointer-events-none select-none">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center leading-none"
              >
                {/* AISWARYA (Matching "JASMINE" tall tracked serif) */}
                <h1 className="font-editorial-serif tracking-[0.14em] text-white font-normal uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.88] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                  AISWARYA
                </h1>
                {/* V R (Matching "STAR" sweeping script/italic serif) */}
                <span className="font-editorial-serif italic tracking-[0.16em] text-[#EDE7DF] font-light uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8.5rem] leading-[0.82] drop-shadow-[0_6px_32px_rgba(0,0,0,0.95)] -mt-1 sm:-mt-2 md:-mt-4">
                  V R
                </span>
              </motion.div>
            </div>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HORIZONTAL SPLIT NAVIGATION (SOLID BLACK BASE)
         ───────────────────────────────────────────────────────────── */}
      <div className="relative z-30 w-full bg-black border-t border-neutral-900 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center gap-5 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-y-3">
            
            {/* Left Nav Group (ABOUT • EDUCATION • INTERESTS) */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:space-x-10 sm:gap-0 md:space-x-14">
              <button
                onClick={() => onNavigateTo('about')}
                className="text-xs sm:text-[13px] font-mono-tech tracking-[0.25em] uppercase font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                ABOUT
              </button>
              <button
                onClick={() => onNavigateTo('education')}
                className="text-xs sm:text-[13px] font-mono-tech tracking-[0.25em] uppercase font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                EDUCATION
              </button>
              <button
                onClick={() => onNavigateTo('interests')}
                className="text-xs sm:text-[13px] font-mono-tech tracking-[0.25em] uppercase font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                INTERESTS
              </button>
            </div>

            {/* Right Nav Group (PROJECTS • INTERNSHIP • CONTACT) */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:space-x-10 sm:gap-0 md:space-x-14">
              <button
                onClick={() => onNavigateTo('projects')}
                className="text-xs sm:text-[13px] font-mono-tech tracking-[0.25em] uppercase font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                PROJECTS
              </button>
              <button
                onClick={() => onNavigateTo('internship')}
                className="text-xs sm:text-[13px] font-mono-tech tracking-[0.25em] uppercase font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                INTERNSHIP
              </button>
              <button
                onClick={() => onNavigateTo('contact')}
                className="text-xs sm:text-[13px] font-mono-tech tracking-[0.25em] uppercase font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                CONTACT
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. BLACK SECTION MANIFESTO & QUOTE
         ───────────────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full bg-black pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Large High-Contrast Display Headline tailored to the portfolio */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
              INNOVATE, ENGINEER,
            </h2>
            <div className="flex items-baseline justify-center flex-wrap gap-x-3 sm:gap-x-4">
              <span className="font-quote-italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#EDE7DF] font-light italic">
                and
              </span>
              <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
                POWER THE FUTURE.
              </span>
            </div>
          </div>

          {/* Academic Profile Subline */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono-tech text-neutral-400 uppercase tracking-widest">
            <span>B.Tech Electrical & Electronics Engineering</span>
            <span className="text-neutral-600">&bull;</span>
            <span className="text-[#EDE7DF]">SCMS School of Engineering and Technology</span>
            <span className="text-neutral-600">&bull;</span>
            <span>KTU Affiliated</span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. EDITORIAL THREE-PHOTO COLLAGE + NARRATIVE + CTA
         ───────────────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full bg-black pb-24 sm:pb-32 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Overlapping Editorial Photography */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              {/* Primary Couch Lifestyle Photo */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] overflow-hidden rounded-xs bg-neutral-900 shadow-2xl">
                <img
                  src={couchPortrait}
                  alt="Aiswarya relaxed in studio"
                  className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
              </div>

            </div>

            {/* Right Column: Narrative Copy & Dual Action CTA */}
            <div className="lg:col-span-6 lg:pl-10 space-y-8 text-neutral-300">
              
              <div className="space-y-6 max-w-lg">
                <p className="font-display text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed font-medium">
                  Transforming theoretical electrical concepts into sustainable, high-impact innovations.
                </p>

                <p className="font-display text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Driven by curiosity in Electrical & Electronics Engineering, I bridge rigorous theoretical analysis with sustainable, real-world application. From power systems, electric vehicles, and renewable microgrids to biomedical hardware like the Electronic Stethoscope, I'm dedicated to engineering reliable, clean, and forward-looking electrical solutions.
                </p>
              </div>

              {/* Dual Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="jump-right-in-btn"
                  onClick={onExploreClick}
                  className="inline-flex items-center space-x-5 px-8 py-4 bg-[#EDE7DF] text-[#1D1416] hover:bg-white transition-all duration-300 text-xs sm:text-sm font-mono-tech tracking-[0.25em] uppercase font-bold shadow-lg hover:shadow-xl cursor-pointer group"
                >
                  <span>JUMP RIGHT IN</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 font-sans text-base">
                    &rarr;
                  </span>
                </button>

                <button
                  onClick={() => onNavigateTo('projects')}
                  className="inline-flex items-center space-x-3 px-6 py-4 border border-neutral-700 hover:border-[#EDE7DF] text-neutral-300 hover:text-white transition-all duration-300 text-xs sm:text-sm font-mono-tech tracking-[0.2em] uppercase font-medium cursor-pointer group"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
