import React from 'react';
import { NauticalNavbar } from './components/NauticalNavbar';
import { HeroSection } from './components/HeroSection';
import { SwimmingFishSVG } from './components/SwimmingFishSVG';
import { CauldronFeatureSection } from './components/CauldronFeatureSection';
import { MenuSection } from './components/MenuSection';
import { HelmSection } from './components/HelmSection';
import { CharitySection } from './components/CharitySection';
import { LocationSection } from './components/LocationSection';
import { NauticalFooter } from './components/NauticalFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#040e1a] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Nautical Header / Navigation */}
      <NauticalNavbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section matching official poster */}
        <HeroSection />

        {/* Live Swimming Danube Fish Divider */}
        <SwimmingFishSVG />

        {/* The Famous 611 Group Cauldron & Fish Soup */}
        <CauldronFeatureSection />

        {/* Fair Treats Showcase (Кекси 20 грн, Пиріжки з вишнею 30 грн, тощо) */}
        <MenuSection />

        {/* Interactive Nautical Helm & Compass */}
        <HelmSection />

        {/* Charity Mission for Children's Home */}
        <CharitySection />

        {/* Location & Danube Map (Проспект Миру, 9) */}
        <LocationSection />
      </main>

      {/* Footer with Standalone HTML5 Download */}
      <NauticalFooter />
    </div>
  );
}
