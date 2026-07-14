import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectSpecsSection from './components/ProjectSpecsSection';
import FacilitiesSection from './components/FacilitiesSection';

export default function Specification() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="font-sans text-neutral-dark bg-white min-h-screen">
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: PROJECT SPECIFICATIONS */}
      <ProjectSpecsSection scrollY={scrollY} isMobile={isMobile} />

      {/* SECTION 3: FACILITIES & INFRASTRUCTURE */}
      <FacilitiesSection scrollY={scrollY} isMobile={isMobile} />
    </div>
  );
}
