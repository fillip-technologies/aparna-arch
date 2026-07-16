import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

/** Accordion data */
const businessActivities = [
  {
    title: 'Planning',
    desc: 'We provide strategic project planning services that focus on optimal land utilization, regulatory compliance, functionality, and sustainability. Our planning process ensures a strong foundation for successful project execution.',
  },
  {
    title: 'Design',
    desc: 'Our expert design team crafts modern, aesthetically pleasing, and highly functional architectural concepts tailored to the needs of our clients.',
  },
  {
    title: 'Construction of Buildings',
    desc: 'We deliver top-tier building construction services using premium materials, state-of-the-art machinery, and experienced execution to ensure strength and quality.',
  },
  {
    title: 'Townships Development',
    desc: 'We specialize in developing integrated townships that feature premium infrastructure, green avenues, utility spaces, and complete community living.',
  },
  {
    title: 'Supervision & Project Management',
    desc: 'Our project managers oversee construction milestones, quality control, timeline compliance, and safety standards for seamless delivery.',
  },
];

/**
 * BusinessActivities — animated accordion listing core business activities.
 */
export default function BusinessActivities() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-[#fcfcfc] border-t border-[#f0f0f0]">
      <div className="max-w-[900px] mx-auto px-6">

        {/* ── Section Heading ── */}
        <ScrollReveal>
          <div className="text-center mb-[45px]">
            <h2
              className="font-montserrat font-extrabold leading-[1.25] m-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
            >
              <span className="text-[#00a2ff]">Our Core Business</span>{' '}
              <span className="text-[#1e293b]">Activities...</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ── Accordion Card ── */}
        <ScrollReveal delay={150}>
          <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#eaeaea] overflow-hidden px-6 py-2">
            {businessActivities.map((activity, idx) => {
              const isOpen = openIndex === idx;
              const isLast = idx === businessActivities.length - 1;

              return (
                <div
                  key={idx}
                  className={`py-5 ${!isLast ? 'border-b border-[#eaeaea]' : ''}`}
                >
                  {/* Accordion trigger */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex justify-between items-center bg-transparent border-none outline-none cursor-pointer text-left p-0"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-montserrat text-[15px] transition-colors duration-200 ${
                        isOpen ? 'font-semibold text-[#333]' : 'font-normal text-[#666]'
                      }`}
                    >
                      {activity.title}
                    </span>

                    {/* Chevron icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-[18px] h-[18px] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      style={{
                        fill: 'none',
                        stroke: '#333',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Accordion content */}
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      maxHeight: isOpen ? '200px' : '0',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="font-montserrat text-[14px] leading-7 text-[#555] mt-4 mb-1 text-justify">
                      {activity.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
