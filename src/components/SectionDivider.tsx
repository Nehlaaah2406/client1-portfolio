import React from 'react';

interface SectionDividerProps {
  className?: string;
  accent?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  accent = false,
}) => {
  return (
    <div
      className={`w-full relative select-none pointer-events-none py-1 sm:py-2 ${className}`}
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Left subtle technical coordinate marker */}
          <span className="text-[10px] font-mono-tech text-[#8E7C68] font-bold select-none leading-none -ml-0.5">
            +
          </span>

          {/* Delicate hairline rule with subtle center gradient */}
          <div className="flex-1 mx-3 h-[1px] bg-gradient-to-r from-[#E5DDD2] via-[#C4B5A2] to-[#E5DDD2]" />

          {/* Subtle midpoint accent */}
          {accent ? (
            <div className="flex items-center space-x-1.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B0B20]" />
            </div>
          ) : (
            <div className="flex items-center space-x-1 px-1.5 opacity-80">
              <span className="w-1 h-1 rounded-full bg-[#8E7C68]" />
            </div>
          )}

          {/* Continuing hairline rule */}
          <div className="flex-1 mx-3 h-[1px] bg-gradient-to-r from-[#E5DDD2] via-[#C4B5A2] to-[#E5DDD2]" />

          {/* Right subtle technical coordinate marker */}
          <span className="text-[10px] font-mono-tech text-[#8E7C68] font-bold select-none leading-none -mr-0.5">
            +
          </span>
        </div>
      </div>
    </div>
  );
};
