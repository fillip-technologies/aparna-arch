import React from 'react';

import {
  HeroSection,
  PhilosophySection,
  MasterpieceSection,
  BusinessActivities,
  AssociatedCompanies,
  CompletedProjects,
} from '../components/about';

/**
 * AboutUs page — thin orchestrator that composes all section components.
 *
 * Folder structure:
 *   src/
 *   └── components/
 *       └── about/
 *           ├── index.js              ← barrel exports
 *           ├── ScrollReveal.jsx      ← shared scroll animation wrapper
 *           ├── HeroSection.jsx       ← parallax hero
 *           ├── PhilosophySection.jsx ← Engineering Excellence section
 *           ├── MasterpieceSection.jsx← Crafting Grand Masterpieces section
 *           ├── BusinessActivities.jsx← Core Business Activities accordion
 *           ├── AssociatedCompanies.jsx← Our Associated Companies section
 *           └── CompletedProjects.jsx ← Completed Projects table and filters
 */
export default function AboutUs() {
  return (
    <div className="font-sans text-neutral-dark bg-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <PhilosophySection />
      <MasterpieceSection />
      <BusinessActivities />
      <AssociatedCompanies />
      <CompletedProjects />
    </div>
  );
}
