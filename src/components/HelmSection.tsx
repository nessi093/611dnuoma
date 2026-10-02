import React from 'react';
import { ShipWheelSVG } from './ShipWheelSVG';
import { CompassRoseSVG } from './CompassRoseSVG';

export const HelmSection: React.FC = () => {
  return (
    <section id="helm" className="py-16 bg-gradient-to-b from-[#040e1a] via-[#07192f] to-[#040e1a] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>🧭</span> Навігація 611 групи
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-nautical text-white">
            Штурвальна Рубка Курсанта
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Майбутні штурмани та капітани 611 групи тримають стійкий курс на допомогу дітям. Покрути штурвал та звір курс за компасом!
          </p>
        </div>

        {/* Interactive Nautical Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Compass & Weather */}
          <div className="md:col-span-4 bg-[#051426] p-6 rounded-3xl border border-amber-500/30 flex flex-col items-center text-center shadow-xl">
            <h3 className="text-sm font-bold font-nautical text-amber-300 uppercase tracking-wider mb-4">
              Морський Компас ДФК
            </h3>
            <CompassRoseSVG size={190} />
            <div className="mt-6 w-full pt-4 border-t border-slate-800 space-y-2 text-left">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Локація:</span>
                <span className="font-semibold text-slate-200">Ізмаїл, Проспект Миру, 9</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Вітер на Дунаї:</span>
                <span className="font-semibold text-amber-300">Пн-Сх, 4-6 вузлів (сприятливий)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Атмосфера:</span>
                <span className="font-semibold text-emerald-400">100% сонячно і дружньо</span>
              </div>
            </div>
          </div>

          {/* Large Interactive Ship's Wheel */}
          <div className="md:col-span-8 bg-[#051426] p-6 sm:p-8 rounded-3xl border-2 border-amber-400/50 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="mb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                Інтерактивний Елемент
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-nautical text-white">
                Штурвал Курсантського Корабля
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Торкнись штурвала або скористайся кнопками, щоб спрямувати корабель 611 групи
              </p>
            </div>

            {/* Ship Wheel SVG */}
            <ShipWheelSVG size={260} />

            {/* Maritime Cadet Motto */}
            <div className="mt-6 p-4 rounded-xl bg-[#091f3a] border border-amber-500/30 max-w-lg text-center">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block font-mono">
                Девіз екіпажу 611 групи:
              </span>
              <p className="text-sm font-serif-maritime italic text-slate-200 mt-1">
                «У морі немає чужої біди — тримаємо вірний галс, варимо наваристу юшку та творимо добро разом!»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
