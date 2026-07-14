import React from 'react';

// Import local partner assets
import sbiBank from '../../../assets/partners/sbi-bank.webp';
import licBank from '../../../assets/partners/lic-removebg-preview.png';
import unionBank from '../../../assets/partners/Union-bank.webp';
import punjabBank from '../../../assets/partners/punjab-bank-removebg-preview.png';
import centralBank from '../../../assets/partners/central-bank-removebg-preview.png';
import idbiBank from '../../../assets/partners/idbi-removebg-preview.png';
import iciciBank from '../../../assets/partners/icai-bank-removebg-preview.png';
import ucoBank from '../../../assets/partners/uco-bank-removebg-preview.png';
import boiBank from '../../../assets/partners/images-5-removebg-preview.png';
import bob from '../../../assets/partners/bob-removebg-preview.png';

// Import local account/listing assets
import housingLogo from '../../../assets/accounts/Housing-removebg-preview.png';
import acresLogo from '../../../assets/accounts/99acreslogo.webp';
import magicbricksLogo from '../../../assets/accounts/magicbricks-removebg-preview.png';
import justdialLogo from '../../../assets/accounts/Justdial.webp';

export default function BankingPartners() {
  const partners = [
    { name: 'State Bank of India', logo: sbiBank },
    { name: 'LIC Housing Finance', logo: licBank },
    { name: 'Union Bank of India', logo: unionBank },
    { name: 'Punjab National Bank', logo: punjabBank },
    { name: 'Central Bank of India', logo: centralBank },
    { name: 'IDBI Bank', logo: idbiBank },
    { name: 'ICICI Bank', logo: iciciBank },
    { name: 'UCO Bank', logo: ucoBank },
    { name: 'Bank of India', logo: boiBank },
    { name: 'Bank of Baroda', logo: bob },
  ];

  const listings = [
    { name: 'Housing.com', logo: housingLogo, link: 'https://housing.com/buy-the-great-ashoka-city-by-aparna-architect-and-engicons-private-limited-in-ranipur-patna-pid-354320' },
    { name: '99acres', logo: acresLogo, link: 'https://www.99acres.com/the-great-ashoka-city-ranipur-patna-npxid-r351059' },
    { name: 'MagicBricks', logo: magicbricksLogo, link: 'https://www.magicbricks.com/aparna-the-great-ashoka-city-ranipur-patna-pdpid-4d4235333332323233' },
    { name: 'Justdial', logo: justdialLogo, link: 'https://www.justdial.com/Patna/The-Great-Ashoka-City-Sudarshan-Path/0612PX612-X612-180424091848-W8N5_BZDET?via=scode' },
  ];

  return (
    <section className="py-24 bg-white border-t border-neutral-light">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Banking Partners */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-wide">
          Our Banking Partners
        </h2>
        <div className="h-[3px] w-24 bg-primary mx-auto mb-16 rounded-full"></div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-center items-center max-w-5xl mx-auto mb-24">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-24 px-6 flex items-center justify-center bg-white rounded-2xl border border-[#F1F5ED] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(14,72,40,0.08)] hover:-translate-y-1.5 hover:border-secondary-light/40 transition-all duration-300 group cursor-pointer"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Also Available On Section */}
        <div className="mt-20 pt-16 border-t border-[#F1F5ED] text-left max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-1 tracking-wide">
            Also Available on
          </h3>
          <p className="text-xs sm:text-sm text-neutral-dark/65 mb-10 font-medium">
            Find your perfect home with trusted listings
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {listings.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-24 px-6 flex items-center justify-center bg-white rounded-2xl border border-[#F1F5ED] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(14,72,40,0.08)] hover:-translate-y-1.5 hover:border-secondary-light/40 transition-all duration-300 group cursor-pointer"
                title={item.name}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
