import React, { useEffect, useRef } from 'react';
import Logo from '../../../components/Logo';
import slide2 from '../../../assets/Final-Exterior-View/Landscape-pool-view.jpg';

export default function Hero() {
  const heroBgRef = useRef(null);

  useEffect(() => {
    const heroBg = heroBgRef.current;
    if (!heroBg) return;

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        heroBg.style.transform = 'none';
        return;
      }
      const currentScroll = window.scrollY;
      const maxScroll = window.innerHeight;
      if (currentScroll <= maxScroll + 100) {
        heroBg.style.transform = `translate3d(0, ${currentScroll * 0.75}px, 0)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[80vh] md:h-[95vh] w-full overflow-hidden bg-neutral-dark flex items-center justify-center z-0">
      {/* Background Image with scroll parallax (disabled on mobile for fit) */}
      <div
        ref={heroBgRef}
        className="absolute left-0 w-full h-full top-0 md:h-[140%] md:-top-[20%] bg-cover bg-[position:70%_center] md:bg-center"
        style={{
          backgroundImage: `url("${slide2}")`
        }}
      />
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Centered Large White Logo */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
        <Logo light={true} className="scale-[1.8] sm:scale-[2.4] hover:scale-[2.45] transition-transform duration-500" />
      </div>
    </section>
  );
}
