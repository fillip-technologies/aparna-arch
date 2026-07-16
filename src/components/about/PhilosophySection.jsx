import React from 'react';
import hallImg from '../../assets/Final-Exterior-View/Gate-view day_Update 02.jpg';
import ScrollReveal from './ScrollReveal';

/**
 * PhilosophySection — "Engineering Excellence & Value for Money" section.
 * Left: text block with label, heading, divider, paragraphs.
 * Right: hover-zoom image card.
 */
export default function PhilosophySection() {
  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">

          {/* ── Left: Text Content ── */}
          <ScrollReveal>
            <div>
              {/* Section label */}
              <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-secondary block mb-3">
                Our Philosophy
              </span>

              {/* Heading */}
              <h2
                className="font-montserrat font-bold text-primary leading-[1.25] mb-7"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
              >
                Engineering Excellence &amp; Value for Money
              </h2>

              {/* Accent divider */}
              <div className="w-[60px] h-[3px] bg-secondary-light mb-7" />

              {/* Body paragraphs */}
              <p className="text-[15px] leading-7 text-[#444] mb-5 text-justify">
                The Aparna Group believes in developing and constructing aesthetically designed,
                functionally efficient residential and commercial complexes of international quality,
                offering <strong>"more value for money"</strong>.
              </p>

              <p className="text-[15px] leading-7 text-[#444] text-justify">
                We believe our buildings should reflect engineering excellence with our view to provide
                complete customer satisfaction. It is our intention that the quality of our product &amp;
                services should result in complete value for our clients. While rendering our construction
                services, we emphasize on Environmental, Health and Safety standards as an integral part
                of our business practices.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Right: Image Card ── */}
          <ScrollReveal delay={150}>
            <div className="group relative overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[420px]">
              <img
                src={hallImg}
                alt="Aparna Living Hall Interior"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Inner glow border */}
              <div className="absolute inset-0 border-[15px] border-white/15 rounded-[20px] pointer-events-none" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
