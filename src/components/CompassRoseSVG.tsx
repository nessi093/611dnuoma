import React, { useState, useEffect } from 'react';

interface CompassRoseSVGProps {
  size?: number;
  className?: string;
  showCoordinates?: boolean;
}

export const CompassRoseSVG: React.FC<CompassRoseSVGProps> = ({
  size = 180,
  className = '',
  showCoordinates = true,
}) => {
  const [needleAngle, setNeedleAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate angle from center of screen to mouse pointer
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rad = Math.atan2(e.clientY - cy, e.clientX - cx);
      const deg = (rad * 180) / Math.PI + 90;
      setNeedleAngle(deg * 0.15); // subtle magnetic pull
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div style={{ width: size, height: size }} className="relative drop-shadow-xl">
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="brassCasing" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#d4af37" />
              <stop offset="85%" stopColor="#854d0e" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>

            <radialGradient id="dialFace" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f1f38" />
              <stop offset="85%" stopColor="#071224" />
              <stop offset="100%" stopColor="#030812" />
            </radialGradient>
          </defs>

          {/* Outer Heavy Brass Casing */}
          <circle cx="120" cy="120" r="114" fill="url(#brassCasing)" stroke="#3f1e04" strokeWidth="3" />
          <circle cx="120" cy="120" r="104" fill="none" stroke="#fef08a" strokeWidth="2" />
          <circle cx="120" cy="120" r="100" fill="url(#dialFace)" stroke="#1e293b" strokeWidth="2" />

          {/* Compass Dial Degree Marks */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = i * 10;
            const isMajor = angle % 90 === 0;
            const isMedium = angle % 30 === 0;
            const length = isMajor ? 12 : isMedium ? 8 : 4;
            const strokeColor = isMajor ? '#f59e0b' : '#94a3b8';
            return (
              <line
                key={i}
                x1="120"
                y1={100 - length}
                x2="120"
                y2="100"
                stroke={strokeColor}
                strokeWidth={isMajor ? 2.5 : isMedium ? 1.5 : 1}
                transform={`rotate(${angle} 120 120)`}
              />
            );
          })}

          {/* 8-Point Compass Star Rays */}
          {/* Ordinal points (NE, SE, SW, NW) */}
          <g transform="rotate(45 120 120)" opacity="0.6">
            <polygon points="120,40 125,120 120,120" fill="#d4af37" />
            <polygon points="120,40 115,120 120,120" fill="#78350f" />
            <polygon points="120,200 125,120 120,120" fill="#d4af37" />
            <polygon points="120,200 115,120 120,120" fill="#78350f" />
            <polygon points="40,120 120,125 120,120" fill="#d4af37" />
            <polygon points="40,120 120,115 120,120" fill="#78350f" />
            <polygon points="200,120 120,125 120,120" fill="#d4af37" />
            <polygon points="200,120 120,115 120,120" fill="#78350f" />
          </g>

          {/* Principal points (N, E, S, W) */}
          <g>
            {/* North Point */}
            <polygon points="120,24 127,120 120,120" fill="#ef4444" />
            <polygon points="120,24 113,120 120,120" fill="#991b1b" />
            {/* South Point */}
            <polygon points="120,216 127,120 120,120" fill="#d4af37" />
            <polygon points="120,216 113,120 120,120" fill="#78350f" />
            {/* East Point */}
            <polygon points="216,120 120,127 120,120" fill="#d4af37" />
            <polygon points="216,120 120,113 120,120" fill="#78350f" />
            {/* West Point */}
            <polygon points="24,120 120,127 120,120" fill="#d4af37" />
            <polygon points="24,120 120,113 120,120" fill="#78350f" />
          </g>

          {/* Cardinal Letters */}
          <text x="120" y="44" textAnchor="middle" fill="#ef4444" fontSize="15" fontWeight="900" fontFamily="'Cinzel', serif">N</text>
          <text x="198" y="125" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="800" fontFamily="'Cinzel', serif">E</text>
          <text x="120" y="202" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="800" fontFamily="'Cinzel', serif">S</text>
          <text x="42" y="125" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="800" fontFamily="'Cinzel', serif">W</text>

          {/* Center Swiveling Magnetic Needle (Animated) */}
          <g
            className="transition-transform duration-500 ease-out animate-compass-needle"
            style={{
              transformOrigin: '120px 120px',
              transform: `rotate(${needleAngle}deg)`,
            }}
          >
            {/* Red North Pointer */}
            <polygon points="120,38 124,120 116,120" fill="#dc2626" />
            <polygon points="120,38 120,120 116,120" fill="#b91c1c" />
            <circle cx="120" cy="50" r="2" fill="#ffffff" />
            {/* Blue South Pointer */}
            <polygon points="120,202 124,120 116,120" fill="#0284c7" />
            <polygon points="120,202 120,120 116,120" fill="#0369a1" />
          </g>

          {/* Center Brass Cap Pivot */}
          <circle cx="120" cy="120" r="10" fill="url(#brassCasing)" stroke="#3f1e04" strokeWidth="1.5" />
          <circle cx="120" cy="120" r="4" fill="#fef08a" />
        </svg>
      </div>

      {showCoordinates && (
        <div className="mt-2 text-center text-xs text-amber-300 font-mono tracking-wider">
          <div>45°20′49″ N 28°50′12″ E</div>
          <div className="text-[10px] text-slate-400 font-sans">Ізмаїл • Дунай • Проспект Миру, 9</div>
        </div>
      )}
    </div>
  );
};
