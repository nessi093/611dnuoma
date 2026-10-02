with open("public/dnu-oma-logo.svg", "r") as f:
    svg_raw = f.read()

# Strip <?xml ...?>
svg_clean = svg_raw.split("?>\n", 1)[1] if "?>" in svg_raw else svg_raw

# Convert stroke-width -> strokeWidth, etc. for React
replacements = {
    "stroke-width": "strokeWidth",
    "stroke-dasharray": "strokeDasharray",
    "clip-path": "clipPath",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "font-family": "fontFamily",
    "font-weight": "fontWeight",
    "font-size": "fontSize",
    "text-anchor": "textAnchor",
    "dominant-baseline": "dominantBaseline"
}

for k, v in replacements.items():
    svg_clean = svg_clean.replace(k, v)

# Update root svg tag to include className and responsive sizing
svg_component = svg_clean.replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">', '<svg viewBox="0 0 500 500" className="w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg">')

full_tsx = f'''import React from 'react';

/**
 * Official College Seal of Danube Institute of National University
 * "Odessa Maritime Academy" (ДФК НУ ОМА).
 * Re-engineered with exact trigonometric alignment so every letter is straight,
 * upright, and perfectly proportioned to match the real official emblem.
 */
export const CollegeSealSVG: React.FC<{{ size?: number; className?: string }}> = ({{
  size = 72,
  className = '',
}}) => {{
  return (
    <div
      style={{{{ width: size, height: size }}}}
      className={{`relative select-none flex-shrink-0 inline-flex items-center justify-center rounded-full bg-white shadow-lg p-0.5 border border-sky-400/80 ${{className}}`}}
    >
      {svg_component}
    </div>
  );
}};

/**
 * State Emblem: Ukrainian Golden Trident inside navy & gold roundel
 */
export const TridentBadgeSVG: React.FC<{{ size?: number; className?: string }}> = ({{
  size = 54,
  className = '',
}}) => {{
  return (
    <div style={{{{ width: size, height: size }}}} className={{`relative select-none flex-shrink-0 ${{className}}`}}>
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
}};

/**
 * Cadet 611 Group Nautical Emblem Badge
 */
export const CadetGroupBadgeSVG: React.FC<{{ className?: string }}> = ({{ className = '' }}) => {{
  return (
    <div
      className={{`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-[#0b2447] via-[#103b70] to-[#0b2447] border border-amber-400/80 shadow-md ${{className}}`}}
    >
      <span className="text-amber-400 text-sm">⚓</span>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider font-mono">
          Курсанти
        </span>
        <span className="text-xs font-black text-amber-300 tracking-wider">
          611 ГРУПА
        </span>
      </div>
    </div>
  );
}};
'''

with open("src/components/NauticalEmblems.tsx", "w") as f:
    f.write(full_tsx)

print("SUCCESS: Updated src/components/NauticalEmblems.tsx!")
