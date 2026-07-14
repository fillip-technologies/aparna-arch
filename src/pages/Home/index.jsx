import React from 'react';
import Hero from './components/Hero';
import OverlapBanner from './components/OverlapBanner';
import ProjectOverview from './components/ProjectOverview';
import ProjectDetails from './components/ProjectDetails';
import ConstructionUpdate from './components/ConstructionUpdate';
import BankingPartners from './components/BankingPartners';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';

export default function Home() {
  return (
    <div className="font-sans text-neutral-dark">
      {/* 1. Parallax Hero Section */}
      <Hero />

      {/* Scrolling Content Wrapper */}
      <div className="relative z-10 bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.18)]">
        
        {/* 2. Overlap Specs Banner */}
        <OverlapBanner />

        {/* 3. Project Overview Video */}
        <ProjectOverview />

        {/* 4. Project Details Cards */}
        <ProjectDetails />

        {/* 5. Construction Update Video */}
        <ConstructionUpdate />

        {/* 6. Banking Partners Section */}
        <BankingPartners />

        {/* 7. Contact Section */}
        <ContactSection />

        {/* 8. Map Section */}
        <MapSection />

      </div>
    </div>
  );
}
