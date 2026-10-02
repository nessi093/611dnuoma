import React, { useState } from 'react';
import { playBubbleSound } from '../utils/audio';

export const SwimmingFishSVG: React.FC = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleWaterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    playBubbleSound();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setBubbles((prev) => [
      ...prev.slice(-8),
      { id: Date.now(), x, y },
      { id: Date.now() + 1, x: x + 12, y: y + 14 },
      { id: Date.now() + 2, x: x - 10, y: y + 20 },
    ]);
  };

  return (
    <div
      onClick={handleWaterClick}
      title="Натисніть на воду, щоб пустити бульбашки!"
      className="relative w-full h-44 sm:h-52 overflow-hidden select-none cursor-pointer bg-gradient-to-b from-[#051326] via-[#072445] to-[#040e1a] border-y border-sky-500/20"
    >
      {/* Layer 1: Back Rolling Ocean Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-40">
        <svg
          className="w-[120%] -ml-[10%] h-12 sm:h-16 animate-wave-2 block"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,25 C180,45 360,5 540,25 C720,45 900,5 1080,25 C1260,45 1380,15 1440,25 L1440,90 L0,90 Z"
            fill="#0b2c52"
          />
        </svg>
      </div>

      {/* Layer 2: Mid Water Wave (Natural smooth filled curve - NO dashed lines!) */}
      <div className="absolute top-3 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-70">
        <svg
          className="w-[125%] -ml-[12%] h-14 sm:h-18 animate-wave-1 block"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,35 C160,15 320,55 480,35 C640,15 800,55 960,35 C1120,15 1280,55 1440,35 L1440,90 L0,90 Z"
            fill="#072d54"
          />
        </svg>
      </div>

      {/* Layer 3: Sailing Boat (Кораблик 611 групи) - Smoothly gliding on the water surface */}
      <div className="absolute top-1 sm:top-2 left-0 z-20 pointer-events-none animate-sail-boat">
        <svg width="88" height="68" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <defs>
            <linearGradient id="cleanBoatHullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="cleanSailCanvasGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          {/* Wooden / White Hull with Maritime Sheer Line */}
          <path
            d="M 12,56 L 98,56 C 104,56 109,61 106,66 L 94,76 C 91,78 86,80 80,80 L 30,80 C 22,80 16,76 14,70 Z"
            fill="url(#cleanBoatHullGrad)"
            stroke="#0f172a"
            strokeWidth="2"
          />
          {/* Gold Sheer Line & Waterline */}
          <line x1="14" y1="65" x2="104" y2="65" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="28" cy="61" r="2" fill="#0f172a" />
          <circle cx="44" cy="61" r="2" fill="#0f172a" />

          {/* Mast and Rigging */}
          <line x1="58" y1="56" x2="58" y2="8" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          <line x1="58" y1="10" x2="106" y2="56" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
          <line x1="58" y1="10" x2="12" y2="56" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />

          {/* Billowing White Mainsail (Заднє вітрило) */}
          <path
            d="M 56,12 L 20,52 C 34,54 46,53 56,50 Z"
            fill="url(#cleanSailCanvasGrad)"
            stroke="#0f326a"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Billowing Jib Sail (Переднє вітрило) */}
          <path
            d="M 60,16 L 94,52 C 82,53 70,52 60,49 Z"
            fill="url(#cleanSailCanvasGrad)"
            stroke="#0f326a"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          {/* Cadet 611 Gold Pennant Flag at Mast Top */}
          <polygon points="58,8 74,12 58,16" fill="#f59e0b" stroke="#b45309" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Underwater Life Section (Рятувальні дунайські рибки) */}
      {/* Fish 1: Danube Pikeperch / Судак */}
      <div className="absolute top-18 sm:top-20 -left-28 z-20 pointer-events-none animate-swim-fish-1">
        <svg width="98" height="48" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
          <defs>
            <linearGradient id="sudakGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="35%" stopColor="#64748b" />
              <stop offset="75%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          {/* Fish Torpedo Body */}
          <path
            d="M 142,40 C 114,18 58,18 20,40 C 58,62 114,62 142,40 Z"
            fill="url(#sudakGrad3)"
            stroke="#1e293b"
            strokeWidth="1.8"
          />
          {/* Spiky Dorsal Fin */}
          <path d="M 58,22 L 72,6 L 86,13 L 102,8 L 114,24 Z" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          {/* Natural Swishing Tail Fin */}
          <g className="animate-tail-swish">
            <path
              d="M 22,40 L 4,18 Q 15,40 4,62 Z"
              fill="#475569"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
          </g>
          {/* Pectoral Fin */}
          <path d="M 102,42 Q 86,56 92,63 Q 106,52 102,42 Z" fill="#94a3b8" stroke="#334155" strokeWidth="1" opacity="0.85" />
          {/* Eye */}
          <circle cx="132" cy="35" r="4.5" fill="#fef08a" stroke="#0f172a" strokeWidth="1.2" />
          <circle cx="133" cy="35" r="2.2" fill="#020617" />
          {/* Gill Arch */}
          <path d="M 115,26 Q 110,40 116,54" fill="none" stroke="#475569" strokeWidth="2" />
          {/* Delicate Scales Pattern */}
          <path d="M 72,30 Q 77,40 72,50 M 86,28 Q 91,38 86,48" fill="none" stroke="#475569" strokeWidth="1.2" opacity="0.6" />
        </svg>
      </div>

      {/* Fish 2: Golden Danube Carp / Короп */}
      <div className="absolute top-26 sm:top-30 -left-28 z-20 pointer-events-none animate-swim-fish-2">
        <svg width="86" height="44" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
          <defs>
            <linearGradient id="carpGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="40%" stopColor="#d97706" />
              <stop offset="80%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>

          {/* Rounded Carp Body */}
          <path
            d="M 136,40 C 104,14 48,16 18,40 C 48,64 104,66 136,40 Z"
            fill="url(#carpGrad3)"
            stroke="#78350f"
            strokeWidth="1.8"
          />
          {/* Dorsal Fin */}
          <path d="M 52,18 C 68,8 96,10 112,22 Z" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          {/* Natural Swishing Tail Fin */}
          <g className="animate-carp-tail-swish">
            <path
              d="M 20,40 L 2,16 C 14,36 14,44 2,64 Z"
              fill="#b45309"
              stroke="#78350f"
              strokeWidth="1.5"
            />
          </g>
          {/* Eye */}
          <circle cx="126" cy="34" r="4.5" fill="#fef08a" stroke="#451a03" strokeWidth="1.2" />
          <circle cx="127" cy="34" r="2.2" fill="#09090b" />
          {/* Barbels (Вуса коропа) */}
          <path d="M 135,44 Q 142,53 136,59" stroke="#d97706" strokeWidth="1.8" fill="none" />
          {/* Golden Scales Highlights */}
          <path d="M 60,30 Q 66,40 60,50 M 75,28 Q 81,38 75,48 M 90,30 Q 96,40 90,50" fill="none" stroke="#b45309" strokeWidth="1.4" opacity="0.6" />
        </svg>
      </div>

      {/* Floating Interactive Bubbles on click */}
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute w-4 h-4 rounded-full border border-cyan-300 bg-cyan-200/50 animate-ping pointer-events-none"
          style={{ left: b.x - 8, top: b.y - 8 }}
        />
      ))}

      {/* Bottom Subtitle Indicator */}
      <div className="absolute right-4 sm:right-6 bottom-2 z-20 text-[10px] sm:text-[11px] text-cyan-300/80 font-mono tracking-wider flex items-center gap-1.5 bg-[#031326]/60 px-3 py-1 rounded-full border border-cyan-500/20">
        <span>🐬</span>
        <span>Дунайська хвиля: свіжа риба від мережі магазинів «Дельфін» для нашої юшки</span>
      </div>
    </div>
  );
};
