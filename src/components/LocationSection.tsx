import React from 'react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-[#061426] relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>📍</span> Локація ярмарку
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-nautical text-white">
            Проспект Миру, 9
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            м. Ізмаїл, подвір'я ВСП «Дунайський фаховий коледж НУ ОМА»
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Vector Map SVG */}
          <div className="lg:col-span-7 bg-[#040e1a] p-4 sm:p-6 rounded-3xl border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
            <div className="text-xs font-mono text-amber-400 font-bold mb-3 flex items-center justify-between">
              <span>⚓ ДФК НУ ОМА • КАРТА ЛОКАЦІЇ</span>
              <span>м. Ізмаїл • Проспект Миру, 9</span>
            </div>

            {/* Stylized Vector Map */}
            <div className="w-full aspect-[16/10] bg-[#0c1f36] rounded-2xl relative overflow-hidden border border-slate-700/80">
              <svg viewBox="0 0 600 380" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="danubeRiverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0369a1" />
                    <stop offset="50%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#075985" />
                  </linearGradient>
                </defs>

                {/* City Land Area */}
                <rect width="600" height="380" fill="#0c1f36" />

                {/* City Streets Grid */}
                <path d="M 0,160 L 600,160" stroke="#1e3a5f" strokeWidth="18" />
                <text x="30" y="154" fill="#64748b" fontSize="10" fontFamily="sans-serif">вул. Свято-Покровська</text>

                {/* Prospekt Myru (Main Avenue) */}
                <path d="M 320,0 L 320,380" stroke="#334155" strokeWidth="26" />
                <path d="M 320,0 L 320,380" stroke="#d4af37" strokeWidth="2" strokeDasharray="10,10" />
                <text x="330" y="40" fill="#fef08a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  ПРОСПЕКТ МИРУ
                </text>

                {/* Cross street */}
                <path d="M 0,270 L 600,270" stroke="#1e3a5f" strokeWidth="14" />
                <text x="30" y="264" fill="#64748b" fontSize="10" fontFamily="sans-serif">вул. Героїв Ізмаїла</text>

                {/* River Danube */}
                <path
                  d="M 0,330 Q 200,310 400,340 Q 520,355 600,330 L 600,380 L 0,380 Z"
                  fill="url(#danubeRiverGrad)"
                />
                <text x="440" y="365" fill="#bae6fd" fontSize="13" fontWeight="bold" fontFamily="'Cinzel', serif">
                  РІЧКА ДУНАЙ ≈
                </text>

                {/* DFK NU OMA Campus Grounds & Fair Area */}
                <g transform="translate(180, 80)">
                  <rect x="0" y="0" width="130" height="130" rx="8" fill="#09274c" stroke="#f59e0b" strokeWidth="3" />
                  
                  {/* Courtyard */}
                  <rect x="15" y="45" width="100" height="70" rx="4" fill="#133663" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="65" y="75" textAnchor="middle" fill="#fde047" fontSize="9" fontWeight="bold">
                    ПЛАЦ ЯРМАРКУ
                  </text>
                  <text x="65" y="90" textAnchor="middle" fill="#ffffff" fontSize="8">
                    🍲 Казан 611 групи (5 л)
                  </text>

                  {/* Main Building */}
                  <rect x="15" y="10" width="100" height="28" rx="3" fill="#1e40af" stroke="#93c5fd" strokeWidth="1.5" />
                  <text x="65" y="27" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                    ДФК НУ «ОМА»
                  </text>
                </g>

                {/* Pin Marker on Prospekt Myru, 9 */}
                <g transform="translate(320, 150)">
                  <ellipse cx="0" cy="18" rx="14" ry="5" fill="#000000" opacity="0.6" />
                  <path
                    d="M 0,0 C -12,-18 -16,-30 0,-40 C 16,-30 12,-18 0,0 Z"
                    fill="#ef4444"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="animate-bounce"
                  />
                  <circle cx="0" cy="-24" r="6" fill="#ffffff" />
                  <circle cx="0" cy="-24" r="3" fill="#ef4444" />
                </g>

                {/* Callout box */}
                <g transform="translate(350, 105)">
                  <rect x="0" y="0" width="170" height="44" rx="8" fill="#0f172a" stroke="#d4af37" strokeWidth="1.5" />
                  <text x="10" y="18" fill="#fef08a" fontSize="11" fontWeight="bold">Проспект Миру, 9</text>
                  <text x="10" y="32" fill="#94a3b8" fontSize="9">Вхід на подвір'я коледжу</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Right: Clean Practical Info (No incorrect buses, no walking estimates) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-[#091f3a] border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                <span>🏛️</span> Організатор
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Відокремлений структурний підрозділ Дунайський фаховий коледж Національного університету «Одеська морська академія» (ДФК НУ ОМА).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#091f3a] border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                <span>📍</span> Точна адреса
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                м. Ізмаїл, Проспект Миру, 9. Ярмарок проходитиме безпосередньо на подвір'ї коледжу біля головного входу.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#091f3a] border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                <span>⏰</span> Дата та час початку
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                2 жовтня (п'ятниця) о 11:00. Вхід вільний для всіх жителів та гостей міста!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-2 border-amber-400 text-center">
              <div className="text-sm font-bold text-white">Чекаємо 2 жовтня о 11:00!</div>
              <div className="text-xs text-amber-300 mt-0.5">ВСП ДФК НУ ОМА • 611 група</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
