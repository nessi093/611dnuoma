import React, { useState, useEffect } from 'react';
import { CollegeSealSVG, TridentBadgeSVG, CadetGroupBadgeSVG } from './NauticalEmblems';
import { SeagullsSVG } from './SeagullsSVG';

export const HeroSection: React.FC = () => {
  // Countdown to October 2 at 11:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    let target = new Date(now.getFullYear(), 9, 2, 11, 0, 0); // October 2, 11:00 AM
    if (now.getTime() > target.getTime()) {
      target = new Date(now.getFullYear() + 1, 9, 2, 11, 0, 0);
    }

    const updateTimer = () => {
      const diff = target.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-6 pb-0 overflow-hidden bg-gradient-to-b from-[#040e1a] via-[#091b35] to-[#040e1a]">
      {/* Animated Seagulls SVG */}
      <SeagullsSVG />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Header Seals from Official Poster */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/25 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <CollegeSealSVG size={58} />
            <div className="text-left">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block font-mono">
                Організатор заходу
              </span>
              <h2 className="text-xs sm:text-sm font-semibold text-slate-200 uppercase leading-snug">
                Відокремлений структурний підрозділ Дунайський фаховий коледж Національного університету «Одеська морська академія» (ДФК НУ ОМА)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CadetGroupBadgeSVG />
            <TridentBadgeSVG size={48} />
          </div>
        </div>

        {/* Main Grid: Headline & Festive Maritime Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Left Column: Festival Presentation */}
          <div className="lg:col-span-7 text-left space-y-5">
            {/* Cadet Group Tag & Partner Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-amber-500/20 border-2 border-amber-400 shadow-lg">
                <span className="text-xl">⚓</span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  Курсанти:
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono tracking-tight drop-shadow-md">
                  611 ГРУПА
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/60 text-cyan-200 text-xs font-bold uppercase tracking-wider">
                <span>🐬</span>
                <span>Риба: мережа «Дельфін»</span>
              </div>
            </div>

            {/* Title from Poster */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-nautical text-white leading-[1.08] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Фестиваль-ярмарок <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
                  «Курсантська Юшка»
                </span>
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300 font-serif-maritime italic">
                Справжня дунайська юшка в казані, кекси (20 грн), пиріжки з вишнею (30 грн), пиріжки з сиром (25 грн), слойки з яблуком (35 грн), печиво «Рибка» (5 грн), компот, мохіто та дюшес (по 15 грн / стакан) від 611 групи!
              </p>
            </div>

            {/* Golden Charity Banner Exactly as on Poster */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0b274c] via-[#103b70] to-[#0b274c] border-2 border-amber-400 shadow-xl overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-2xl flex-shrink-0">
                  💖
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-amber-300 tracking-wider">
                    Благодійна акція
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-black text-white leading-snug">
                    Усі гроші з ярмарки будуть відправлені до дитячого будинку
                  </div>
                  <div className="text-xs text-sky-200/80 mt-0.5">
                    Кожна покупка та внесок — пряма допомога дітям!
                  </div>
                </div>
              </div>
            </div>

            {/* Poster Details: Date, Time, Address */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#07192f] border border-amber-500/30 flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 font-mono">Дата</div>
                  <div className="text-sm sm:text-base font-bold text-white">2 жовтня</div>
                  <div className="text-xs text-amber-300 font-medium">(п'ятниця)</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#07192f] border border-amber-500/30 flex items-center gap-3">
                <div className="text-2xl">⏰</div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 font-mono">Початок</div>
                  <div className="text-sm sm:text-base font-bold text-white">11:00</div>
                  <div className="text-xs text-amber-300 font-medium">Подвір'я коледжу</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#07192f] border border-amber-500/30 flex items-center gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 font-mono">Адреса</div>
                  <div className="text-sm sm:text-base font-bold text-white">Проспект Миру, 9</div>
                  <div className="text-xs text-amber-300 font-medium">ДФК НУ ОМА</div>
                </div>
              </div>
            </div>

            {/* Countdown Bar */}
            <div className="p-3.5 rounded-xl bg-[#041020] border border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  До відкриття ярмарку:
                </span>
              </div>
              <div className="flex items-center gap-2 text-center font-mono">
                <div className="bg-slate-900 border border-amber-500/40 px-2.5 py-1 rounded">
                  <span className="text-base font-black text-amber-400">{timeLeft.days}</span>
                  <span className="text-[9px] block text-slate-400 uppercase">днів</span>
                </div>
                <span className="text-amber-400 font-bold">:</span>
                <div className="bg-slate-900 border border-amber-500/40 px-2.5 py-1 rounded">
                  <span className="text-base font-black text-amber-400">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[9px] block text-slate-400 uppercase">год</span>
                </div>
                <span className="text-amber-400 font-bold">:</span>
                <div className="bg-slate-900 border border-amber-500/40 px-2.5 py-1 rounded">
                  <span className="text-base font-black text-amber-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[9px] block text-slate-400 uppercase">хв</span>
                </div>
                <span className="text-amber-400 font-bold">:</span>
                <div className="bg-slate-900 border border-amber-500/40 px-2.5 py-1 rounded">
                  <span className="text-base font-black text-amber-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[9px] block text-slate-400 uppercase">сек</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#cauldron"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>🍲</span>
                <span>До казана юшки (5 л)</span>
              </a>
              <a
                href="#treats"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border-2 border-amber-400/60 font-bold text-sm uppercase tracking-wider shadow transition transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>🥐</span>
                <span>Меню частувань</span>
              </a>
            </div>
          </div>

          {/* Right Column: Festive Maritime College Poster Crest Card (NO duplicate cauldron!) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0b274c] via-[#081e3a] to-[#040e1a] border-4 border-dashed border-amber-400 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
              {/* Cadet Banner Tag with large 611 */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-slate-950 font-black text-sm sm:text-base px-6 py-2 rounded-full uppercase tracking-widest shadow-xl border-2 border-amber-200 whitespace-nowrap flex items-center gap-2">
                <span>⚓</span>
                <span className="text-lg sm:text-xl font-black font-mono tracking-wider">611 ГРУПА</span>
                <span>⚓</span>
              </div>

              {/* Central Seal & Anchor Motif */}
              <div className="my-4 flex flex-col items-center">
                <div className="relative p-2 rounded-full bg-slate-950/80 border-2 border-amber-400/60 shadow-inner">
                  <CollegeSealSVG size={130} className="hover:scale-105 transition-transform" />
                </div>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <CadetGroupBadgeSVG />
                  <TridentBadgeSVG size={50} />
                </div>
              </div>

              {/* Institution Title */}
              <h3 className="text-base font-bold font-nautical text-white leading-snug mt-2">
                ВСП Дунайський фаховий коледж
              </h3>
              <p className="text-xs text-amber-300 font-mono mt-0.5">
                НУ «Одеська морська академія»
              </p>

              {/* Key Event Badges Grid */}
              <div className="mt-6 pt-4 border-t border-amber-500/25 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-[#061426] border border-slate-700/80">
                  <span className="text-[10px] text-amber-400 font-mono block uppercase">Головна страва</span>
                  <span className="text-xs font-bold text-white">Юшка в казані 5 л</span>
                </div>
                <div className="p-3 rounded-xl bg-[#061426] border border-slate-700/80">
                  <span className="text-[10px] text-amber-400 font-mono block uppercase">Благодійність</span>
                  <span className="text-xs font-bold text-rose-300">Дитячому будинку</span>
                </div>
              </div>

              {/* Feature highlight note instead of duplicate button */}
              <div className="mt-5 py-2.5 px-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs font-semibold text-center flex items-center justify-center gap-2">
                <span>🍲</span>
                <span>Гаряча юшка вариться у 5-літровому казані</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
