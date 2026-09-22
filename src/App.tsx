/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { TechnicalInterests } from './components/TechnicalInterests';
import { Projects } from './components/Projects';
import { Internship } from './components/Internship';
import { Seminars } from './components/Seminars';
import { Leadership } from './components/Leadership';
import { SkillsAndStrengths } from './components/SkillsAndStrengths';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [currentPhoto] = useState<string>(PERSONAL_INFO.portraitImage);

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'education',
        'interests',
        'projects',
        'internship',
        'seminars',
        'leadership',
        'skills',
        'contact'
      ];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1D1416] selection:bg-[#6B0B20] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* 2. Cover Page / Hero (B.Tech EEE, SCMS/KTU, Contact info, Photo, Single-line title) */}
      <Hero
        currentPhoto={currentPhoto}
        onExploreClick={() => scrollToSection('about')}
        onNavigateTo={scrollToSection}
      />

      <SectionDivider />

      {/* 3. About Me (Personal Introduction) */}
      <About
        onContactClick={() => scrollToSection('contact')}
        onExploreProjects={() => scrollToSection('projects')}
      />

      <SectionDivider />

      {/* 4. Education (Combined SCMS & KTU + Secondary Education) */}
      <Education />

      <SectionDivider />

      {/* 5. Technical Interests (Visual Section: Power Systems, EVs, Sustainable Engineering, etc.) */}
      <TechnicalInterests />

      <SectionDivider />

      {/* 6. Academic Projects (Electronic Stethoscope, Urban Jungle, Digital Voting Machine) */}
      <Projects />

      <SectionDivider />

      {/* 7. Internship (KSEB Substation, Aluva + What I Learned) */}
      <Internship />

      <SectionDivider />

      {/* 8. Seminars & Academic Work (EV Policy Framework & Medicinal Plants / IKS) */}
      <Seminars />

      <SectionDivider />

      {/* 9. Leadership & Social Engagement (NSS Energy Cell + SSET Koottu) */}
      <Leadership />

      <SectionDivider />

      {/* 10 & 11. Skills (Technical, Professional, Additional) & Personal Strengths Ribbon */}
      <SkillsAndStrengths />

      <SectionDivider />

      {/* 12. Contact (Let's Connect with LinkedIn, Email, Phone, Inquiry Form) */}
      <Contact />

      {/* 13. Minimal Footer */}
      <Footer
        onScrollToTop={() => scrollToSection('home')}
      />
    </div>
  );
}
