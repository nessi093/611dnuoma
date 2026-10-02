import React, { useState } from 'react';
import { CollegeSealSVG, CadetGroupBadgeSVG } from './NauticalEmblems';

export const NauticalNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#040e1a]/95 backdrop-blur-md border-b-2 border-amber-500/40 shadow-xl transition-all">
      {/* Top Ribbon */}
      <div className="bg-gradient-to-r from-[#07192f] via-[#0e2c52] to-[#07192f] py-1.5 px-4 text-center text-xs text-amber-200/90 font-medium tracking-wide flex items-center justify-center gap-3 border-b border-amber-500/20">
        <span className="hidden sm:inline">⚓</span>
        <span className="font-bold tracking-wide">
          ОРГАНІЗАТОР ЯРМАРКУ: ВСП ДУНАЙСЬКИЙ ФАХОВИЙ КОЛЕДЖ НУ «ОДЕСЬКА МОРСЬКА АКАДЕМІЯ» (ДФК НУ ОМА)
        </span>
        <span className="text-amber-400 font-bold">•</span>
        <span className="bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-md font-black text-xs sm:text-sm tracking-wider font-mono shadow-sm">
          611 ГРУПА
        </span>
        <span className="hidden sm:inline">⚓</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & College Title */}
          <a href="#hero" className="flex items-center gap-3 group">
            <CollegeSealSVG size={54} className="group-hover:rotate-6 transition-transform duration-300" />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold font-nautical text-white tracking-wide">
                  Курсантська Юшка
                </span>
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm px-2.5 py-0.5 rounded-md uppercase tracking-wider font-mono shadow-md">
                  611 ГРУПА
                </span>
              </div>
              <span className="text-xs text-slate-300 font-medium hidden sm:block">
                Благодійний фестиваль-ярмарок ДФК НУ ОМА • 2 жовтня, 11:00
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="text-slate-200 hover:text-amber-300 transition-colors">
              Головна
            </a>
            <a href="#cauldron" className="text-slate-200 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span>🍲</span> Юшка (5 л)
            </a>
            <a href="#treats" className="text-slate-200 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span>🥐</span> Смаколики
            </a>
            <a href="#helm" className="text-slate-200 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span>⚓</span> Штурвал
            </a>
            <a href="#charity" className="text-slate-200 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span>💖</span> Благодійність
            </a>
            <a href="#location" className="text-slate-200 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span>📍</span> Проспект Миру, 9
            </a>

            {/* Prominent 611 Cadet Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/20 border-2 border-amber-400 text-amber-300 font-black font-mono shadow-md">
              <span className="text-sm">⚓</span>
              <span className="text-base text-white tracking-wider font-black">611</span>
              <span className="text-xs tracking-wider">ГРУПА</span>
            </div>
          </nav>

          {/* Right Mobile Navigation Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700"
              aria-label="Меню"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07182c] border-b border-amber-500/30 px-4 pt-2 pb-4 space-y-2 text-sm font-medium">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-300"
          >
            Головна
          </a>
          <a
            href="#cauldron"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-300"
          >
            🍲 Казан Курсантської Юшки (5 л)
          </a>
          <a
            href="#treats"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-300"
          >
            🥐 Смаколики та напої
          </a>
          <a
            href="#helm"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-300"
          >
            ⚓ Штурвал та Компас
          </a>
          <a
            href="#charity"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-300"
          >
            💖 Благодійна акція для дитячого будинку
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-300"
          >
            📍 Проспект Миру, 9
          </a>
        </div>
      )}
    </header>
  );
};
