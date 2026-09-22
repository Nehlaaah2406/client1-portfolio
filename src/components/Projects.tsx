import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  Compass,
  Cpu,
  Zap,
  Leaf,
  Car,
  CheckCircle2,
  ArrowUpRight,
  X
} from 'lucide-react';
import { PROJECTS_LIST, INTERNSHIP_DATA, SEMINARS_LIST } from '../data/portfolioData';
import { EngineeringProject } from '../types';

interface TimelineStep {
  stepNumber: string;
  stepIndex: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  projectData?: EngineeringProject;
  extraDetails?: {
    organization?: string;
    highlights?: string[];
  };
}

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<EngineeringProject | null>(null);

  // 6 milestones matching the exact visual flow of the user's reference image
  const timelineSteps: TimelineStep[] = [
    {
      stepNumber: 'PROJECT 1',
      stepIndex: 1,
      title: 'Electronic Stethoscope',
      subtitle: 'Acoustic Heartbeat Capture & Simulation',
      description:
        'Electronic capture, amplification, and recording of acoustic heartbeat sounds to enable accessible digital cardiac monitoring in resource-constrained areas.',
      category: 'Group Academic Project',
      icon: <Activity className="w-5 h-5 text-white" />,
      projectData: PROJECTS_LIST[0]
    },
    {
      stepNumber: 'PROJECT 2',
      stepIndex: 2,
      title: 'Urban Jungle',
      subtitle: 'Indoor Navigation & Crowd Monitoring',
      description:
        'Intuitive indoor navigation and real-time crowd density monitoring framework for commercial malls and multi-level shopping complexes.',
      category: 'Group Academic Project',
      icon: <Compass className="w-5 h-5 text-white" />,
      projectData: PROJECTS_LIST[1]
    },
    {
      stepNumber: 'PROJECT 3',
      stepIndex: 3,
      title: 'Digital Voting Machine',
      subtitle: 'MATLAB Logic & State Processing',
      description:
        'Designing and simulating a tamper-resistant digital vote entry, truth table processing, and state verification machine using MATLAB.',
      category: 'Group Academic Project',
      icon: <Cpu className="w-5 h-5 text-white" />,
      projectData: PROJECTS_LIST[2]
    },
    {
      stepNumber: 'PROJECT 4',
      stepIndex: 4,
      title: 'KSEB Substation Operations',
      subtitle: 'High-Voltage Grid & Transmission Topology',
      description:
        'Vocational field exposure to 110kV/66kV transformer stations, protective relays, switchgear dispatching, and single line diagram (SLD) layout.',
      category: 'Industrial Vocational Training',
      icon: <Zap className="w-5 h-5 text-white" />,
      extraDetails: {
        organization: INTERNSHIP_DATA.company,
        highlights: INTERNSHIP_DATA.exposures.slice(0, 4)
      }
    },
    {
      stepNumber: 'PROJECT 5',
      stepIndex: 5,
      title: 'Energy Cell & Conservation',
      subtitle: 'Campus Auditing & Sustainable Practices',
      description:
        'Leading institutional energy conservation campaigns, monitoring power consumption loads, and fostering sustainability practices through SSET Energy Cell.',
      category: 'Leadership & Community',
      icon: <Leaf className="w-5 h-5 text-white" />,
      extraDetails: {
        organization: 'Energy Cell & NSS, SSET',
        highlights: [
          'Organized campus energy-saving audit drives',
          'Conducted awareness sessions on green energy',
          'Coordinated student participation in technical outreach'
        ]
      }
    },
    {
      stepNumber: 'PROJECT 6',
      stepIndex: 6,
      title: 'EV Policy & Grid Integration',
      subtitle: 'Sustainable Mobility & Power Transition',
      description:
        'Academic research analyzing electric vehicle charging infrastructure standards, battery lifecycle management, and smart grid tariff frameworks.',
      category: 'Technical Seminar & Research',
      icon: <Car className="w-5 h-5 text-white" />,
      extraDetails: {
        organization: 'Department of EEE, SCMS',
        highlights: SEMINARS_LIST[0]?.coverage || [
          'EV adoption trajectories and global standards',
          'Battery management systems (BMS)',
          'Charging network topology and grid impacts'
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Top Header */}
        <div className="mb-12 pb-6 border-b border-neutral-200">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B0B20] block mb-2 font-mono-tech">
            04 / ACADEMIC & TECHNICAL MILESTONES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
            PROJECTS & ROADMAP<span className="text-[#6B0B20]">.</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* TIMELINE ROADMAP                                                          */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-[#F5F0E8] border border-[#E5DDD2] p-6 sm:p-10 md:p-14 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
            
            {/* Central Timeline Spine Container */}
            <div className="relative pt-4 sm:pt-6 pb-8">
              
              {/* Central Continuous Vertical Line */}
              <div className="absolute top-8 bottom-8 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-[#8E7C68]">
                {/* Top decorative crosshair/tick */}
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#6B0B20] border-2 border-[#F5F0E8]" />
                {/* Bottom decorative tick */}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#6B0B20] border-2 border-[#F5F0E8]" />
              </div>

              {/* Steps List */}
              <div className="space-y-12 sm:space-y-16">
                {timelineSteps.map((step) => {
                  const isOdd = step.stepIndex % 2 !== 0; // Steps 1, 3, 5 on Left on desktop

                  return (
                    <div
                      key={step.stepNumber}
                      className="relative flex flex-col sm:flex-row items-start sm:items-center w-full"
                    >
                      {/* DESKTOP LAYOUT (ALTERNATING LEFT / RIGHT) */}
                      
                      {/* LEFT SIDE (Step 1, 3, 5 content, OR Step 2, 4, 6 left gap) */}
                      <div className="hidden sm:flex sm:w-1/2 items-center justify-end pr-8 sm:pr-12">
                        {isOdd ? (
                          <div className="flex items-center w-full justify-between">
                            {/* Outer Solid Maroon Circle Badge */}
                            <div className="w-12 h-12 rounded-full bg-[#6B0B20] text-white flex items-center justify-center shadow-md shrink-0 ring-4 ring-[#E5DDD2]">
                              {step.icon}
                            </div>

                            {/* Horizontal Dashed Connector Line */}
                            <div className="flex-1 mx-4 border-t-2 border-dashed border-[#8E7C68]" />

                            {/* Step Text Block (aligned next to central line) */}
                            <div className="text-right max-w-xs space-y-1.5">
                              <span className="text-xs font-mono-tech font-bold text-[#6B0B20] uppercase tracking-wider block">
                                {step.stepNumber}
                              </span>
                              <h4 className="font-display font-bold text-lg lg:text-xl text-[#1D1416] leading-snug tracking-tight">
                                {step.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-[#5A4E4A] leading-relaxed font-medium">
                                {step.description}
                              </p>

                              {step.projectData && (
                                <button
                                  type="button"
                                  onClick={() => setActiveModalProject(step.projectData || null)}
                                  className="mt-2 inline-flex items-center space-x-1 text-xs font-mono-tech font-bold text-[#6B0B20] hover:text-[#7E1228] underline cursor-pointer"
                                >
                                  <span>View Project Specs</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>
                        ) : (
                          // For even steps, left side has subtle category tag
                          <div className="text-right max-w-xs pr-4">
                            <span className="text-[11px] font-mono-tech font-medium text-[#8E7C68] uppercase tracking-wider">
                              {step.category}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* CENTER JUNCTION NODE ON SPINE */}
                      <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#6B0B20] ring-4 ring-[#F5F0E8] z-10" />

                      {/* RIGHT SIDE (Step 2, 4, 6 content, OR Step 1, 3, 5 right gap) */}
                      <div className="hidden sm:flex sm:w-1/2 items-center justify-start pl-8 sm:pl-12">
                        {!isOdd ? (
                          <div className="flex items-center w-full justify-between">
                            {/* Step Text Block (aligned next to central line) */}
                            <div className="text-left max-w-xs space-y-1.5">
                              <span className="text-xs font-mono-tech font-bold text-[#6B0B20] uppercase tracking-wider block">
                                {step.stepNumber}
                              </span>
                              <h4 className="font-display font-bold text-lg lg:text-xl text-[#1D1416] leading-snug tracking-tight">
                                {step.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-[#5A4E4A] leading-relaxed font-medium">
                                {step.description}
                              </p>

                              {step.projectData && (
                                <button
                                  type="button"
                                  onClick={() => setActiveModalProject(step.projectData || null)}
                                  className="mt-2 inline-flex items-center space-x-1 text-xs font-mono-tech font-bold text-[#6B0B20] hover:text-[#7E1228] underline cursor-pointer"
                                >
                                  <span>View Project Specs</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </button>
                              )}
                            </div>

                            {/* Horizontal Dashed Connector Line */}
                            <div className="flex-1 mx-4 border-t-2 border-dashed border-[#8E7C68]" />

                            {/* Outer Solid Maroon Circle Badge */}
                            <div className="w-12 h-12 rounded-full bg-[#6B0B20] text-white flex items-center justify-center shadow-md shrink-0 ring-4 ring-[#E5DDD2]">
                              {step.icon}
                            </div>
                          </div>
                        ) : (
                          // For odd steps, right side subtle category tag
                          <div className="text-left max-w-xs pl-4">
                            <span className="text-[11px] font-mono-tech font-medium text-[#8E7C68] uppercase tracking-wider">
                              {step.category}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* MOBILE VIEW (RESPONSIVE STACKED WITH SAME GRAPHIC MOTIF) */}
                      <div className="sm:hidden pl-12 w-full space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-full bg-[#6B0B20] text-white flex items-center justify-center shadow-xs shrink-0">
                            {step.icon}
                          </div>
                          <span className="text-xs font-mono-tech font-bold text-[#6B0B20]">
                            {step.stepNumber} • {step.category}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-lg text-[#1D1416] leading-tight">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#5A4E4A] leading-relaxed font-medium">
                          {step.description}
                        </p>

                        {step.projectData && (
                          <button
                            type="button"
                            onClick={() => setActiveModalProject(step.projectData || null)}
                            className="mt-1 inline-flex items-center space-x-1 text-xs font-mono-tech font-bold text-[#6B0B20] underline cursor-pointer"
                          >
                            <span>Inspect Full Specs</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Note */}
            <div className="mt-8 pt-6 border-t border-[#E5DDD2] text-center text-xs font-mono-tech text-[#6B0B20]/80">
              CLICK ON ANY ACADEMIC PROJECT TO VIEW DETAILED OBJECTIVES, CONTRIBUTIONS & SKILLS
            </div>

          </div>

      </div>

      {/* ========================================================================= */}
      {/* TECHNICAL PROJECT MODAL (WHEN CLICKED FROM THE TIMELINE)                  */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-10 pb-5 border-b border-neutral-100 space-y-1">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#6B0B20] font-bold">
                  {activeModalProject.projectType}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-950 uppercase tracking-tight">
                  {activeModalProject.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="py-6 space-y-6">
                
                {/* Objective */}
                <div>
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                    PROJECT OBJECTIVE
                  </span>
                  <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                    {activeModalProject.objective}
                  </p>
                </div>

                {/* My Contribution */}
                <div className="p-4 rounded-2xl bg-[#EDE7DF]/60 border border-[#C4B5A2]/60 space-y-1">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[#6B0B20] font-bold block">
                    MY INDIVIDUAL & TEAM CONTRIBUTION
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {activeModalProject.contribution}
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                    TOOLS & TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-mono-tech font-medium border border-neutral-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Learned */}
                <div>
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                    KEY SKILLS LEARNED
                  </span>
                  <ul className="space-y-1.5">
                    {activeModalProject.skillsLearned.map((skill) => (
                      <li key={skill} className="text-xs sm:text-sm text-neutral-700 flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6B0B20] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-neutral-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#6B0B20] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#540718] transition-colors cursor-pointer"
                >
                  Close Specs
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
