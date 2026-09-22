import React from 'react';
import { Zap, ShieldCheck, Cpu, CheckCircle2, ArrowUpRight, Award, Compass } from 'lucide-react';
import { INTERNSHIP_DATA } from '../data/portfolioData';

export const Internship: React.FC = () => {
  return (
    <section id="internship" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B0B20] block mb-2 font-mono-tech">
              05 / INDUSTRIAL EXPOSURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
              INTERNSHIP<span className="text-[#6B0B20]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              Practical substation field immersion bridging power theory with grid operations and protective systems.
            </p>
          </div>
        </div>

        {/* Internship Main Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E5DDD2] shadow-2xs space-y-8">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5DDD2] gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6B0B20] text-white flex items-center justify-center shadow-xs">
                <Zap className="w-6 h-6 text-[#EDE7DF]" />
              </div>
              <div>
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#6B0B20] font-bold block">
                  SUBSTATION VOCATIONAL INTERNSHIP
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 uppercase">
                  {INTERNSHIP_DATA.company}
                </h3>
                <span className="text-xs text-neutral-500 font-mono-tech">
                  Location: {INTERNSHIP_DATA.location}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#EDE7DF] text-[#6B0B20] text-xs font-mono-tech font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#6B0B20]" />
              <span>Kerala State Electricity Board (KSEB)</span>
            </div>
          </div>

          {/* 2-Column Grid: Exposures vs What I Learned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Practical Exposures Checklist */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-neutral-700" />
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-neutral-900">
                  Practical Exposure & Field Observations
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {INTERNSHIP_DATA.exposures.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E5DDD2] shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-[#EDE7DF] text-[#6B0B20] flex items-center justify-center text-[10px] font-mono-tech font-bold">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* "What I Learned" Section */}
            <div className="lg:col-span-6 space-y-4 lg:pl-4">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#6B0B20]" />
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-neutral-900">
                  What I Learned
                </h4>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DDD2] shadow-2xs space-y-4">
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                  {INTERNSHIP_DATA.whatILearned}
                </p>

                <div className="pt-4 border-t border-neutral-100 space-y-2">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 block font-semibold">
                    KEY APPLIED CONCEPTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Single Line Diagram (SLD)',
                      'Transformer Bushings & Oil Testing',
                      'SF6 Circuit Breakers',
                      'Relay Coordination',
                      'High-Voltage Safety Rules'
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5DDD2] text-neutral-700 text-xs font-mono-tech"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
