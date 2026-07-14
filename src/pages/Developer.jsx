import React from 'react';
import devLogo from '../assets/images/ff0cc4_95380baa6a0146cca7b9128144b8a17c.png';
import headerBg from '../assets/images/be40d5_18a375cfa98a42228249c287e68124d2.jpg';

export default function Developer() {
  return (
    <div className="font-sans text-neutral-dark">
      {/* Header */}
      <section 
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(14, 72, 40, 0.85), rgba(14, 72, 40, 0.95)), url(${headerBg})` }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-3">Aparna Developer</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-secondary-light font-light max-w-xl mx-auto">
            Crafting enduring landmarks and creating vibrant communities
          </p>
        </div>
      </section>

      {/* About Profile Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Text Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block">Who We Are</span>
                <h2 className="text-3xl font-extrabold text-primary uppercase mt-1 tracking-wide">About Aparna Developer</h2>
                <div className="h-[2px] w-20 bg-primary mt-2 rounded-full"></div>
              </div>

              <p className="text-sm text-neutral-dark/80 leading-relaxed font-light">
                At **Aparna Developer**, we turn dreams into enduring landmarks. With a legacy of delivering successful residential, commercial, and mixed-use projects, our vision has always been clear — to craft spaces that blend innovation with functionality and design with purpose.
              </p>
              
              <p className="text-sm text-neutral-dark/80 leading-relaxed font-light">
                Guided by the visionary leadership of our founders, our journey spans decades of excellence and trust. Today, we are not only building homes but creating vibrant communities across Patna and beyond.
              </p>

              <p className="text-sm text-neutral-dark/80 leading-relaxed font-light border-l-2 border-primary pl-4 py-1 bg-[#F1F5ED]/40 rounded-r-lg">
                Beyond real estate, the Aparna Group is also engaged in tea packaging, rice processing, and jewellery — reflecting our diversified strength and commitment to quality in every venture.
              </p>

              <p className="text-sm text-neutral-dark/80 leading-relaxed font-light">
                Join our growing family and experience how dreams find their home at Aparna Developer.
              </p>
            </div>

            {/* Right Block: Image/Logo Box */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="bg-[#F1F5ED]/40 border border-neutral-light p-10 sm:p-12 rounded-3xl shadow-sm text-center max-w-sm w-full flex flex-col justify-center items-center gap-6">
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-neutral-dark/40">Official Developer Logo</span>
                
                {/* Visual fallback/custom logo styling */}
                <div className="flex items-center gap-2 my-2 py-4 border-y border-neutral-light w-full justify-center">
                  <span className="text-xl font-bold tracking-widest text-primary uppercase">APARNA GROUP</span>
                  {/* Yellow Flower Logo Graphic */}
                  <svg className="h-6 w-6 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5V6a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2zm0 17a1.5 1.5 0 0 1 1.5 1.5V22a1.5 1.5 0 0 1-3 0v-1.5A1.5 1.5 0 0 1 12 19zm8.5-8.5a1.5 1.5 0 0 1 0 3H18a1.5 1.5 0 0 1 0-3h2.5zM6 12a1.5 1.5 0 0 1-1.5 1.5H2a1.5 1.5 0 0 1 0-3h2.5A1.5 1.5 0 0 1 6 12zm11.243-7.243a1.5 1.5 0 0 1 2.121 2.121l-1.768 1.768a1.5 1.5 0 1 1-2.121-2.121l1.768-1.768zM8.515 15.485a1.5 1.5 0 0 1 2.121 2.121l-1.768 1.768a1.5 1.5 0 1 1-2.121-2.121l1.768-1.768zm10.606 1.768a1.5 1.5 0 0 1-2.121 2.121l-1.768-1.768a1.5 1.5 0 1 1 2.121-2.121l1.768 1.768zM6.747 6.747a1.5 1.5 0 0 1 0-2.121l1.768-1.768a1.5 1.5 0 1 1 2.121 2.121L8.868 6.747a1.5 1.5 0 0 1-2.121 0z"/>
                  </svg>
                </div>
                
                <p className="text-xs text-neutral-dark/60 leading-relaxed font-light">
                  A trusted multi-sector corporate brand delivering quality spaces and products across Patna and beyond.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
