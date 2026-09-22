import React from 'react';
import { Cpu, Briefcase, Music, Check, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_STRENGTHS } from '../data/portfolioData';

export const SkillsAndStrengths: React.FC = () => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Technical':
        return <Cpu className="w-5 h-5 text-[#6B0B20]" />;
      case 'Professional':
        return <Briefcase className="w-5 h-5 text-[#6B0B20]" />;
      case 'Additional Interest':
        return <Music className="w-5 h-5 text-[#6B0B20]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#6B0B20]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B0B20] block mb-2 font-mono-tech">
              08 / COMPETENCIES & ATTRIBUTES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
              SKILLS & STRENGTHS<span className="text-[#6B0B20]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              Verified capabilities backed directly by academic coursework, simulation labs, and extracurricular initiatives.
            </p>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILL_CATEGORIES.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DDD2] shadow-2xs space-y-6"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-[#EDE7DF] flex items-center justify-center">
                  {getCategoryIcon(catGroup.category)}
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#6B0B20] font-bold block">
                    CATEGORY
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-900">
                    {catGroup.category}
                  </h3>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {catGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5] text-neutral-800 text-xs font-semibold border border-[#E5DDD2] hover:border-[#6B0B20] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B0B20]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section 10: Personal Strengths Visual Ribbon */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#6B0B20] text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#EDE7DF] font-bold block mb-1">
                PERSONAL STRENGTHS
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Core Behavioral Attributes
              </h4>
            </div>

            {/* Strengths Flow */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {PERSONAL_STRENGTHS.map((strength, index) => (
                <React.Fragment key={strength}>
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xs text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/15">
                    {strength}
                  </div>
                  {index < PERSONAL_STRENGTHS.length - 1 && (
                    <span className="text-[#C4B5A2] select-none hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
