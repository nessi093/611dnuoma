import React from 'react';

export const FoodItemIcon: React.FC<{
  type:
    | 'soup'
    | 'cupcake'
    | 'cherry-pie'
    | 'cheese-pie'
    | 'apple-puff'
    | 'fish-cookie'
    | 'kompot'
    | 'mojito'
    | 'duchesse';
  className?: string;
}> = ({ type, className = 'w-10 h-10' }) => {
  switch (type) {
    case 'soup':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10,28 C 10,48 20,56 32,56 C 44,56 54,48 54,28 Z"
            fill="#1e293b"
            stroke="#f59e0b"
            strokeWidth="2.5"
          />
          <ellipse cx="32" cy="28" rx="22" ry="7" fill="#ea580c" stroke="#f59e0b" strokeWidth="2" />
          <ellipse cx="32" cy="28" rx="16" ry="4" fill="#fef08a" opacity="0.8" />
          <circle cx="28" cy="27" r="1.5" fill="#22c55e" />
          <circle cx="36" cy="29" r="1.5" fill="#22c55e" />
          <path
            d="M 24,20 C 22,14 26,10 24,4"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-steam-1"
          />
          <path
            d="M 32,18 C 34,12 30,8 32,2"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-steam-2"
          />
          <path
            d="M 40,20 C 38,14 42,10 40,4"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-steam-3"
          />
        </svg>
      );

    case 'cupcake':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 16,34 L 20,54 L 44,54 L 48,34 Z"
            fill="#78350f"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line x1="25" y1="35" x2="27" y2="53" stroke="#451a03" strokeWidth="1.5" />
          <line x1="32" y1="35" x2="32" y2="53" stroke="#451a03" strokeWidth="1.5" />
          <line x1="39" y1="35" x2="37" y2="53" stroke="#451a03" strokeWidth="1.5" />
          <path
            d="M 14,35 C 13,26 22,23 32,22 C 42,23 51,26 50,35 C 47,38 17,38 14,35 Z"
            fill="#fef08a"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <path
            d="M 22,25 C 22,18 28,15 32,15 C 36,15 42,18 42,25"
            fill="#fef9c3"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <circle cx="26" cy="30" r="2" fill="#451a03" />
          <circle cx="38" cy="29" r="2" fill="#451a03" />
          <circle cx="32" cy="14" r="3" fill="#dc2626" />
        </svg>
      );

    case 'cherry-pie':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="32" cy="36" rx="24" ry="15" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="32" cy="35" rx="22" ry="13" fill="#d97706" />
          <ellipse cx="32" cy="33" rx="18" ry="9" fill="#f59e0b" />
          <path
            d="M 12,35 Q 16,31 20,35 Q 24,31 28,35 Q 32,31 36,35 Q 40,31 44,35 Q 48,31 52,35"
            stroke="#78350f"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse cx="26" cy="33" rx="3" ry="1.5" fill="#dc2626" stroke="#991b1b" strokeWidth="0.8" />
          <ellipse cx="32" cy="32" rx="3.5" ry="1.5" fill="#dc2626" stroke="#991b1b" strokeWidth="0.8" />
          <ellipse cx="38" cy="33" rx="3" ry="1.5" fill="#dc2626" stroke="#991b1b" strokeWidth="0.8" />
          <g transform="translate(36, 10)">
            <path d="M 6,10 C 8,4 14,3 15,2" stroke="#15803d" strokeWidth="1.5" fill="none" />
            <path d="M 12,10 C 12,5 14,3 15,2" stroke="#15803d" strokeWidth="1.5" fill="none" />
            <path d="M 15,2 Q 20,2 18,6 Q 15,5 15,2 Z" fill="#22c55e" />
            <circle cx="6" cy="11" r="3.8" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
            <circle cx="5" cy="10" r="1" fill="#fca5a5" />
            <circle cx="13" cy="11" r="3.8" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
            <circle cx="12" cy="10" r="1" fill="#fca5a5" />
          </g>
        </svg>
      );

    case 'cheese-pie':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Golden Baked Cottage Cheese Pie (Пиріжок з сиром/творогом) */}
          <ellipse cx="32" cy="36" rx="24" ry="15" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="32" cy="35" rx="22" ry="13" fill="#d97706" />
          <ellipse cx="32" cy="33" rx="18" ry="9" fill="#f59e0b" />
          {/* Crimped Edge */}
          <path
            d="M 12,35 Q 16,31 20,35 Q 24,31 28,35 Q 32,31 36,35 Q 40,31 44,35 Q 48,31 52,35"
            stroke="#78350f"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Center vent with white fresh cottage cheese (творог) filling visible */}
          <ellipse cx="32" cy="32" rx="7" ry="3.5" fill="#ffffff" stroke="#fde047" strokeWidth="1.2" />
          <circle cx="30" cy="32" r="1" fill="#fef08a" />
          <circle cx="34" cy="32" r="1.2" fill="#fef08a" />
          {/* Little Dairy / Cheese wedge badge on top */}
          <g transform="translate(38, 10)">
            <polygon points="4,14 16,14 16,6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
            <circle cx="12" cy="11" r="1" fill="#ca8a04" />
            <circle cx="8" cy="13" r="0.8" fill="#ca8a04" />
          </g>
        </svg>
      );

    case 'apple-puff':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,42 46,26 52,38 18,54" fill="#78350f" opacity="0.6" />
          <polygon points="10,38 44,22 52,34 18,50" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          <polygon points="10,36 44,20 50,30 16,46" fill="#d97706" />
          <polygon points="11,34 43,19 48,27 16,42" fill="#f59e0b" />
          <polygon points="13,32 41,19 45,24 17,37" fill="#fef08a" opacity="0.8" />
          <line x1="20" y1="35" x2="24" y2="40" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          <line x1="27" y1="30" x2="31" y2="35" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="26" x2="38" y2="31" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          <g transform="translate(38, 8)">
            <circle cx="8" cy="8" r="6" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
            <circle cx="6" cy="6" r="1.5" fill="#fca5a5" />
            <path d="M 8,3 Q 8,1 10,0" stroke="#78350f" strokeWidth="1.2" fill="none" />
            <path d="M 9,1 Q 13,0 12,3 Q 10,3 9,1 Z" fill="#22c55e" />
          </g>
        </svg>
      );

    case 'fish-cookie':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="32" cy="35" rx="20" ry="12" fill="#78350f" opacity="0.5" />
          <path
            d="M 46,32 C 40,22 22,22 14,32 C 22,42 40,42 46,32 Z"
            fill="#d97706"
            stroke="#78350f"
            strokeWidth="1.5"
          />
          <path
            d="M 44,32 C 38,24 23,24 16,32 C 23,40 38,40 44,32 Z"
            fill="#f59e0b"
          />
          <path
            d="M 45,32 L 56,22 Q 52,32 56,42 Z"
            fill="#d97706"
            stroke="#78350f"
            strokeWidth="1.5"
          />
          <path
            d="M 45,32 L 54,24 Q 51,32 54,40 Z"
            fill="#f59e0b"
          />
          <circle cx="21" cy="30" r="2.5" fill="#78350f" />
          <circle cx="28" cy="28" r="1" fill="#b45309" />
          <circle cx="33" cy="32" r="1" fill="#b45309" />
          <circle cx="38" cy="29" r="1" fill="#b45309" />
          <circle cx="30" cy="35" r="1" fill="#b45309" />
          <circle cx="36" cy="36" r="1" fill="#b45309" />
        </svg>
      );

    case 'kompot':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glass Cup of Berry Kompot */}
          <path
            d="M 18,18 L 22,54 C 22,56 42,56 42,54 L 46,18 Z"
            fill="#e11d48"
            fillOpacity="0.85"
            stroke="#ffffff"
            strokeWidth="1.8"
          />
          {/* Liquid Top */}
          <ellipse cx="32" cy="22" rx="13" ry="3.5" fill="#be123c" />
          {/* Floating Berries */}
          <circle cx="28" cy="30" r="3" fill="#881337" />
          <circle cx="36" cy="36" r="3.5" fill="#881337" />
          <circle cx="27" cy="42" r="2.5" fill="#881337" />
          {/* Glass Highlight */}
          <line x1="22" y1="24" x2="24" y2="48" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          {/* Straw */}
          <line x1="36" y1="6" x2="28" y2="38" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'mojito':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tall Mojito Glass with Mint & Lime */}
          <path
            d="M 19,16 L 22,54 C 22,56 42,56 42,54 L 45,16 Z"
            fill="#10b981"
            fillOpacity="0.4"
            stroke="#6ee7b7"
            strokeWidth="1.8"
          />
          {/* Ice Cubes */}
          <rect x="25" y="32" width="7" height="7" rx="1.5" fill="#ffffff" fillOpacity="0.7" stroke="#a7f3d0" strokeWidth="0.8" />
          <rect x="31" y="24" width="7" height="7" rx="1.5" fill="#ffffff" fillOpacity="0.7" stroke="#a7f3d0" strokeWidth="0.8" />
          {/* Fresh Mint Leaves */}
          <ellipse cx="26" cy="22" rx="5" ry="2.5" fill="#059669" transform="rotate(-25 26 22)" />
          <ellipse cx="36" cy="38" rx="4.5" ry="2" fill="#059669" transform="rotate(30 36 38)" />
          {/* Lime Slice on rim */}
          <circle cx="43" cy="16" r="6" fill="#84cc16" stroke="#4d7c0f" strokeWidth="1.2" />
          <circle cx="43" cy="16" r="4.5" fill="#bef264" />
          <line x1="43" y1="12" x2="43" y2="20" stroke="#4d7c0f" strokeWidth="0.8" />
          <line x1="39" y1="16" x2="47" y2="16" stroke="#4d7c0f" strokeWidth="0.8" />
          {/* Straw */}
          <line x1="28" y1="6" x2="34" y2="46" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'duchesse':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sparkling Golden Duchesse Pear Soda Glass */}
          <path
            d="M 18,18 L 22,54 C 22,56 42,56 42,54 L 46,18 Z"
            fill="#eab308"
            fillOpacity="0.8"
            stroke="#fef08a"
            strokeWidth="1.8"
          />
          <ellipse cx="32" cy="22" rx="13" ry="3.5" fill="#ca8a04" />
          {/* Rising Fizzy Bubbles */}
          <circle cx="28" cy="44" r="1.5" fill="#ffffff" opacity="0.9" />
          <circle cx="34" cy="38" r="2" fill="#ffffff" opacity="0.9" />
          <circle cx="26" cy="30" r="1.2" fill="#ffffff" opacity="0.9" />
          <circle cx="36" cy="26" r="1.8" fill="#ffffff" opacity="0.9" />
          {/* Pear Slice Accent */}
          <g transform="translate(38, 8)">
            <ellipse cx="6" cy="8" rx="4" ry="6" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="6" cy="6" r="1" fill="#854d0e" />
            <path d="M 6,2 Q 7,0 9,0" stroke="#78350f" strokeWidth="1" fill="none" />
          </g>
          {/* Straw */}
          <line x1="34" y1="6" x2="28" y2="40" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
};
