import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import contactPortrait from '../assets/images/WhatsApp Image 2026-09-20 at 11.30.09 PM.jpeg';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Academic Inquiry',
    message: ''
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#6B0B20] text-white relative overflow-hidden selection:bg-white selection:text-[#6B0B20]"
    >
      {/* Background Subtle Halftone / Vignette Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#7E1228]/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#4A0514]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Top Eyebrow & Status */}
        <div className="flex items-center justify-end pb-6 sm:pb-8 border-b border-white/20">
          <div className="flex items-center space-x-2.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#C4B5A2] animate-pulse" />
            <span className="text-xs font-mono-tech uppercase tracking-wider text-white font-semibold">
              OPEN FOR INTERNSHIPS & PROJECTS
            </span>
          </div>
        </div>

        {/* Main Grid: Left Side Poster (matching the user's reference image), Right Side Interactive Contact Matrix */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ========================================================================= */}
          {/* THE MAROON POSTER (MATCHING USER'S BESPOKE PALETTE)                       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Poster Card Container */}
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] bg-[#6B0B20] rounded-2xl p-6 sm:p-8 flex flex-col items-center border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">

              {/* The White Polaroid Frame Card */}
              <div className="w-full bg-white p-3 sm:p-4 pb-6 sm:pb-8 shadow-[0_16px_36px_rgba(0,0,0,0.28)] flex flex-col items-stretch">
                
                {/* Image Section with Maroon Backdrop & Inset White Border */}
                <div className="relative w-full aspect-[4/4.3] bg-[#6B0B20] overflow-hidden flex items-end justify-center">
                  
                  {/* Inset White Framing Box */}
                  <div className="absolute inset-4 sm:inset-5 border-2 border-white pointer-events-none z-10" />

                  {/* High-Contrast Grayscale Portrait */}
                  <img
                    src={contactPortrait}
                    alt={PERSONAL_INFO.name}
                    className="relative z-20 w-[88%] h-auto max-h-[96%] object-contain object-bottom filter grayscale contrast-125 brightness-105 select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
                  />
                </div>

                {/* Bottom White Area: Ultra-Bold Maroon Name */}
                <div className="pt-4 sm:pt-5 px-1 flex flex-col justify-center">
                  <span className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#6B0B20] uppercase tracking-tight leading-[0.95]">
                    Aiswarya
                  </span>
                  <span className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#6B0B20] uppercase tracking-tight leading-[0.95] mt-0.5">
                    V R
                  </span>
                </div>

              </div>

              {/* Bold Uppercase Quote Below Card */}
              <div className="mt-6 sm:mt-8 text-center px-2">
                <p className="font-display font-black text-xs sm:text-sm text-white uppercase tracking-wider leading-snug">
                  IF YOUR DREAMS DON'T SCARE YOU,
                  <br />
                  THEY ARE TOO SMALL
                </p>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: HIGH-CONTRAST INTERACTIVE CONNECTIVITY MATRIX                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-mono-tech font-bold text-white/70 block mb-2">
                LET'S BUILD TOGETHER
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                GET IN TOUCH<span className="text-white/60">.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">
                Looking for technical internships, research initiatives, smart grid operations, electric vehicle technologies, or academic discussions. Reach out directly through any avenue below.
              </p>
            </div>

            {/* Direct Connect Avenues (High contrast white / dark cards) */}
            <div className="space-y-3.5">
              
              {/* 1. LinkedIn Spotlight Button */}
              <a
                id="connect-linkedin-btn"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white text-neutral-900 hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#6B0B20] text-white flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-neutral-500 font-bold block">
                      PROFESSIONAL NETWORK
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-neutral-950 group-hover:text-[#6B0B20] transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:bg-[#6B0B20] transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* 2. Email Card with 1-Click Copy */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/90 text-white border border-white/15 flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#C4B5A2] font-bold block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-display text-sm sm:text-base font-bold text-white hover:text-[#C4B5A2] truncate block transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-neutral-950 text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C4B5A2]" />
                      <span className="text-[#C4B5A2]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3. Phone / WhatsApp Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/90 text-white border border-white/15 flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#C4B5A2] font-bold block">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-display text-sm sm:text-base font-bold text-white hover:text-[#C4B5A2] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-neutral-950 text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C4B5A2]" />
                      <span className="text-[#C4B5A2]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* 4. Academic Institution & Location Metadata */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center space-x-3 text-xs text-white/90">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <div>
                  <span className="font-semibold text-white">Location:</span> {PERSONAL_INFO.location}
                  <span className="block text-white/75 mt-0.5">{PERSONAL_INFO.college}</span>
                </div>
              </div>

            </div>

            {/* Quick Action: Toggle Direct Message Form */}
            <div className="pt-2">
              {!showForm ? (
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white text-neutral-950 font-display font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#6B0B20]" />
                  <span>SEND A DIRECT MESSAGE / INQUIRY</span>
                </button>
              ) : (
                <div className="p-6 rounded-2xl bg-white text-neutral-900 shadow-xl border border-white/20 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <h3 className="font-display font-bold text-lg text-neutral-950 uppercase tracking-tight">
                      DIRECT INQUIRY
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="text-xs font-mono-tech text-neutral-500 hover:text-neutral-900 cursor-pointer"
                    >
                      Close [✕]
                    </button>
                  </div>

                  {formSent ? (
                    <div className="text-center py-6 space-y-2">
                      <div className="w-12 h-12 rounded-full bg-[#EDE7DF] text-[#6B0B20] flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-base text-neutral-900">
                        MESSAGE READY
                      </h4>
                      <p className="text-xs text-neutral-600">
                        Thank you! Your note has been registered. You can also reach out on LinkedIn or Email directly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSent(false)}
                        className="text-xs text-[#6B0B20] font-semibold underline pt-2"
                      >
                        Send another note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-[#6B0B20]"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-[#6B0B20]"
                        />
                      </div>

                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-[#6B0B20]"
                      >
                        <option value="Internship / Placement">Internship / Recruitment Opportunity</option>
                        <option value="Academic Collaboration">Academic / Project Collaboration</option>
                        <option value="General Correspondence">General Professional Correspondence</option>
                      </select>

                      <textarea
                        required
                        rows={3}
                        placeholder="Your message or project scope..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-[#6B0B20] resize-none"
                      />

                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#6B0B20] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#540718] transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                      >
                        <span>SUBMIT MESSAGE</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
