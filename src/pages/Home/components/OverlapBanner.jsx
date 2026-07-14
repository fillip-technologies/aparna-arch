import React from 'react';
import detailsBg from '../../../assets/Final-Exterior-View/Gate-view day_Update 02.jpg';

export default function OverlapBanner() {
  return (
    <section
      id="overlap-banner"
      className="relative pt-24 pb-32 text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(14, 72, 40, 0.82), rgba(14, 72, 40, 0.82)), url("${detailsBg}")`,
        backgroundAttachment: 'fixed',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 88%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bitter font-bold tracking-wide">2.5, 3, 4, 5 BHK</h3>
            <p className="text-[10px] sm:text-xs tracking-[0.25em] text-white/90 font-montserrat font-bold uppercase mt-1">Spacious Flats</p>
          </div>

          <h2 className="text-4xl sm:text-[50px] font-montserrat font-black tracking-wide leading-[1.15]">
            The Great Ashoka<br />City
          </h2>

          <div className="text-[11px] sm:text-xs tracking-wider text-white/80 font-montserrat pt-2">
            <span>Ranipur, Patna &nbsp;|&nbsp; </span>
            <a href="#" target="_blank" rel="noreferrer" className="hover:underline text-secondary-light font-medium">
              Bihar
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end text-left md:text-right space-y-8">
          <div className="space-y-1">
            <p className="text-lg sm:text-[22px] font-playfair italic text-white/95 font-normal">Tallest Towers in the region</p>
            <h2 className="text-6xl sm:text-[76px] font-montserrat font-black tracking-tight leading-none">G+15</h2>
          </div>

          <div>
            <h2 className="text-4xl sm:text-[52px] font-montserrat tracking-wide leading-none">
              <span className="font-black">3800</span> <span className="font-light">sq.ft.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
