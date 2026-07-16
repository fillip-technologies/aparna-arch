import React from 'react';
import ScrollReveal from './ScrollReveal';

const associatedCompanies = [
  {
    name: 'Aparna Architect Pvt Ltd',
    cin: 'U45200BR2011PTC016915',
    startedFrom: '2011',
  },
  {
    name: 'Mahendra Green Homes (P) Ltd',
    cin: 'U45200BR2012PTC018304',
    startedFrom: '2010',
  },
  {
    name: 'Sea Vihar Funfair Pvt Ltd',
    cin: 'U74999BR2016PTC032577',
    startedFrom: '2016',
  },
];

/**
 * AssociatedCompanies — beautiful responsive table listing associated companies.
 */
export default function AssociatedCompanies() {
  return (
    <section className="py-20 bg-white border-t border-[#f0f0f0]">
      <div className="max-w-[900px] mx-auto px-6">
        
        {/* ── Section Heading ── */}
        <ScrollReveal>
          <div className="text-center mb-[45px]">
            <h2
              className="font-montserrat font-extrabold leading-[1.25] m-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
            >
              <span className="text-[#00a2ff]">Our</span>{' '}
              <span className="text-[#1e293b]">Associated Companies</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ── Responsive Table Card ── */}
        <ScrollReveal delay={150}>
          <div className="overflow-x-auto bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#eaeaea]">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#eaeaea]">
                  <th className="py-5 px-6 font-montserrat font-semibold text-[14px] text-gray-500 text-center border-r border-[#eaeaea] w-1/3">
                    Name
                  </th>
                  <th className="py-5 px-6 font-montserrat font-semibold text-[14px] text-gray-500 text-center border-r border-[#eaeaea] w-1/3">
                    CIN
                  </th>
                  <th className="py-5 px-6 font-montserrat font-semibold text-[14px] text-gray-500 text-center w-1/3">
                    Started from
                  </th>
                </tr>
              </thead>
              <tbody>
                {associatedCompanies.map((company, idx) => {
                  const isLast = idx === associatedCompanies.length - 1;
                  return (
                    <tr
                      key={idx}
                      className={`transition-colors duration-200 hover:bg-[#f8fafc]/50 ${
                        !isLast ? 'border-b border-[#eaeaea]' : ''
                      }`}
                    >
                      <td className="py-5 px-8 font-montserrat text-[14px] text-gray-700 font-medium border-r border-[#eaeaea]">
                        {company.name}
                      </td>
                      <td className="py-5 px-8 font-montserrat text-[14px] text-gray-600 font-mono tracking-wide border-r border-[#eaeaea]">
                        {company.cin}
                      </td>
                      <td className="py-5 px-8 font-montserrat text-[14px] text-gray-600">
                        {company.startedFrom}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
