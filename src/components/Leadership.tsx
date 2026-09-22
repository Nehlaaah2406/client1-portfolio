import React from 'react';
import { Users, Heart, Zap, CheckCircle2, Award } from 'lucide-react';
import { LEADERSHIP_LIST } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B0B20] block mb-2 font-mono-tech">
              07 / RESPONSIBILITY & OUTREACH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
              LEADERSHIP & SOCIAL ENGAGEMENT<span className="text-[#6B0B20]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              Demonstrating initiative, community service, inclusive advocacy, and cross-functional team coordination.
            </p>
          </div>
        </div>

        {/* 2-Card Layout for NSS Energy Cell & SSET Koottu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_LIST.map((item) => {
            const isNSS = item.id === 'nss-energy';
            return (
              <div
                key={item.id}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E5DDD2] shadow-2xs hover:border-[#6B0B20] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#EDE7DF] border border-[#C4B5A2] flex items-center justify-center text-[#6B0B20] shadow-2xs">
                      {isNSS ? <Zap className="w-6 h-6 text-[#6B0B20]" /> : <Heart className="w-6 h-6 text-[#6B0B20]" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#6B0B20] font-bold block">
                        CAMPUS INITIATIVE
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900">
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed pl-1">
                    {item.organization}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-neutral-700 flex items-baseline space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#6B0B20] shrink-0 translate-y-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5DDD2] flex flex-wrap gap-2 text-[11px] font-mono-tech text-neutral-600">
                  {isNSS ? (
                    <>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5DDD2]">Community Service</span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5DDD2]">Energy Conservation</span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5DDD2]">Team Coordination</span>
                    </>
                  ) : (
                    <>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5DDD2]">Accessibility</span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5DDD2]">Social Responsibility</span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5DDD2]">Inclusive Leadership</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
