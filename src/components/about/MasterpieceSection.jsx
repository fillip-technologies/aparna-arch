import React from 'react';
import amphitheaterImg from '../../assets/Final-Exterior-View/Amphiteater view_Updated 03.jpg';
import ScrollReveal from './ScrollReveal';

/**
 * MasterpieceSection — "Crafting Grand Masterpieces" section.
 * Left: hover-zoom image (reordered to bottom on mobile).
 * Right: text block with label, heading, divider, paragraphs.
 */
export default function MasterpieceSection() {
  return (
    <section className="py-[80px_0_100px] bg-[#fcfcfc] border-t border-[#f0f0f0]"
      style={{ padding: '80px 0 100px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">

          {/* ── Left: Image (shown below text on mobile) ── */}
          <div className="order-2 md:order-1">
            <ScrollReveal>
              <div className="group relative overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[420px]">
                <img
                  src={amphitheaterImg}
                  alt="Aparna Amphitheater Area"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                {/* Inner glow border */}
                <div className="absolute inset-0 border-[15px] border-white/15 rounded-[20px] pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Text Content (shown above image on mobile) ── */}
          <div className="order-1 md:order-2">
            <ScrollReveal delay={150}>
              <div>
                {/* Section label */}
                <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-secondary block mb-3">
                  Keen Eye For Detail
                </span>

                {/* Heading */}
                <h2
                  className="font-montserrat font-bold text-primary leading-[1.25] mb-7"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
                >
                  Crafting Grand Masterpieces
                </h2>

                {/* Accent divider */}
                <div className="w-[60px] h-[3px] bg-secondary-light mb-7" />

                {/* Body paragraphs */}
                <p className="text-[15px] leading-7 text-[#444] mb-5 text-justify">
                  Every magnificent structure or a monument is not only admired for its grandness but is
                  also acclaimed for the minute details that the creator ensured. We at Aparna have a keen
                  eye for details and firm belief in optimizing things at very fine levels.
                </p>

                <p className="text-[15px] leading-7 text-[#444] text-justify">
                  At Aparna Architect, every minuscule aspect has been inspected comprehensively so as to
                  match your taste and style. Rest assured: your new home is going to be one of the finest
                  masterpieces from the experienced creator,{' '}
                  <strong>"APARNA ARCHITECT"</strong>.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
