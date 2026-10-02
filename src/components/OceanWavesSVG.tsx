import React from 'react';

interface OceanWavesSVGProps {
  className?: string;
  showBuoy?: boolean;
}

export const OceanWavesSVG: React.FC<OceanWavesSVGProps> = ({
  className = '',
  showBuoy = true,
}) => {
  return (
    <div className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}>
      {/* Bobbing Cadet Navigational Buoy & Sailboat on waves */}
      {showBuoy && (
        <div className="absolute right-12 md:right-32 bottom-12 md:bottom-20 z-10 animate-bob">
          <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="buoyRed" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
            </defs>
            {/* Cadet Sailboat */}
            <path d="M 20,68 L 80,68 L 72,82 L 28,82 Z" fill="#1e3a5f" stroke="#d4af37" strokeWidth="2" />
            <line x1="50" y1="68" x2="50" y2="20" stroke="#d4af37" strokeWidth="2.5" />
            {/* White Sails */}
            <path d="M 48,24 L 24,62 L 48,62 Z" fill="#ffffff" opacity="0.9" />
            <path d="M 52,28 L 74,62 L 52,62 Z" fill="#e2e8f0" opacity="0.9" />
            {/* 611 Pennant Flag */}
            <polygon points="50,20 62,24 50,28" fill="#f59e0b" />
            <circle cx="50" cy="74" r="3" fill="#fbbf24" />
          </svg>
        </div>
      )}

      {/* Layer 1: Back Deep Ocean Wave */}
      <svg
        className="w-[120%] -ml-[10%] h-16 md:h-24 animate-wave-2 opacity-50 block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z"
          fill="#0a192f"
        />
      </svg>

      {/* Layer 2: Mid Water Wave */}
      <svg
        className="w-[130%] -ml-[15%] h-14 md:h-20 -mt-8 animate-wave-1 opacity-75 block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L0,120Z"
          fill="#0c2d48"
        />
      </svg>

      {/* Layer 3: Fore Crest Wave with White Sea Foam (Піна / Баранці) */}
      <svg
        className="w-[125%] -ml-[12%] h-12 md:h-18 -mt-6 animate-wave-3 block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="foamGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="20%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#040e1a" />
          </linearGradient>
        </defs>
        {/* Wave base */}
        <path
          d="M0,48L40,58.7C80,69,160,91,240,90.7C320,91,400,69,480,58.7C560,48,640,48,720,58.7C800,69,880,91,960,96C1040,101,1120,91,1200,80C1280,69,1360,59,1400,53.3L1440,48L1440,120L0,120Z"
          fill="url(#foamGradient)"
        />
        {/* Foam Highlights along top crest */}
        <path
          d="M0,48 Q120,70 240,91 Q360,70 480,59 Q600,48 720,59 Q840,90 960,96 Q1080,90 1200,80 Q1320,60 1440,48"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="16,8"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};
