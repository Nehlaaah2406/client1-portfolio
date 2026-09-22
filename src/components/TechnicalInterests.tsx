import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Zap, Activity, BatteryCharging, Cpu, GitBranch, Leaf, ChevronsUpDown, Smartphone } from 'lucide-react';
import { TECHNICAL_INTERESTS } from '../data/portfolioData';

export const TechnicalInterests: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Default to 01 (Power Systems & Grid Operations)
  
  // Touch gesture tracking for mobile swipe/scroll
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isSwiping = useRef<boolean>(false);
  const mobileRailRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  const getIcon = (key: string) => {
    switch (key) {
      case 'zap':
        return <Zap className="w-5 h-5 text-[#6B0B20]" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-[#6B0B20]" />;
      case 'battery-charging':
        return <BatteryCharging className="w-5 h-5 text-[#6B0B20]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#6B0B20]" />;
      case 'git-branch':
        return <GitBranch className="w-5 h-5 text-[#6B0B20]" />;
      case 'leaf':
        return <Leaf className="w-5 h-5 text-[#6B0B20]" />;
      default:
        return <Zap className="w-5 h-5 text-[#6B0B20]" />;
    }
  };

  const activeItem = TECHNICAL_INTERESTS[selectedIndex];
  const totalItems = TECHNICAL_INTERESTS.length; // 6 items: 01 to 06
  const startAngle = -50;
  const endAngle = 50;

  // Next / Previous helpers
  const goNext = () => {
    setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  const goPrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  // Touch event handlers for mobile phone swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current || touchStartX.current === null || touchStartY.current === null) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    // Minimum swipe threshold of 45px
    if (Math.abs(diffX) > 45 || Math.abs(diffY) > 45) {
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        if (diffX > 0) {
          goNext();
        } else {
          goPrev();
        }
      } else {
        // Vertical swipe/scroll gesture inside dial
        if (diffY > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
      // Reset after trigger to avoid rapid runaway cycling
      touchStartX.current = null;
      touchStartY.current = null;
      isSwiping.current = false;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Wheel scroll event (works on phone desktop simulators, trackpads & mouse wheels)
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 25 || Math.abs(e.deltaX) > 25) {
      if (e.deltaY > 0 || e.deltaX > 0) {
        setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
      } else {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }
  };

  // Sync mobile horizontal scroll rail when selectedIndex changes
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (mobileRailRef.current) {
      const activeChild = mobileRailRef.current.children[selectedIndex] as HTMLElement;
      if (activeChild) {
        activeChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedIndex]);

  // Handle native scroll on mobile snap rail
  const handleRailScroll = () => {
    if (!mobileRailRef.current) return;
    const container = mobileRailRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.75;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx >= 0 && newIdx < totalItems && newIdx !== selectedIndex) {
      setSelectedIndex(newIdx);
    }
  };

  return (
    <section id="interests" className="py-20 sm:py-28 bg-[#FAFAFA] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B0B20] block mb-2 font-mono-tech">
              03 / ENGINEERING HORIZONS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
              TECHNICAL INTERESTS<span className="text-[#6B0B20]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              Interactive radial navigation showcasing key academic focal domains and technologies. Click or hover any index along the arc.
            </p>
          </div>
        </div>

        {/* Minimal Circular Arc Dial Showcase with Touch Swipe & Wheel Support */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          className="relative w-full rounded-3xl bg-white border border-[#E5DDD2] shadow-[0_4px_24px_rgba(0,0,0,0.03)] py-10 sm:py-16 px-4 sm:px-12 min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden touch-pan-y"
        >
          
          {/* Subtle architectural background dots & crosshairs */}
          <div className="absolute top-5 left-6 sm:left-8 text-[11px] font-mono-tech text-neutral-400">
            RADIAL DIAL // 01–06
          </div>
          
          <div className="hidden sm:block absolute bottom-6 right-8 text-[11px] font-mono-tech text-neutral-400">
            HOVER OR SCROLL TO INSPECT
          </div>

          <div className="relative w-full max-w-4xl h-[420px] sm:h-[460px] flex items-center justify-center">
            
            {/* SVG Large Circular Arc Track with Ticks & Nodes */}
            <svg
              className="absolute -left-6 xs:left-0 sm:left-4 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] md:w-[500px] h-[320px] sm:h-[440px] md:h-[500px] pointer-events-none"
              viewBox="0 0 500 500"
              fill="none"
            >
              {/* Outer faint guideline circle */}
              <circle
                cx="0"
                cy="250"
                r="240"
                stroke="#E5DDD2"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Main crisp arc line */}
              <path
                d="M 154.2 66.2 A 240 240 0 0 1 154.2 433.8"
                stroke="#C4B5A2"
                strokeWidth="1.5"
              />

              {/* Little node dots along the arc with expanded hover hitboxes */}
              {TECHNICAL_INTERESTS.map((_, idx) => {
                const angleDeg = startAngle + (idx / (totalItems - 1)) * (endAngle - startAngle);
                const angleRad = (angleDeg * Math.PI) / 180;
                const cx = 240 * Math.cos(angleRad);
                const cy = 250 + 240 * Math.sin(angleRad);
                const isSelected = selectedIndex === idx;

                return (
                  <g
                    key={idx}
                    className="pointer-events-auto cursor-pointer"
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onMouseMove={() => setSelectedIndex(idx)}
                    onClick={() => setSelectedIndex(idx)}
                  >
                    {/* Generous invisible hit target for easy touch & mouse pointing */}
                    <circle cx={cx} cy={cy} r="26" fill="transparent" />
                    
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 5 : 3}
                      fill={isSelected ? "#6B0B20" : "#C4B5A2"}
                      className="transition-all duration-200"
                    />
                    {isSelected && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="10"
                        stroke="#6B0B20"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.6"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Interactive Arc Number Labels with generous touch & hover hitboxes */}
            <div className="absolute -left-6 xs:left-0 sm:left-4 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] md:w-[500px] h-[320px] sm:h-[440px] md:h-[500px] pointer-events-none">
              {TECHNICAL_INTERESTS.map((_, idx) => {
                const angleDeg = startAngle + (idx / (totalItems - 1)) * (endAngle - startAngle);
                const angleRad = (angleDeg * Math.PI) / 180;
                
                const r = 240;
                const cx = r * Math.cos(angleRad);
                const cy = 250 + r * Math.sin(angleRad);

                const leftPct = (cx / 500) * 100;
                const topPct = (cy / 500) * 100;

                const isSelected = selectedIndex === idx;
                const numStr = `0${idx + 1}`;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onMouseMove={() => setSelectedIndex(idx)}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: `translate(-115%, -50%) rotate(${angleDeg * 0.7}deg)`
                    }}
                    className={`absolute pointer-events-auto cursor-pointer font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl select-none transition-all duration-200 p-3 sm:p-4 rounded-full focus:outline-hidden ${
                      isSelected
                        ? 'text-neutral-950 scale-110 opacity-100 drop-shadow-xs'
                        : 'text-neutral-300 hover:text-neutral-700 opacity-60 hover:opacity-100 scale-95'
                    }`}
                    aria-label={`Select domain ${numStr}`}
                  >
                    {numStr}
                  </button>
                );
              })}
            </div>

            {/* Center Focus Area: Large Active Number + Title & Subtitle */}
            <div className="relative ml-20 xs:ml-28 sm:ml-40 md:ml-64 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-10 z-10 pr-2">
              
              {/* Massive Active Number with Minimalist High-Contrast Cut */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center select-none"
                >
                  <span className="font-display font-black text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-neutral-900 leading-none">
                    0{selectedIndex + 1}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Title and Description matching reference style */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-[240px] xs:max-w-xs sm:max-w-sm space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#EDE7DF] text-[#6B0B20] flex items-center justify-center">
                      {getIcon(activeItem.iconKey)}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-widest text-[#6B0B20] font-bold">
                      DOMAIN 0{selectedIndex + 1} OF 06
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-2xl text-neutral-950 uppercase tracking-tight leading-snug">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs sm:text-base text-neutral-600 leading-relaxed font-medium">
                    {activeItem.subtitle}
                  </p>

                  <div className="pt-1 flex items-center space-x-2 text-xs font-mono-tech text-[#6B0B20] font-semibold">
                    <span>ACADEMIC FOCUS</span>
                    <span>→</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

          {/* Bottom Quick Step Controls (Arrows on phone + Indicators) */}
          <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
            <button
              type="button"
              onClick={goPrev}
              className="sm:hidden p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 cursor-pointer"
              aria-label="Previous domain"
            >
              <span className="text-xs font-mono font-bold">‹</span>
            </button>

            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {TECHNICAL_INTERESTS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onMouseMove={() => setSelectedIndex(idx)}
                  className="h-2 py-2 px-1 flex items-center cursor-pointer transition-all duration-200"
                  aria-label={`Jump to domain 0${idx + 1}`}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      selectedIndex === idx ? 'w-6 sm:w-8 bg-[#6B0B20]' : 'w-2 sm:w-2.5 bg-[#C4B5A2] hover:bg-[#8E7C68]'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="sm:hidden p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 cursor-pointer"
              aria-label="Next domain"
            >
              <span className="text-xs font-mono font-bold">›</span>
            </button>
          </div>

        </div>

        {/* Mobile-Friendly Swipe / Scroll Rail (Visible on phones) */}
        <div className="sm:hidden mt-4">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-[11px] font-mono-tech text-neutral-500 flex items-center space-x-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#6B0B20]" />
              <span>Scroll horizontally or swipe dial</span>
            </span>
            <span className="text-[11px] font-mono-tech font-bold text-neutral-700">
              0{selectedIndex + 1} / 06
            </span>
          </div>

          <div
            ref={mobileRailRef}
            onScroll={handleRailScroll}
            className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory px-1"
          >
            {TECHNICAL_INTERESTS.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`snap-center shrink-0 w-[72%] p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#6B0B20] text-white border-[#6B0B20] shadow-sm'
                      : 'bg-white text-neutral-700 border-[#E5DDD2]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#EDE7DF]' : 'text-[#8E7C68]'}`}>
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-neutral-400">
                      Domain
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm leading-tight line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <p className={`text-xs line-clamp-2 ${isSelected ? 'text-neutral-200' : 'text-neutral-500'}`}>
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Domain Hover Chips for instantaneous mouse exploration */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {TECHNICAL_INTERESTS.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onMouseEnter={() => setSelectedIndex(idx)}
                onMouseMove={() => setSelectedIndex(idx)}
                onClick={() => setSelectedIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono-tech transition-all duration-200 cursor-pointer flex items-center space-x-2 border ${
                  isSelected
                    ? 'bg-[#6B0B20] text-white border-[#6B0B20] shadow-xs scale-105'
                    : 'bg-white text-neutral-600 border-[#E5DDD2] hover:border-[#6B0B20] hover:text-[#1D1416]'
                }`}
              >
                <span className={isSelected ? 'text-[#EDE7DF] font-bold' : 'text-[#8E7C68]'}>
                  0{idx + 1}
                </span>
                <span className="font-semibold">{item.title}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
