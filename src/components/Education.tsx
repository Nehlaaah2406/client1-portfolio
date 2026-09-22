import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B0B20] block mb-2 font-mono-tech">
              02 / ACADEMIC BACKGROUND
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
              EDUCATION<span className="text-[#6B0B20]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              Rigorous curriculum grounding theoretical engineering principles and practical technical coursework.
            </p>
          </div>
        </div>

        {/* Unified Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Degree Card (SCMS + KTU Combined cleanly) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DDD2] shadow-2xs hover:border-[#6B0B20] transition-colors">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#EDE7DF] text-[#6B0B20] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#6B0B20] font-semibold block">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                    SCMS School of Engineering and Technology, Ernakulam
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] text-[#1D1416] border border-[#E5DDD2] text-xs font-mono-tech font-semibold">
                <Calendar className="w-3 h-3 text-[#8E7C68]" />
                <span>2024 – 2028</span>
              </div>
            </div>

            <div className="pl-0 sm:pl-13 space-y-3">
              <div className="text-sm sm:text-base font-semibold text-[#6B0B20]">
                Bachelor of Technology (B.Tech) — Electrical and Electronics Engineering
              </div>

              {/* Affiliation combined */}
              <div className="inline-flex items-center space-x-2 text-xs font-medium text-neutral-600 bg-[#FAF8F5] border border-[#E5DDD2] px-3 py-1.5 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B0B20]" />
                <span>Affiliated with APJ Abdul Kalam Technological University (KTU)</span>
              </div>

              <div className="flex items-center space-x-2 text-xs text-neutral-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Karukutty, Ernakulam, Kerala</span>
              </div>

              <ul className="space-y-1.5 pt-3 border-t border-neutral-100">
                <li className="text-xs sm:text-sm text-neutral-700 flex items-baseline space-x-2">
                  <span className="text-[#6B0B20] font-bold select-none">•</span>
                  <span>Core coursework in Circuit Theory, Electrical Machines, Digital Systems, and Electromagnetic Engineering.</span>
                </li>
                <li className="text-xs sm:text-sm text-neutral-700 flex items-baseline space-x-2">
                  <span className="text-[#6B0B20] font-bold select-none">•</span>
                  <span>Active student member of the campus Energy Conservation Cell and community technical initiatives.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Secondary Education Card */}
          <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DDD2] shadow-2xs hover:border-[#6B0B20] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#1D1416] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-500 font-semibold block">
                    FOUNDATION
                  </span>
                  <h3 className="font-display text-lg font-bold text-neutral-900 leading-snug">
                    Vidyadhiraja Vidyabhavan, Aluva
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs sm:text-sm font-semibold text-neutral-800">
                  Secondary Education
                </div>
                <div className="flex items-center space-x-2 text-xs text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Aluva, Ernakulam, Kerala</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pt-2">
                  Completed secondary education with deep interest in physics, applied mathematics, and science fundamentals.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 mt-4 text-[11px] font-mono-tech text-neutral-400">
              ACADEMIC MERIT & FOUNDATION
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
