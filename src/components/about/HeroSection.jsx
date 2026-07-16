import React from 'react';
import poolImg from '../../assets/Final-Exterior-View/Fountain-Area-4_Updated.jpg';

/**
 * HeroSection — full-height parallax hero for the About Us page.
 * Uses a green-tinted background image with centred text.
 */
export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: '85vh',
        backgroundImage: `linear-gradient(rgba(14, 72, 40, 0.65), rgba(14, 72, 40, 0.4)), url("${poolImg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="text-center px-5 text-white z-10">
        {/* Page title */}
        <h1
          className="font-montserrat font-bold uppercase tracking-[0.05em] mb-2.5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          About Us
        </h1>

        {/* Sub-label */}
        <p
          className="font-montserrat font-light uppercase tracking-[0.1em]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#97C693' }}
        >
          Aparna Architect
        </p>
      </div>
    </section>
  );
}
