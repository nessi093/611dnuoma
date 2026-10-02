import React from 'react';
import { CollegeSealSVG, TridentBadgeSVG, CadetGroupBadgeSVG } from './NauticalEmblems';

export const NauticalFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#02070f] border-t-2 border-amber-500/40 pt-12 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Col 1: College & Clarification */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <CollegeSealSVG size={50} />
              <div>
                <h4 className="text-sm font-bold text-white uppercase font-nautical">
                  ДФК НУ «Одеська морська академія»
                </h4>
                <p className="text-xs text-amber-300">
                  Благодійний фестиваль-ярмарок «Курсантська Юшка»
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300 max-w-lg">
              Організатор самого благодійного ярмарку: <strong className="text-white">ВСП «Дунайський фаховий коледж Національного університету «Одеська морська академія» (ДФК НУ ОМА)</strong>. Усі кошти з ярмарки передаються вихованцям дитячого будинку.
            </p>

            {/* Clear specification as requested by user */}
            <div className="p-3.5 rounded-2xl bg-[#07192f] border border-amber-400/40 text-xs text-amber-200 leading-relaxed">
              <span className="font-bold text-amber-300 block font-mono text-[11px] uppercase mb-1">
                ℹ️ Важливе уточнення про авторство:
              </span>
              Ярмарок організовано коледжем <strong className="text-white">ДФК НУ ОМА</strong>. Курсанти <strong className="text-white">611 групи</strong> не створювали сам ярмарок — <strong className="text-amber-300">611 група створила цей сайт</strong> на честь ярмарку та бере в ньому активну участь зі своїм столом частувань!
            </div>

            <div className="flex items-center gap-3 pt-1">
              <CadetGroupBadgeSVG />
              <TridentBadgeSVG size={40} />
            </div>
          </div>

          {/* Col 2: Event Details */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="p-4 rounded-2xl bg-[#07192f] border border-amber-500/20 text-xs space-y-2">
              <div className="text-amber-300 font-bold text-sm">
                📅 2 жовтня (п'ятниця) о 11:00
              </div>
              <div className="text-slate-200">
                📍 м. Ізмаїл, Проспект Миру, 9 (подвір'я коледжу)
              </div>
              <div className="text-slate-300">
                🍲 Юшка (5 л), кекси (20 грн), пиріжки з вишнею (30 грн), пиріжки з сиром (25 грн), слойки з яблуком (35 грн), печиво «Рибка» (5 грн), компот, мохіто та дюшес (по 15 грн / стакан)
              </div>
              <div className="text-cyan-300 font-medium pt-1 border-t border-slate-700/60 flex items-center gap-1.5">
                <span>🐬</span>
                <span>Партнер: <strong>Мережа магазинів «Дельфін»</strong> — щира подяка за надану свіжу рибу!</span>
              </div>
              <div className="text-rose-300 font-semibold pt-1 border-t border-slate-700/60">
                💖 Усі гроші з ярмарки будуть відправлені до дитячого будинку
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <div>
            Організатор ярмарку: ВСП ДФК НУ ОМА • Сайт створено курсантами 611 групи
          </div>
          <div className="text-amber-400/80 font-mono text-[11px]">
            Благодійний ярмарок • 2 жовтня, 11:00 • Проспект Миру, 9 💙💛
          </div>
        </div>
      </div>
    </footer>
  );
};
