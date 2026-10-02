import React, { useState } from 'react';
import { CauldronSVG } from './CauldronSVG';

export const CauldronFeatureSection: React.FC = () => {
  const [stirEffect, setStirEffect] = useState(false);

  const handleStir = () => {
    setStirEffect(true);
    setTimeout(() => {
      setStirEffect(false);
    }, 1200);
  };

  return (
    <section id="cauldron" className="py-16 bg-gradient-to-b from-[#040e1a] via-[#07192f] to-[#040e1a] relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🍲</span> Головна страва ярмарку
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-nautical text-white">
            Казан Курсантської Юшки (5 л)
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Справжня дунайська рибна юшка, зварена за традиційним флотським рецептом. Гаряча, навариста, з часниковим саламауром та димком від живого багаття!
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Boiling Cauldron */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0b2447] via-[#071b33] to-[#030d17] border-2 border-amber-400/80 shadow-2xl text-center">
              {/* Badge with large 611 */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 via-amber-400/20 to-amber-500/25 text-amber-300 border-2 border-amber-400 shadow-md mb-4">
                <span>⚓</span>
                <span className="text-xs uppercase font-bold text-slate-300 font-mono">Казан</span>
                <span className="text-base sm:text-lg font-black text-amber-300 font-mono tracking-wider">611 ГРУПИ</span>
                <span className="text-xs text-amber-400 font-bold">• 5 л</span>
              </div>

              {/* The ONE and ONLY Cauldron SVG Animation on the entire site */}
              <CauldronSVG isStirring={stirEffect} onStir={handleStir} className="w-full max-w-[340px] mx-auto" />

              <div className="mt-6 flex flex-col items-center">
                <button
                  onClick={handleStir}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>🥄</span>
                  <span>Помішати юшку в казані (5 л)</span>
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-center gap-6 text-xs text-amber-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <span>🍲</span> 5 літрів
                </span>
                <span className="flex items-center gap-1.5">
                  <span>🐟</span> Свіжа риба
                </span>
                <span className="flex items-center gap-1.5">
                  <span>🧄</span> Саламаур
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Recipe Secrets, Partner Gratitude & Tradition */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold font-nautical text-amber-300">
              Секрети нашої юшки
            </h3>

            {/* Gratitude to Store Chain Dolphin for providing the fish */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#072448] via-[#0d3b66] to-[#072448] border-2 border-cyan-400/70 shadow-xl flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-3xl flex-shrink-0 shadow-inner">
                🐬
              </div>
              <div>
                <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block font-mono">
                  Окрема подяка партнеру
                </span>
                <h4 className="text-base font-black text-white flex items-center gap-2">
                  <span>Мережа магазинів «Дельфін»</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/30 text-cyan-200 border border-cyan-400/50">Партнер</span>
                </h4>
                <p className="text-xs text-sky-100/90 mt-1 leading-relaxed">
                  Щиро дякуємо <strong>мережі магазинів «Дельфін»</strong> за те, що безкоштовно надали свіжу добірну рибу для приготування нашої святкової курсантської юшки!
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#081b33] border border-amber-500/20 flex gap-3.5">
                <div className="text-2xl flex-shrink-0">🍲</div>
                <div>
                  <h4 className="text-sm font-bold text-white">5-літровий чавунний казан</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Юшка вариться у чавунному казані об'ємом 5 літрів, що забезпечує ідеальний баланс наваристості, спецій та тепла.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#081b33] border border-amber-500/20 flex gap-3.5">
                <div className="text-2xl flex-shrink-0">🪵</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Аромат димку</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Вогонь із сухих полін надає юшці той самий неповторний польовий аромат морських привалів та походів.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#081b33] border border-amber-500/20 flex gap-3.5">
                <div className="text-2xl flex-shrink-0">🧄</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Часниковий саламаур</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Додається до кожної тарілочки: пікантна заправка з розтертого часничку, перцю та міцного бульйону.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#092244] border border-amber-400/40 text-center">
              <span className="text-xs font-bold uppercase text-amber-300 tracking-wider block font-mono">
                Організатор: ДФК НУ ОМА
              </span>
              <p className="text-xs text-slate-200 mt-1">
                2 жовтня об 11:00 на подвір'ї коледжу (Проспект Миру, 9). Запрошуємо всіх скуштувати гарячу юшку!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
