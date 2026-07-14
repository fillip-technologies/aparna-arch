import React from 'react';
import specVideo from '../../../assets/videos/specification-video.mp4';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center [clip-path:inset(0)]">
      {/* Fixed background video — sticks while hero scrolls away */}
      <video
        src={specVideo}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Dark overlay for text readability */}
      <div className="fixed inset-0 bg-black/45 z-[1] pointer-events-none" />

      {/* Deep green color tint */}
      <div className="fixed inset-0 bg-primary/18 mix-blend-color z-[1] pointer-events-none" />

      {/* Centered Hero Text */}
      <div className="relative z-[2] text-center px-6">
        <h1
          className="font-montserrat text-white tracking-wide leading-tight"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 300,
            textShadow: '0 2px 16px rgba(0,0,0,0.25)',
          }}
        >
          <span className="font-bold italic">Specification</span>{' '}
          <span className="font-light">and Facilities</span>
        </h1>
      </div>
    </section>
  );
}
