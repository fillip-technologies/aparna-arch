import React from 'react';
import gardenImg from '../../../assets/Final-Exterior-View/garden_view_hires.jpg';

export default function FacilitiesSection({ scrollY, isMobile }) {
  const facilitiesSpecs = [
    {
      heading: 'Security & Safety',
      items: [
        '24x7 CCTV Surveillance',
        'Multi-Tier Security System',
        'Boom Barrier Entry',
        'Fire Door at Fire Escape Staircase',
        'Fire Hydrant in Common Area',
      ],
    },
    {
      heading: 'Lifestyle & Recreation',
      items: [
        'Outdoor Movie Theatre',
        'Mini Theatre',
        'Card Room',
        'Party Lawn',
        'Festival Podium',
        'Lounge',
      ],
    },
    {
      heading: 'Green & Smart Living',
      items: [
        'Solar panels for lighting in common areas',
        'Water Efficient Fixtures',
        'Drip Sprinkler System for Landscaping',
        'Low VOC Paints and Materials',
        'Rainwater Harvesting System',
      ],
    },
    {
      heading: 'Power & Utilities',
      items: [
        '100% Power Backup for Common Areas',
        'EV Charging Points',
        'Garbage Chute',
        'Proper Street Lighting',

      ],
    },
    {
      heading: 'Community Amenities',
      items: [
        'Temple',
        'Pet Friendly Zone',
        'Boom Barrier Entry',
        'Landscaped Open Spaces',
        'Children Friendly Environment',
      ],
    },
  ];

  return (
    <section className="bg-white p-0 w-full overflow-hidden border-t border-[#e5e5e5]">
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] w-full m-0 p-0 items-stretch gap-0">

        {/* Left Column - 60% Facilities Content */}
        <div className="px-6 py-10 sm:px-8 md:px-[6%] flex flex-col justify-center bg-[#f7faf5] order-2 md:order-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-8 md:gap-y-5 w-full">
            {facilitiesSpecs.map((spec, idx) => (
              <div key={idx} className="break-inside-avoid [page-break-inside:avoid]">
                <h3 className="font-montserrat text-[13px] font-bold text-neutral-dark mb-1.5 leading-snug uppercase tracking-wider">
                  {spec.heading}
                </h3>
                <ul className="m-0 pl-4 list-disc flex flex-col gap-0.5">
                  {spec.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="font-montserrat text-xs font-normal text-neutral-dark/70 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - 40% Image with Sage Green Overlay */}
        <div className="relative w-full overflow-hidden h-[320px] min-h-[320px] md:h-[calc(100vh-72px)] md:min-h-[500px] lg:min-h-[550px] md:sticky md:top-[72px] md:self-start order-1 md:order-none">
          <img
            src={gardenImg}
            alt="Garden and landscape view"
            className="w-full h-full object-cover block transition-transform duration-100 ease-out"
            style={{
              transform: isMobile ? 'none' : `translate3d(0, ${scrollY * 0.05}px, 0) scale(1.15)`,
            }}
          />
          {/* Forest Green Shade Overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(14,72,40,0.65) 0%, rgba(10,51,28,0.60) 100%)' }} />

          {/* White Title Overlay Centered on Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2] w-[80%] text-center">
            <h2
              className="font-montserrat font-bold text-white m-0 leading-tight tracking-[0.12em] uppercase"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              Facilities &
              <br />
              Infrastructure
            </h2>
            {/* Decorative underline accent */}
            <div className="w-12 h-[3px] bg-white/60 mx-auto mt-4 rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}
