import React, { useState, useRef, useEffect } from 'react';
import { playHelmClick } from '../utils/audio';

interface ShipWheelSVGProps {
  size?: number;
  className?: string;
  showHeading?: boolean;
}

export const ShipWheelSVG: React.FC<ShipWheelSVGProps> = ({
  size = 280,
  className = '',
  showHeading = true,
}) => {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [cadetCommand, setCadetCommand] = useState('Курс: На Благодійність! (Північ)');
  const lastAngleRef = useRef(angle);

  // Turn Left / Right
  const rotateWheel = (delta: number) => {
    playHelmClick();
    setAngle((prev) => {
      const next = prev + delta;
      updateCommand(next);
      return next;
    });
  };

  // Automated gentle idle sway
  useEffect(() => {
    if (isSpinning) return;
    const interval = setInterval(() => {
      setAngle((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 2400);
    return () => clearInterval(interval);
  }, [isSpinning]);

  const updateCommand = (ang: number) => {
    const normalized = (((ang % 360) + 360) % 360);
    if (normalized >= 337.5 || normalized < 22.5) {
      setCadetCommand('Курс: Норд (0°) — Прямо на Ярмарок!');
    } else if (normalized >= 22.5 && normalized < 67.5) {
      setCadetCommand('Курс: Норд-Ост (45°) — На дитячий будинок!');
    } else if (normalized >= 67.5 && normalized < 112.5) {
      setCadetCommand('Курс: Ост (90°) — Повний вперед до казана!');
    } else if (normalized >= 112.5 && normalized < 157.5) {
      setCadetCommand('Курс: Зюйдь-Ост (135°) — Аромат свіжої випічки!');
    } else if (normalized >= 157.5 && normalized < 202.5) {
      setCadetCommand('Курс: Зюйдь (180°) — Дунайські рибалки вітають!');
    } else if (normalized >= 202.5 && normalized < 247.5) {
      setCadetCommand('Курс: Зюйдь-Вест (225°) — 7 футів під кілем!');
    } else if (normalized >= 247.5 && normalized < 292.5) {
      setCadetCommand('Курс: Вест (270°) — Камбуз 611 групи діє!');
    } else {
      setCadetCommand('Курс: Норд-Вест (315°) — Вітер благодійності!');
    }
  };

  const spinFull = () => {
    setIsSpinning(true);
    playHelmClick();
    const turns = 360 * 2 + Math.floor(Math.random() * 360);
    setAngle((prev) => {
      const next = prev + turns;
      updateCommand(next);
      return next;
    });
    setTimeout(() => setIsSpinning(false), 1200);
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Ship Wheel Container */}
      <div
        className="relative cursor-grab active:cursor-grabbing group"
        style={{ width: size, height: size }}
        onClick={spinFull}
        title="Натисніть на штурвал, щоб прокрутити курс!"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out"
          style={{ transform: `rotate(${angle}deg)` }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="brassHub" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fff3b0" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>

            <linearGradient id="woodSpoke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9a3412" />
              <stop offset="50%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#431407" />
            </linearGradient>

            <radialGradient id="rimShine" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>
          </defs>

          {/* 8 Handles extending out from the rim */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((spokeAngle, idx) => (
            <g key={idx} transform={`rotate(${spokeAngle} 200 200)`}>
              {/* Spoke stick through center */}
              <line x1="200" y1="200" x2="200" y2="40" stroke="url(#woodSpoke)" strokeWidth="14" strokeLinecap="round" />
              {/* Turned lathe-carved handle grip */}
              <path
                d="M 194,40 C 190,30 190,15 194,5 C 196,-2 204,-2 206,5 C 210,15 210,30 206,40 Z"
                fill="url(#woodSpoke)"
                stroke="#3e1a0d"
                strokeWidth="1.5"
              />
              {/* Brass tip finial */}
              <circle cx="200" cy="5" r="4.5" fill="url(#brassHub)" />
              {/* Brass ferrule */}
              <rect x="193" y="38" width="14" height="6" rx="1.5" fill="url(#brassHub)" />
            </g>
          ))}

          {/* Outer Heavy Wooden Wheel Rim */}
          <circle cx="200" cy="200" r="140" fill="none" stroke="#7c2d12" strokeWidth="26" />
          {/* Inner Brass Inlaid Band */}
          <circle cx="200" cy="200" r="148" fill="none" stroke="url(#brassHub)" strokeWidth="4" />
          <circle cx="200" cy="200" r="132" fill="none" stroke="url(#brassHub)" strokeWidth="4" />

          {/* Inner Wooden Rim */}
          <circle cx="200" cy="200" r="88" fill="none" stroke="#7c2d12" strokeWidth="16" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="url(#brassHub)" strokeWidth="3" />

          {/* Brass Rivets on Outer Rim */}
          {[15, 30, 60, 75, 105, 120, 150, 165, 195, 210, 240, 255, 285, 300, 330, 345].map((rivetAngle, i) => (
            <circle
              key={i}
              cx={200 + 140 * Math.sin((rivetAngle * Math.PI) / 180)}
              cy={200 - 140 * Math.cos((rivetAngle * Math.PI) / 180)}
              r="3.5"
              fill="url(#brassHub)"
              stroke="#52240b"
              strokeWidth="0.8"
            />
          ))}

          {/* Large Center Brass Hub */}
          <circle cx="200" cy="200" r="50" fill="url(#brassHub)" stroke="#52240b" strokeWidth="3" />
          <circle cx="200" cy="200" r="42" fill="none" stroke="#78350f" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Hub Center Anchor Emblem */}
          <circle cx="200" cy="200" r="32" fill="#0f172a" stroke="#d4af37" strokeWidth="2" />
          
          {/* Stylized Anchor Icon inside hub */}
          <g transform="translate(200, 200) scale(0.65)" stroke="#fbbf24" fill="none" strokeWidth="3" strokeLinecap="round">
            <line x1="0" y1="-24" x2="0" y2="18" />
            <circle cx="0" cy="-28" r="5.5" />
            <line x1="-12" y1="-12" x2="12" y2="-12" strokeWidth="3.5" />
            <path d="M -18,6 C -18,22 18,22 18,6" strokeWidth="4" />
            <polygon points="-21,4 -15,4 -18,0" fill="#fbbf24" stroke="none" />
            <polygon points="21,4 15,4 18,0" fill="#fbbf24" stroke="none" />
          </g>

          {/* Group 611 Engraved Text */}
          <text
            x="200"
            y="288"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="9"
            fontWeight="bold"
            letterSpacing="1"
            fontFamily="'Cinzel', serif"
          >
            ДФК 611
          </text>
        </svg>

        {/* Center Hover Glow */}
        <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 pointer-events-none group-hover:border-amber-400/60 transition-colors" />
      </div>

      {/* Manual Steer Controls */}
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => rotateWheel(-45)}
          className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-800 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/30 transition shadow"
          title="Стерно ліворуч"
        >
          ↺ Ліво на борт
        </button>
        <button
          onClick={spinFull}
          className="px-3 py-1 text-xs font-bold rounded bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow animate-pulse"
          title="Крутанути штурвал"
        >
          ⚓ Крутити
        </button>
        <button
          onClick={() => rotateWheel(45)}
          className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-800 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/30 transition shadow"
          title="Стерно праворуч"
        >
          Право на борт ↻
        </button>
      </div>

      {/* Heading Output */}
      {showHeading && (
        <div className="mt-2 text-center">
          <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
            {cadetCommand}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            Штурвал курсанта 611 групи • ДФК НУ ОМА
          </div>
        </div>
      )}
    </div>
  );
};
