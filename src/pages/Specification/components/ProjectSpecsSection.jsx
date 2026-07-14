import React from 'react';
import interiorImg from '../../../assets/Final-Exterior-View/Road-garden-view.jpg';

export default function ProjectSpecsSection({ scrollY, isMobile }) {
  const projectSpecs = [
    {
      heading: 'STRUCTURE',
      items: [
        'RCC frame structure with brick work in cement mortar as per design and specification of structural consultant. Maximum external wall shall be 10" thick.',
      ],
    },
    {
      heading: 'ENTRANCE DOOR',
      items: [
        'Entrance door shutters of 35 mm thick ISI mark, one side teak with decorative beading/designer skin moulded panel door.',
      ],
    },
    {
      heading: 'WINDOWS',
      items: [
        'Fully glazed UPVC windows with powder-coated 2 track aluminium windows.',
      ],
    },
    {
      heading: 'LIFT',
      items: [
        'Automatic elevator of Thyssenkrupp/OTIS or equivalent, four passenger lifts and one freight lift.',
      ],
    },
    {
      heading: 'ELECTRICAL',
      items: [
        'All internal wiring in concealed conduits with copper wires and modular switches. Adequate lighting, power points, sockets and outlets provided in all rooms.',
      ],
    },
    {
      heading: 'FLOORING',
      items: [
        'Premium designer vitrified flooring throughout the apartment.',
      ],
    },
    {
      heading: 'KITCHEN',
      items: [
        'Granite working platform.',
        'Designer wall tiles.',
        'Stainless steel sink.',
        'Hot and cold water with Aquaguard point.',
      ],
    },
    {
      heading: 'BATHROOMS',
      items: [
        'Designer floor and wall tiles.',
        'Branded sanitary ware.',
        'Premium CP fittings.',
        'Hot and cold water supply.',
      ],
    },
    {
      heading: 'INTERCOM',
      items: [
        'Intercom facility provided in all flats.',
      ],
    },
    {
      heading: 'BUILDING FEATURES',
      items: [
        'Seismic zone compliant structure.',
        'Landscaped green surroundings.',
        'Large and efficient floor plans.',
        'Wide common areas.',
      ],
    },

    {
      heading: 'PARKING AREA',
      items: [
        'Designer paver interlocking tile flooring.',
        'Well-planned and spacious parking.',
      ],
    },
    {
      heading: 'DOOR FRAMES',
      items: [
        'Door frames of sal wood with decorative beading.',
      ],
    },
  ];

  return (
    <section className="bg-white p-0 w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] w-full m-0 p-0 items-stretch gap-0">

        {/* Left Column - 40% Image with Sage Green Overlay */}
        <div className="relative w-full overflow-hidden h-[320px] min-h-[320px] md:h-[calc(100vh-72px)] md:min-h-[500px] lg:min-h-[550px] md:sticky md:top-[72px] md:self-start">
          <img
            src={interiorImg}
            alt="Premium interior living space"
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
              Project
              <br />
              Specifications
            </h2>
            {/* Decorative underline accent */}
            <div className="w-12 h-[3px] bg-white/60 mx-auto mt-4 rounded-full" />
          </div>
        </div>

        {/* Right Column - 60% Specification Content */}
        <div className="px-6 py-10 sm:px-8 md:px-[6%] flex flex-col justify-center bg-[#f7faf5]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-8 md:gap-y-5 w-full">
            {projectSpecs.map((spec, idx) => (
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

      </div>
    </section>
  );
}
