import React, { useState } from 'react';
import { FAIR_TREATS, FairDish } from '../data/fairMenu';
import { FoodItemIcon } from './MenuFoodIcons';

export const MenuSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hot' | 'pastry' | 'drinks'>('all');

  const filteredDishes =
    filter === 'all'
      ? FAIR_TREATS
      : FAIR_TREATS.filter((dish) => dish.category === filter);

  return (
    <section id="treats" className="py-16 bg-[#040e1a] relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-amber-500/20 border-2 border-amber-400 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-md">
            <span>🥐</span>
            <span className="text-slate-300">Стіл частувань курсантів</span>
            <span className="text-white text-sm sm:text-base font-black font-mono">611 ГРУПИ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-nautical text-white">
            Ярмаркові Смаколики
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Свіжа домашня випічка, рум'яні пиріжки, кекси, освіжаючі напої та гаряча юшка від курсантів 611 групи ДФК НУ ОМА. Усі гроші з ярмарки передаються до дитячого будинку!
          </p>

          {/* Clean Segmented Filter Controls */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'Усе меню (9)', icon: '⚓' },
              { id: 'hot', label: 'Казан Юшки (5 л)', icon: '🍲' },
              { id: 'pastry', label: 'Випічка та кекси (5)', icon: '🥐' },
              { id: 'drinks', label: 'Напої (3)', icon: '🥤' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                  filter === tab.id
                    ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-[#07192f] text-slate-300 border-slate-700/80 hover:border-amber-400/50 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Treats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((item: FairDish) => {
            const isYushka = item.id === 'yushka';

            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between p-6 rounded-3xl transition-all duration-300 ${
                  isYushka
                    ? 'bg-gradient-to-b from-[#0e2c52] to-[#081b33] border-2 border-amber-400 shadow-xl shadow-amber-500/10 md:col-span-2 lg:col-span-3'
                    : 'bg-[#07192f] border border-slate-700/80 hover:border-amber-400/50 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Price Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex items-center justify-center">
                      <FoodItemIcon type={item.iconType} className={isYushka ? 'w-12 h-12' : 'w-10 h-10'} />
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-sm sm:text-base font-black font-mono">
                        {item.priceText}
                      </span>
                      <span className="block text-[10px] text-slate-400 mt-1 uppercase font-mono">
                        на благодійність
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-nautical text-white leading-snug">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Cadet Fair Tag */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-amber-400/90 font-medium flex items-center gap-1.5 font-serif-maritime italic">
                    <span>⚓</span> 611 група • ДФК НУ ОМА
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">
                    2 жовтня • 11:00
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charity Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#0b2447] via-[#091b35] to-[#0b2447] border border-amber-400/40 text-center max-w-3xl mx-auto shadow-xl">
          <div className="text-2xl mb-2">💖</div>
          <h4 className="text-base sm:text-lg font-bold text-white font-nautical">
            Усі смаколики готуються курсантами з душею
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto leading-relaxed">
            Спробуйте кекси (20 грн), пиріжки з вишнею (30 грн), пиріжки з сиром (25 грн), слойки з яблуком (35 грн), печиво «Рибка» (5 грн), компот, мохіто та дюшес (по 15 грн / стакан) — кожна копійка йде на допомогу дітям!
          </p>
        </div>
      </div>
    </section>
  );
};
