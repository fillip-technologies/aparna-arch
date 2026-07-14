import React from 'react';
import { useNavigate } from 'react-router-dom';
import detailBg from '../../../assets/Final-Exterior-View/Garden_With_EWS_Block_View.jpg';

export default function ProjectDetails() {
  const navigate = useNavigate();

  const projectDetails = [
    {
      title: 'Amenities',
      desc: '1335 - 3800 sqft House',
      subdesc: '',
      icon: (
        <svg viewBox="0 0 60 60" className="h-12 w-12" style={{ fill: 'none', stroke: '#0E4828', strokeWidth: '2.5' }}>
          <path d="M20 15v30M40 15v30M20 23h20M20 33h20" strokeLinecap="round" />
          <path d="M20 15c0-6 4-10 8-10s8 4 8 10M40 15c0-6-4-10-8-10s-8 4-8 10" />
          <path d="M10 48c4-2 8-2 12 0s8 2 12 0 8-2 12 0" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 52c4-2 8-2 12 0s8 2 12 0 8-2 12 0" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      path: '/amenities',
    },
    {
      title: 'Floor Plan',
      desc: '2.5 & 3 BHK Spacious Flats',
      subdesc: '',
      icon: (
        <svg viewBox="20 20 160 160" className="h-12 w-12" fill="#0E4828" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M152.069 152.895v-.467h.08V47.837h-12.385v.052H60.916v-.052H48.531v104.591h.155v.467h103.383zM60.916 60.339h78.848v80.103H60.916V60.339z" />
            <path d="M20.054 97.275h.016v.007h19.46V84.831h-7.09V32.634h46.343v7.131h12.385V20.2h-.008v-.016H20v12.451h.054v64.64z" />
            <path d="M167.616 20v.055h-64.295v.016h-.007v19.565h12.385v-7.129h51.917V79.1h-7.092v12.451h19.46v-.007H180V20h-12.384z" />
            <path d="M179.945 100.318h-.016v-.007h-19.46v12.838h7.091v53.821h-46.343v-7.351h-12.385v20.174h.008v.016H180v-12.84h-.054l-.001-66.651z" />
            <path d="M84.301 167.104H32.385V119.06h7.091v-12.84h-19.46v.007H20V180h12.385v-.056h64.294v-.018h.007v-20.173H84.301v7.351z" />
            <path d="M111.178 84.279l-10.098 8.32-9.719-8.007V68.56h-12.54c.233.233.311 21.011.311 21.011l12.933 10.454-12.624 10.402v21.945h12.385v-17.587l9.249-7.476 9.636 7.788v17.587h12.385v-21.946l-13.006-10.717 13.317-10.763c-.001.001.076-20.777.309-21.011h-12.539l.001 16.032z" />
          </g>
        </svg>
      ),
      path: '/floor-plans',
    },
    {
      title: 'Gallery',
      desc: 'Multi-Level Landscape',
      subdesc: '52% Open Space',
      icon: (
        <svg viewBox="43.5 62 113 76.001" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M127.288 76.941c-7.538 0-13.671 6.103-13.671 13.606s6.132 13.606 13.671 13.606c7.538 0 13.672-6.104 13.672-13.606s-6.134-13.606-13.672-13.606z" fill="#E98866" />
            <path d="M153.128 62H46.873a3.365 3.365 0 0 0-3.373 3.357v69.287a3.365 3.365 0 0 0 3.373 3.357h106.255a3.364 3.364 0 0 0 3.372-3.357V65.357A3.365 3.365 0 0 0 153.128 62zm-93.993 69.287l19.406-35.208 15.225 27.658c.319.58.904.966 1.564 1.035a2.035 2.035 0 0 0 1.746-.69l9.932-11.495 13.642 18.7H59.135zm90.62 0h-24.148a2.062 2.062 0 0 0-.177-.303l-16.65-22.824a2.029 2.029 0 0 0-3.173-.13l-9.696 11.221-15.594-28.33c-.354-.645-1.035-1.046-1.775-1.046s-1.419.401-1.775 1.046l-22.201 40.278c-.016.029-.023.059-.038.088h-4.285V68.713h99.51v62.574z" fill="#0E4828" />
          </g>
        </svg>
      ),
      path: '/gallery',
    },
    {
      title: 'Specifications',
      desc: 'Specifications & Facilities',
      subdesc: '',
      icon: (
        <svg viewBox="29.5 36 141 128" className="h-12 w-12" fill="#0E4828" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M166.5 36h-39.9c-11.385 0-21.33 6.268-26.6 15.536C94.73 42.268 84.785 36 73.4 36H33.5a4 4 0 0 0-4 4v100a4 4 0 0 0 4 4h46.55c8.795 0 15.95 7.178 15.95 16a4 4 0 0 0 8 0c0-8.822 7.155-16 15.95-16h46.55a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4zM96 142.111C91.762 138.312 86.17 136 80.05 136H37.5V44h35.9C85.862 44 96 54.168 96 66.667v75.444zM162.5 136h-42.55c-6.12 0-11.712 2.312-15.95 6.111V66.667C104 54.168 114.138 44 126.6 44h35.9v92z" />
          </g>
        </svg>
      ),
      path: '/specification',
    },
  ];

  return (
    <section
      className="relative pt-36 pb-28 bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(14, 72, 40, 0.82), rgba(5, 32, 16, 0.85)), url("${detailBg}")`,
        backgroundAttachment: 'fixed',
        clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-montserrat font-light mb-16 tracking-wide text-white">Project Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {projectDetails.map((card, idx) => (
            <div
              key={idx}
              onClick={() => navigate(card.path)}
              className="group cursor-pointer bg-[#F6EBE4] text-neutral-dark rounded-[30px] pt-10 pb-8 px-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between items-center text-center h-[340px] w-full max-w-[280px]"
            >
              {/* Icon wrapper */}
              <div className="h-16 flex items-center justify-center">
                {card.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 flex flex-col justify-center items-center my-4">
                <h3 className="font-montserrat font-normal text-xl text-primary mb-3">
                  {card.title}
                </h3>
                <p className="font-montserrat font-bold text-[14px] text-neutral-dark leading-snug">
                  {card.desc}
                </p>
                {card.subdesc && (
                  <p className="font-montserrat font-normal text-[12px] text-neutral-dark/70 mt-1">
                    {card.subdesc}
                  </p>
                )}
              </div>

              {/* Action Indicator */}
              <div className="w-[94px] h-[26px] border border-neutral-dark/40 flex items-center justify-center text-[11px] font-montserrat tracking-wider text-neutral-dark bg-transparent group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-none">
                Explore
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
