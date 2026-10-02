import React from 'react';
import { TridentBadgeSVG } from './NauticalEmblems';

export const CharitySection: React.FC = () => {
  return (
    <section id="charity" className="py-16 bg-[#061426] relative border-b border-amber-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-400/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>💖</span> Шляхетна справа
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-nautical text-white">
            Благодійна Акція Ярмарку
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Ініціатива курсантів 611 групи Дунайського фахового коледжу НУ «Одеська морська академія»
          </p>
        </div>

        {/* Master Charity Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0b274c] via-[#081f3c] to-[#040e1a] border-2 border-amber-400 shadow-2xl relative overflow-hidden text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-3xl mb-4">
            💖
          </div>

          <span className="text-xs uppercase font-bold text-amber-300 tracking-widest font-mono">
            Головне покликання ярмарку
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-nautical text-white mt-1 leading-snug">
            Усі гроші з ярмарки будуть відправлені до дитячого будинку
          </h3>

          <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Справжні моряки завжди допомагають тим, хто опинився у штормі життя. Кожна тарілка нашої курсантської юшки, кожен свіжий кекс за 20 грн та пиріжок з вишнею за 30 грн — це тепло, турбота та реальна підтримка для дітей-сиріт.
          </p>

          <div className="mt-8 pt-6 border-t border-amber-500/25 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-[#061528] border border-slate-700/80">
              <div className="text-amber-400 font-bold text-xs uppercase font-mono mb-1">
                📅 Коли
              </div>
              <div className="text-white font-bold text-sm">2 жовтня (п'ятниця)</div>
              <div className="text-slate-400 text-xs">Початок об 11:00</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#061528] border border-slate-700/80">
              <div className="text-amber-400 font-bold text-xs uppercase font-mono mb-1">
                📍 Де
              </div>
              <div className="text-white font-bold text-sm">Проспект Миру, 9</div>
              <div className="text-slate-400 text-xs">Подвір'я коледжу ДФК</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#061528] border border-slate-700/80">
              <div className="text-amber-400 font-bold text-xs uppercase font-mono mb-1">
                ⚓ Хто організував
              </div>
              <div className="text-white font-bold text-sm">611 група курсантів</div>
              <div className="text-slate-400 text-xs">ДФК НУ ОМА</div>
            </div>
          </div>

          {/* Cadet Quote */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-xs text-amber-200 font-serif-maritime italic">
            <span>⚓</span>
            <span>«Разом творимо добро та зігріваємо дитячі серця!»</span>
            <span>⚓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
