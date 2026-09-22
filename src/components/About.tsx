import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onContactClick?: () => void;
  onExploreProjects?: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick, onExploreProjects }) => {
  const whatIDoCards = [
    {
      number: '01',
      title: 'Power & Energy Systems',
      description: 'Grid operations, substation topology & power generation'
    },
    {
      number: '02',
      title: 'Electric Vehicles',
      description: 'Powertrains, charging networks & sustainable mobility'
    },
    {
      number: '03',
      title: 'Simulation & Circuits',
      description: 'MATLAB modeling, digital logic & electronic systems'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION: "WHAT I DO" + 3 TALL CARDS WITH ARCHITECTURAL GRID */}
        <div className="relative pb-16 sm:pb-20">
          
          {/* Subtle architectural crosshair line above */}
          <div className="hidden sm:block absolute -top-4 left-0 right-0 h-px bg-neutral-200">
            <span className="absolute -top-2 left-10 text-[10px] text-neutral-400 font-mono select-none">+</span>
            <span className="absolute -top-2 right-10 text-[10px] text-neutral-400 font-mono select-none">+</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
            
            {/* Left Vertical Label: WHAT I DO */}
            <div className="flex items-center justify-start lg:justify-center relative pr-0 lg:pr-4">
              <div className="lg:-rotate-90 origin-center whitespace-nowrap">
                <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-950 uppercase">
                  WHAT I DO
                </h2>
              </div>
            </div>

            {/* 3 Tall Rounded White Cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {whatIDoCards.map((card) => (
                <div
                  key={card.number}
                  className="group bg-white rounded-3xl p-7 sm:p-8 border border-[#E5DDD2] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(107,11,32,0.08)] hover:border-[#6B0B20] transition-all duration-300 flex flex-col justify-between h-64 sm:h-72 relative"
                >
                  {/* Top: Large Index Number + Angled Arrow */}
                  <div className="flex items-baseline space-x-1.5">
                    <span className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#1D1416]">
                      {card.number}
                    </span>
                    <span className="font-display font-bold text-3xl text-[#6B0B20] leading-none">
                      .
                    </span>
                    <ArrowDownRight className="w-5 h-5 text-[#6B0B20] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                  </div>

                  {/* Bottom: Title + Subtitle */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-950 uppercase tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Architectural horizontal separator with center crosshair */}
          <div className="relative mt-16 sm:mt-20 w-full">
            <div className="h-px bg-neutral-200 w-full" />
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs text-neutral-400 font-mono select-none bg-white px-2">
              +
            </span>
          </div>
        </div>


        {/* BOTTOM SECTION: "About me!" (Left) + Education & Experience (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Subtle vertical hairline divider for desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[58%] w-px bg-neutral-200">
            <span className="absolute top-1/2 -translate-y-1/2 -left-1 text-xs text-neutral-400 font-mono select-none bg-white py-1">
              +
            </span>
          </div>

          {/* LEFT COLUMN: About me! + Authentic Student Bio + Key Metrics Row */}
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-10">
            
            {/* Title with Exclamation Mark */}
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-neutral-950 tracking-tighter">
                About me!
              </h2>
            </div>

            {/* Authentic B.Tech Student Bio */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                {PERSONAL_INFO.aboutBio}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Currently pursuing my B.Tech in Electrical and Electronics Engineering at SCMS School of Engineering and Technology (affiliated with KTU). I aim to bridge rigorous theoretical power concepts with active simulation, hands-on circuit design, and industrial exposure.
              </p>
            </div>

            {/* Key Stat Metrics Row (matching the 3-column stats in reference image) */}
            <div className="pt-4 border-t border-neutral-200 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-950 tracking-tight">
                  2028
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-600 font-medium mt-1">
                  KTU B.Tech Graduate
                </div>
              </div>

              <div>
                <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-950 tracking-tight">
                  3+
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-600 font-medium mt-1">
                  Academic Projects
                </div>
              </div>

              <div>
                <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-950 tracking-tight">
                  KSEB
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-600 font-medium mt-1">
                  Substation Trainee
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              {onContactClick && (
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#6B0B20] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#540718] transition-colors shadow-xs"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
              {onExploreProjects && (
                <button
                  onClick={onExploreProjects}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-[#C4B5A2] text-[#1D1416] text-xs font-semibold tracking-wider uppercase hover:border-[#6B0B20] hover:bg-[#EDE7DF] transition-colors"
                >
                  <span>VIEW PROJECTS</span>
                </button>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Education + Experience Summary */}
          <div className="lg:col-span-5 space-y-10 pl-0 lg:pl-6">
            
            {/* Education Block */}
            <div className="space-y-4">
              <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-950 tracking-tight uppercase">
                Education
              </h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                    SCMS School of Engineering and Technology
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    B.Tech in Electrical and Electronics Engineering
                  </p>
                  <p className="text-xs text-neutral-500 font-mono">
                    2024 – 2028 • KTU Affiliation
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-neutral-100">
                  <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                    Vidyadhiraja Vidyabhavan, Aluva
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Secondary Education
                  </p>
                  <p className="text-xs text-neutral-500 font-mono">
                    Science & Mathematics Foundation
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Block */}
            <div className="space-y-4 pt-6 border-t border-neutral-200">
              <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-950 tracking-tight uppercase">
                Experience
              </h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                    KSEB Substation, Aluva
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Substation Vocational Trainee / Intern
                  </p>
                  <p className="text-xs text-neutral-500 font-mono">
                    Field Operations & Protective Systems
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-neutral-100">
                  <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                    NSS & Energy Cell, SSET
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Energy Cell Coordinator & NSS Volunteer
                  </p>
                  <p className="text-xs text-neutral-500 font-mono">
                    Community Drives & Energy Conservation
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-neutral-100">
                  <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                    SSET Koottu
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Core Team Member
                  </p>
                  <p className="text-xs text-neutral-500 font-mono">
                    Inclusion & Social Engagement
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
