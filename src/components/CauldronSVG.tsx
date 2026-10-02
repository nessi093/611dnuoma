import React, { useState } from 'react';
import { playBubbleSound } from '../utils/audio';

interface CauldronSVGProps {
  className?: string;
  isStirring?: boolean;
  onStir?: () => void;
}

export const CauldronSVG: React.FC<CauldronSVGProps> = ({
  className = '',
  isStirring: externalStirring,
  onStir,
}) => {
  const [internalStirring, setInternalStirring] = useState(false);
  const stirring = externalStirring ?? internalStirring;

  const handleCauldronClick = () => {
    setInternalStirring(true);
    playBubbleSound();
    if (onStir) onStir();
    setTimeout(() => setInternalStirring(false), 1200);
  };

  return (
    <div
      onClick={handleCauldronClick}
      title="Натисніть на казан, щоб помішати юшку!"
      className={`relative inline-block cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
      <svg
        viewBox="0 0 500 440"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Iron Kettle Gradient */}
          <radialGradient id="cauldronBody" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2a3342" />
            <stop offset="50%" stopColor="#18202c" />
            <stop offset="90%" stopColor="#0d131c" />
            <stop offset="100%" stopColor="#070a0e" />
          </radialGradient>

          <linearGradient id="ironRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a222d" />
            <stop offset="25%" stopColor="#48566a" />
            <stop offset="50%" stopColor="#8395a7" />
            <stop offset="75%" stopColor="#48566a" />
            <stop offset="100%" stopColor="#1a222d" />
          </linearGradient>

          {/* Golden Broth Gradient */}
          <radialGradient id="yushkaBroth" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="80%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </radialGradient>

          {/* Hearth Fire Gradients */}
          <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f97316" />
            <stop offset="80%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Steam Soft Filter */}
          <filter id="steamBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Campfire Firewood Logs */}
        <g id="firewood" opacity="0.95">
          <ellipse cx="250" cy="390" rx="160" ry="25" fill="#1e140d" opacity="0.8" />
          {/* Wood logs */}
          <polygon points="120,405 380,380 375,395 115,420" fill="#3e2723" stroke="#27150d" strokeWidth="2" />
          <polygon points="140,385 360,410 355,425 135,400" fill="#4e342e" stroke="#27150d" strokeWidth="2" />
          <polygon points="210,375 290,375 285,425 215,425" fill="#3e2723" />
          
          {/* Glowing coals and embers */}
          <circle cx="210" cy="395" r="9" fill="#ef4444" opacity="0.9" />
          <circle cx="250" cy="400" r="14" fill="#f59e0b" opacity="0.95" />
          <circle cx="280" cy="390" r="10" fill="#f97316" opacity="0.9" />
          <circle cx="235" cy="405" r="6" fill="#fef08a" />
          <circle cx="310" cy="402" r="7" fill="#ea580c" />
        </g>

        {/* Animated Hearth Fire Flames */}
        <g id="flames" className="animate-flame" style={{ transformOrigin: '250px 390px' }}>
          {/* Outer glow */}
          <ellipse cx="250" cy="380" rx="140" ry="45" fill="url(#fireGlow)" opacity="0.45" filter="url(#steamBlur)" />
          
          {/* Left flame tongue */}
          <path
            d="M170,390 Q180,320 205,335 Q220,290 235,340 Q210,390 170,390 Z"
            fill="#ea580c"
            opacity="0.85"
          />
          {/* Center main flame */}
          <path
            d="M200,395 Q230,270 250,260 Q270,270 300,395 Q250,380 200,395 Z"
            fill="#f59e0b"
            opacity="0.9"
          />
          {/* Inner hot yellow core */}
          <path
            d="M225,395 Q245,290 250,285 Q260,290 275,395 Q250,385 225,395 Z"
            fill="#fef08a"
            opacity="0.95"
          />
          {/* Right flame tongue */}
          <path
            d="M265,390 Q280,320 305,325 Q325,310 330,390 Q300,385 265,390 Z"
            fill="#f97316"
            opacity="0.85"
          />
          {/* Flying hot sparks */}
          <circle cx="230" cy="270" r="2.5" fill="#fef08a" className="animate-bubble-1" />
          <circle cx="270" cy="250" r="2" fill="#f59e0b" className="animate-bubble-2" />
          <circle cx="210" cy="240" r="1.5" fill="#ef4444" className="animate-bubble-3" />
        </g>

        {/* Cauldron Hanging Chain & Tripod Legs */}
        <g id="tripod" stroke="#334155" strokeWidth="6" strokeLinecap="round">
          <line x1="250" y1="20" x2="80" y2="420" />
          <line x1="250" y1="20" x2="420" y2="420" />
          <line x1="250" y1="20" x2="250" y2="425" opacity="0.6" />
          {/* Top tripod ring */}
          <circle cx="250" cy="22" r="12" fill="none" stroke="#d4af37" strokeWidth="4" />
          {/* Heavy chain links hanging down */}
          <ellipse cx="250" cy="46" rx="5" ry="9" fill="none" stroke="#64748b" strokeWidth="4" />
          <ellipse cx="250" cy="66" rx="5" ry="9" fill="none" stroke="#475569" strokeWidth="4" />
          <ellipse cx="250" cy="86" rx="5" ry="9" fill="none" stroke="#64748b" strokeWidth="4" />
          <ellipse cx="250" cy="106" rx="5" ry="9" fill="none" stroke="#475569" strokeWidth="4" />
          <ellipse cx="250" cy="126" rx="5" ry="9" fill="none" stroke="#64748b" strokeWidth="4" />
          {/* S-hook */}
          <path d="M250,136 C240,142 240,154 250,158 C260,162 260,174 250,180" fill="none" stroke="#d4af37" strokeWidth="5" />
        </g>

        {/* Heavy Cast Iron Cauldron Pot */}
        <g id="cauldron-body">
          {/* Cauldron Handle Arch */}
          <path
            d="M 120,200 C 120,130 380,130 380,200"
            fill="none"
            stroke="#64748b"
            strokeWidth="9"
            strokeLinecap="round"
          />
          {/* Handle center grip */}
          <rect x="235" y="145" width="30" height="12" rx="4" fill="#94a3b8" />

          {/* Cauldron Cast Body */}
          <path
            d="M 110,210 C 95,290 130,365 250,370 C 370,365 405,290 390,210 Z"
            fill="url(#cauldronBody)"
            stroke="#0f172a"
            strokeWidth="4"
          />

          {/* Cauldron Outer Ears / Mounts */}
          <circle cx="110" cy="210" r="14" fill="#334155" stroke="#1e293b" strokeWidth="3" />
          <circle cx="110" cy="210" r="6" fill="#0f172a" />
          <circle cx="390" cy="210" r="14" fill="#334155" stroke="#1e293b" strokeWidth="3" />
          <circle cx="390" cy="210" r="6" fill="#0f172a" />

          {/* Cauldron Upper Rim / Flange */}
          <ellipse cx="250" cy="205" rx="145" ry="24" fill="url(#ironRim)" stroke="#1e293b" strokeWidth="3" />

          {/* Hot Yushka Fish Soup Broth */}
          <ellipse cx="250" cy="206" rx="136" ry="19" fill="url(#yushkaBroth)" />

          {/* Golden Broth Ripples & Oil Drops */}
          <g opacity="0.85">
            <ellipse cx="220" cy="205" rx="20" ry="4" fill="#fef08a" opacity="0.6" />
            <ellipse cx="280" cy="207" rx="30" ry="5" fill="#fef08a" opacity="0.4" />
            <ellipse cx="250" cy="204" rx="55" ry="7" fill="none" stroke="#fde047" strokeWidth="1.5" opacity="0.5" />
            
            {/* Pieces of fish & river delights floating */}
            {/* Tender Fish Cut / Fins */}
            <path
              d="M 180,204 Q 192,198 205,203 Q 195,208 180,204 Z"
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
            {/* Fish tail tip */}
            <path
              d="M 310,205 L 325,199 L 322,206 L 326,211 Z"
              fill="#94a3b8"
              stroke="#64748b"
              strokeWidth="0.8"
            />
            {/* Carrot slice */}
            <ellipse cx="230" cy="208" rx="6" ry="3" fill="#ea580c" stroke="#c2410c" strokeWidth="0.8" />
            <ellipse cx="295" cy="204" rx="7" ry="3.5" fill="#f97316" />
            {/* Green dill & bay leaf sprigs */}
            <path d="M 215,202 Q 220,199 226,203" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
            <path d="M 260,206 Q 268,202 274,207" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="270" cy="203" r="1.5" fill="#15803d" />
            <circle cx="195" cy="206" r="1.5" fill="#15803d" />
            {/* Peppercorn */}
            <circle cx="245" cy="208" r="2.2" fill="#1c1917" />
            <circle cx="285" cy="209" r="1.8" fill="#1c1917" />
          </g>

          {/* Broth Simmering Bubbles (Animated SVG) */}
          <g id="soupBubbles">
            <circle cx="225" cy="204" r="5" fill="#fef08a" stroke="#d97706" strokeWidth="1" className="animate-bubble-1" />
            <circle cx="265" cy="206" r="6" fill="#fef9c3" stroke="#f59e0b" strokeWidth="1" className="animate-bubble-2" />
            <circle cx="240" cy="202" r="4" fill="#fef08a" className="animate-bubble-3" />
            <circle cx="290" cy="205" r="4.5" fill="#fef9c3" className="animate-bubble-1" />
            <circle cx="190" cy="204" r="3.5" fill="#fde047" className="animate-bubble-2" />
          </g>

          {/* Wooden Maritime Ladle ("Ополоник 611") */}
          <g
            id="woodenLadle"
            className="transition-transform duration-500 ease-out"
            style={{
              transformOrigin: '320px 200px',
              transform: stirring ? 'rotate(-25deg) translateY(-10px)' : 'rotate(0deg)',
            }}
          >
            {/* Ladle handle */}
            <line
              x1="320"
              y1="200"
              x2="385"
              y2="105"
              stroke="#854d0e"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Brass binding on handle */}
            <rect x="345" y="150" width="8" height="12" rx="2" fill="#d4af37" transform="rotate(-55 345 150)" />
            {/* Ladle bowl resting in broth */}
            <ellipse cx="318" cy="203" rx="16" ry="10" fill="#a16207" stroke="#713f12" strokeWidth="2" />
            <ellipse cx="318" cy="203" rx="11" ry="6" fill="#fef08a" opacity="0.8" />
          </g>
        </g>

        {/* Rising Fragrant Fish Soup Steam (Multi-Layer Animated SVG Paths) */}
        <g id="steamPuffs" filter="url(#steamBlur)" opacity="0.65">
          {/* Steam wave 1 */}
          <path
            className="animate-steam-1"
            d="M 210,185 C 190,140 230,110 205,70 C 185,40 220,15 200,-15"
            fill="none"
            stroke="#ffffff"
            strokeWidth="24"
            strokeLinecap="round"
          />
          {/* Steam wave 2 */}
          <path
            className="animate-steam-2"
            d="M 255,180 C 275,135 240,95 260,60 C 280,25 250,5 270,-20"
            fill="none"
            stroke="#fef3c7"
            strokeWidth="30"
            strokeLinecap="round"
          />
          {/* Steam wave 3 */}
          <path
            className="animate-steam-3"
            d="M 290,185 C 315,145 285,110 305,75 C 320,45 295,20 310,-10"
            fill="none"
            stroke="#ffffff"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </g>

        {/* Front Metal Badge on Cauldron: "611 ГРУПА" - enlarged and bold */}
        <g transform="translate(250, 275)">
          <ellipse cx="0" cy="0" rx="58" ry="24" fill="#141f2e" stroke="#fbbf24" strokeWidth="3" />
          <ellipse cx="0" cy="0" rx="53" ry="20" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="4,2" />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="18"
            fontWeight="900"
            letterSpacing="3"
            fontFamily="'Arial Black', Arial, sans-serif"
          >
            611 ГРУПА
          </text>
        </g>
      </svg>
    </div>
  );
};
