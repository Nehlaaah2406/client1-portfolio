import React from 'react';
import { BookOpen, CheckCircle2, FileText, BatteryCharging, Leaf } from 'lucide-react';
import { SEMINARS_LIST } from '../data/portfolioData';

export const Seminars: React.FC = () => {
  return (
    <section id="seminars" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B0B20] block mb-2 font-mono-tech">
              06 / RESEARCH & PRESENTATIONS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
              SEMINARS & ACADEMIC WORK<span className="text-[#6B0B20]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              Academic literature synthesis, research analysis, and seminar presentations.
            </p>
          </div>
        </div>

        {/* Clean Two-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SEMINARS_LIST.map((seminar) => {
            const isEV = seminar.id === 'ev-policy';
            return (
              <div
                key={seminar.id}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E5DDD2] shadow-2xs hover:border-[#6B0B20] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#EDE7DF] text-[#6B0B20] flex items-center justify-center">
                      {isEV ? <BatteryCharging className="w-5 h-5" /> : <Leaf className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-[#6B0B20] font-bold px-3 py-1 rounded-full bg-[#EDE7DF] border border-[#C4B5A2]">
                      {seminar.type}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900">
                    {seminar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                    {seminar.relevance}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 font-bold block">
                      KEY TOPICS COVERED
                    </span>
                    <ul className="space-y-2">
                      {seminar.coverage.map((topic, i) => (
                        <li key={i} className="text-xs sm:text-sm text-neutral-700 flex items-baseline space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6B0B20] shrink-0 translate-y-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono-tech">
                  <span>ACADEMIC SEMINAR</span>
                  <span className="text-[#6B0B20] font-semibold">PEER-REVIEWED TOPIC</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
