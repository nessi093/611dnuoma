import React from 'react';

/**
 * Official College Seal of Danube Institute of National University
 * "Odessa Maritime Academy" (ДФК НУ ОМА).
 * Re-engineered with exact trigonometric alignment so every letter is straight,
 * upright, and perfectly proportioned to match the real official emblem.
 */
export const CollegeSealSVG: React.FC<{ size?: number; className?: string }> = ({
  size = 72,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative select-none flex-shrink-0 inline-flex items-center justify-center rounded-full bg-white shadow-lg p-0.5 border border-sky-400/80 ${className}`}
    >
      <svg viewBox="0 0 500 500" className="w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="innerGlobeClip">
      <circle cx="250" cy="250" r="148" />
    </clipPath>
  </defs>

  
  <circle cx="250" cy="250" r="245" fill="#ffffff" stroke="#0d3570" strokeWidth="5" />
  
  
  <circle cx="250" cy="250" r="237" fill="none" stroke="#0d3570" strokeWidth="3" strokeDasharray="6,4" />
  <circle cx="250" cy="250" r="228" fill="none" stroke="#0d3570" strokeWidth="1.8" />

  
  <g id="topTypography">
    <text x="73.84" y="178.82" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(292.00, 73.84, 178.82)">D</text>
    <text x="78.62" y="167.97" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(295.58, 78.62, 167.97)">A</text>
    <text x="84.08" y="157.43" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(299.16, 84.08, 157.43)">N</text>
    <text x="90.18" y="147.25" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(302.74, 90.18, 147.25)">U</text>
    <text x="96.90" y="137.48" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(306.32, 96.90, 137.48)">B</text>
    <text x="104.23" y="128.14" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(309.89, 104.23, 128.14)">E</text>
    <text x="120.55" y="110.92" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(317.05, 120.55, 110.92)">I</text>
    <text x="129.48" y="103.11" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(320.63, 129.48, 103.11)">N</text>
    <text x="138.89" y="95.88" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(324.21, 138.89, 95.88)">S</text>
    <text x="148.72" y="89.24" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(327.79, 148.72, 89.24)">T</text>
    <text x="158.96" y="83.23" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(331.37, 158.96, 83.23)">I</text>
    <text x="169.54" y="77.88" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(334.95, 169.54, 77.88)">T</text>
    <text x="180.45" y="73.19" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(338.53, 180.45, 73.19)">U</text>
    <text x="191.62" y="69.19" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(342.11, 191.62, 69.19)">T</text>
    <text x="203.02" y="65.90" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(345.68, 203.02, 65.90)">E</text>
    <text x="226.33" y="61.48" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(352.84, 226.33, 61.48)">O</text>
    <text x="238.14" y="60.37" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(356.42, 238.14, 60.37)">F</text>
    <text x="261.86" y="60.37" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(363.58, 261.86, 60.37)">N</text>
    <text x="273.67" y="61.48" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(367.16, 273.67, 61.48)">A</text>
    <text x="285.40" y="63.33" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(370.74, 285.40, 63.33)">T</text>
    <text x="296.98" y="65.90" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(374.32, 296.98, 65.90)">I</text>
    <text x="308.38" y="69.19" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(377.89, 308.38, 69.19)">O</text>
    <text x="319.55" y="73.19" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(381.47, 319.55, 73.19)">N</text>
    <text x="330.46" y="77.88" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(385.05, 330.46, 77.88)">A</text>
    <text x="341.04" y="83.23" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(388.63, 341.04, 83.23)">L</text>
    <text x="361.11" y="95.88" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(395.79, 361.11, 95.88)">U</text>
    <text x="370.52" y="103.11" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(399.37, 370.52, 103.11)">N</text>
    <text x="379.45" y="110.92" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(402.95, 379.45, 110.92)">I</text>
    <text x="387.88" y="119.28" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(406.53, 387.88, 119.28)">V</text>
    <text x="395.77" y="128.14" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(410.11, 395.77, 128.14)">E</text>
    <text x="403.10" y="137.48" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(413.68, 403.10, 137.48)">R</text>
    <text x="409.82" y="147.25" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(417.26, 409.82, 147.25)">S</text>
    <text x="415.92" y="157.43" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(420.84, 415.92, 157.43)">I</text>
    <text x="421.38" y="167.97" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(424.42, 421.38, 167.97)">T</text>
    <text x="426.16" y="178.82" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20.5" textAnchor="middle" dominantBaseline="central" transform="rotate(428.00, 426.16, 178.82)">Y</text>
  </g>
  <g id="bottomTypography">
    <text x="100.28" y="366.98" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(52.00, 100.28, 366.98)">«</text>
    <text x="109.54" y="377.95" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(47.67, 109.54, 377.95)">O</text>
    <text x="119.61" y="388.20" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(43.33, 119.61, 388.20)">D</text>
    <text x="130.43" y="397.66" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(39.00, 130.43, 397.66)">E</text>
    <text x="141.93" y="406.27" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(34.67, 141.93, 406.27)">S</text>
    <text x="154.04" y="413.99" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(30.33, 154.04, 413.99)">S</text>
    <text x="166.71" y="420.77" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(26.00, 166.71, 420.77)">A</text>
    <text x="193.39" y="431.37" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(17.33, 193.39, 431.37)">M</text>
    <text x="207.26" y="435.13" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(13.00, 207.26, 435.13)">A</text>
    <text x="221.37" y="437.83" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(8.67, 221.37, 437.83)">R</text>
    <text x="235.64" y="439.46" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(4.33, 235.64, 439.46)">I</text>
    <text x="250.00" y="440.00" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(0.00, 250.00, 440.00)">T</text>
    <text x="264.36" y="439.46" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-4.33, 264.36, 439.46)">I</text>
    <text x="278.63" y="437.83" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-8.67, 278.63, 437.83)">M</text>
    <text x="292.74" y="435.13" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-13.00, 292.74, 435.13)">E</text>
    <text x="320.15" y="426.58" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-21.67, 320.15, 426.58)">A</text>
    <text x="333.29" y="420.77" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-26.00, 333.29, 420.77)">C</text>
    <text x="345.96" y="413.99" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-30.33, 345.96, 413.99)">A</text>
    <text x="358.07" y="406.27" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-34.67, 358.07, 406.27)">D</text>
    <text x="369.57" y="397.66" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-39.00, 369.57, 397.66)">E</text>
    <text x="380.39" y="388.20" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-43.33, 380.39, 388.20)">M</text>
    <text x="390.46" y="377.95" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-47.67, 390.46, 377.95)">Y</text>
    <text x="399.72" y="366.98" fill="#0d3570" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23.5" textAnchor="middle" dominantBaseline="central" transform="rotate(-52.00, 399.72, 366.98)">»</text>
  </g>

  
  <circle cx="250" cy="250" r="150" fill="#ffffff" stroke="#0d3570" strokeWidth="4" />

  
  <g clipPath="url(#innerGlobeClip)">
    
    <circle cx="250" cy="250" r="148" fill="#1e81c9" />

    
    <g stroke="#ffffff" strokeWidth="1.8" fill="none" opacity="0.85">
      <line x1="102" y1="165" x2="398" y2="165" />
      <line x1="102" y1="205" x2="398" y2="205" />
      <line x1="102" y1="245" x2="398" y2="245" strokeWidth="2" />
      <line x1="102" y1="285" x2="398" y2="285" />
      <line x1="102" y1="325" x2="398" y2="325" />
      
      
      <line x1="250" y1="102" x2="250" y2="398" strokeDasharray="4,3" />
      <ellipse cx="250" cy="250" rx="140" ry="148" />
      <ellipse cx="250" cy="250" rx="98" ry="148" />
      <ellipse cx="250" cy="250" rx="52" ry="148" />
    </g>

    
    
    <rect x="100" y="238" width="300" height="36" fill="#52ade8" stroke="#0d3570" strokeWidth="1.5" />
    
    <rect x="100" y="274" width="300" height="36" fill="#fed727" stroke="#0d3570" strokeWidth="1.5" />

    
    <g transform="translate(158, 276)">
      
      <circle cx="0" cy="-28" r="6" fill="none" stroke="#0d3570" strokeWidth="3" />
      
      <path d="M -16,-18 L 16,-18" stroke="#0d3570" strokeWidth="4.5" strokeLinecap="round" />
      
      <path d="M 0,-22 L 0,22" stroke="#0d3570" strokeWidth="4.5" />
      
      <path d="M -20,8 C -20,28 20,28 20,8" fill="none" stroke="#0d3570" strokeWidth="4.5" strokeLinecap="round" />
      
      <polygon points="-21,6 -15,13 -25,12" fill="#0d3570" />
      <polygon points="21,6 15,13 25,12" fill="#0d3570" />
    </g>

    
    <g transform="translate(260, 140)">
      
      <polygon points="-45,128 -12,85 -12,126" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="-68,131 -15,62 -15,124" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="-92,135 -18,42 -18,122" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />

      
      
      <polygon points="-12,18 40,24 36,46 -15,40" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="-15,49 42,55 38,77 -18,71" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="-18,81 44,87 40,109 -22,103" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="-22,113 46,119 41,143 -26,137" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />

      
      
      <polygon points="50,8 98,14 94,36 46,30" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="46,39 100,45 96,69 42,63" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="42,73 102,79 97,105 38,99" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="38,109 104,115 99,141 33,135" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />

      
      
      <polygon points="108,28 144,34 140,52 104,46" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="104,56 146,62 142,82 100,76" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />
      
      <polygon points="100,86 148,92 143,114 96,108" fill="#ffffff" stroke="#0d3570" strokeWidth="2.5" strokeLinejoin="round" />

      
      
      <polygon points="-108,142 -35,160 120,160 152,142" fill="#fed727" stroke="#0d3570" strokeWidth="2.5" />
      
      <polygon points="-104,140 -32,158 116,158 148,140" fill="#ffffff" stroke="#0d3570" strokeWidth="2" />
      
      <path d="M -35,160 C -2,192 24,220 45,235 C 68,220 95,192 120,160 Z" fill="#ffffff" stroke="#0d3570" strokeWidth="3" />
      <line x1="-33" y1="160" x2="118" y2="160" stroke="#0d3570" strokeWidth="2" />
    </g>

    
    <g transform="translate(250, 396)">
      <path d="M -85,-10 C -45,-26 -12,-12 0,0 C 12,-12 45,-26 85,-10 L 80,14 C 42,-2 12,-2 0,8 C -12,-2 -42,-2 -80,14 Z" fill="#ffffff" stroke="#0d3570" strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M -78,-2 C -42,-16 -12,-4 0,6 C 12,-4 42,-16 78,-2" fill="none" stroke="#0d3570" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="18" stroke="#0d3570" strokeWidth="3.2" />
    </g>
  </g>

  
  <circle cx="250" cy="250" r="150" fill="none" stroke="#0d3570" strokeWidth="4.5" />
</svg>
    </div>
  );
};

/**
 * State Emblem: Ukrainian Golden Trident inside navy & gold roundel
 */
export const TridentBadgeSVG: React.FC<{ size?: number; className?: string }> = ({
  size = 54,
  className = '',
}) => {
  return (
    <div style={{ width: size, height: size }} className={`relative select-none flex-shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="goldTrident" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="46" fill="url(#shieldGrad)" stroke="#fbbf24" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,2" />

        <g transform="translate(50, 48) scale(0.68)">
          <path
            d="M 0,-34 L 5,-15 L 2,-15 L 2,24 L -2,24 L -2,-15 L -5,-15 Z"
            fill="url(#goldTrident)"
            stroke="#78350f"
            strokeWidth="0.8"
          />
          <path
            d="M -18,-24 C -18,-10 -15,10 -2,18 L -2,12 C -12,6 -13,-5 -13,-18 L -9,-14 L -9,-22 Z"
            fill="url(#goldTrident)"
            stroke="#78350f"
            strokeWidth="0.8"
          />
          <path
            d="M 18,-24 C 18,-10 15,10 2,18 L 2,12 C 12,6 13,-5 13,-18 L 9,-14 L 9,-22 Z"
            fill="url(#goldTrident)"
            stroke="#78350f"
            strokeWidth="0.8"
          />
          <rect x="-10" y="24" width="20" height="4" rx="1.5" fill="url(#goldTrident)" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Cadet 611 Group Nautical Emblem Badge
 */
export const CadetGroupBadgeSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#071d38] via-[#0f3460] to-[#071d38] border-2 border-amber-400 shadow-xl ${className}`}
    >
      <span className="text-amber-400 text-2xl animate-pulse">⚓</span>
      <div className="flex flex-col text-left leading-tight">
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest font-mono">
          Курсанти
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            611
          </span>
          <span className="text-sm font-black text-white uppercase tracking-wider font-mono">
            ГРУПА
          </span>
        </div>
      </div>
    </div>
  );
};
