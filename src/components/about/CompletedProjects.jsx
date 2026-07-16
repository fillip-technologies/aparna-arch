import React, { useState, useMemo } from 'react';
import { Search, Layers, Building, Hotel, Activity, ShoppingBag } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const completedProjects = [
  // Residential & Commercial Projects
  { category: 'Residential & Commercial Projects', name: 'Aparna Dayal Residency', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Aparna Mansion', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Kamala Apartment', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Leena – Bibha Apartment', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Vijay Shanti Vihar', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Aparna Complex', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Aparna Residency', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Shail Parmeshwar County', location: '—' },
  { category: 'Residential & Commercial Projects', name: 'Legend Plaza', location: 'Digha–Ashiana Road, Patna' },

  // Hospitality Projects
  { category: 'Hospitality Projects', name: 'Khoobshurat Vatika Marriage Hall & Vatika Premier Hotel', location: 'Patna' },
  { category: 'Hospitality Projects', name: 'Hotel R.P. International', location: 'Patna' },
  { category: 'Hospitality Projects', name: 'Hotel Ambassador', location: 'Rajendra Path, Patna' },
  { category: 'Hospitality Projects', name: 'Hotel Magadh', location: 'Rajendra Path, Patna' },
  { category: 'Hospitality Projects', name: 'Hotel Nand', location: 'Rajendra Path, Patna' },
  { category: 'Hospitality Projects', name: 'Maharaja Inn', location: 'Rajendra Path, Patna' },
  { category: 'Hospitality Projects', name: 'Hotel Buddha International', location: 'Station Road, Patna' },

  // Healthcare Projects
  { category: 'Healthcare Projects', name: 'Ford Hospital', location: 'Patna' },
  { category: 'Healthcare Projects', name: 'Dr. Suresh Prasad Nursing Home', location: 'Patna' },
  { category: 'Healthcare Projects', name: 'Dr. Om Prakash Nursing Home', location: 'Bihar Sharif' },
  { category: 'Healthcare Projects', name: 'Jivan Jyoti Nursing Home', location: 'Bihar Sharif' },
  { category: 'Healthcare Projects', name: 'Dr. Alok Jain Diagnostics Centre', location: 'Gaya' },
  { category: 'Healthcare Projects', name: 'Dr. Arjun Hospital', location: 'Hazaribagh, Jharkhand' },

  // Commercial & Entertainment Projects
  { category: 'Commercial & Entertainment Projects', name: 'Alankar Honda Showroom', location: 'Patna' },
  { category: 'Commercial & Entertainment Projects', name: 'Sushil Plaza Cinema Hall', location: 'Phulwari Sharif, Patna' },
  { category: 'Commercial & Entertainment Projects', name: 'Reliance Footwear Showroom', location: 'Bailey Road, Patna' },
];

const categories = [
  { id: 'All', label: 'All Projects', icon: Layers },
  { id: 'Residential & Commercial Projects', label: 'Residential & Commercial', icon: Building },
  { id: 'Hospitality Projects', label: 'Hospitality', icon: Hotel },
  { id: 'Healthcare Projects', label: 'Healthcare', icon: Activity },
  { id: 'Commercial & Entertainment Projects', label: 'Commercial & Entertainment', icon: ShoppingBag },
];

/**
 * CompletedProjects — Beautiful light-themed section listing completed projects.
 * Formatted exactly as a standard bordered table that fits mobile screens perfectly.
 */
export default function CompletedProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    return completedProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.location !== '—' &&
          project.location.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-[#fcfcfc] border-t border-[#f0f0f0]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        
        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="text-center mb-[45px]">
            <h2
              className="font-montserrat font-extrabold leading-[1.25] mb-5 text-[#1e293b]"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
            >
              <span className="text-[#00a2ff]">Completed</span> Projects
            </h2>

            {/* Accent divider */}
            <div className="w-[60px] h-[3px] bg-[#00a2ff] mx-auto mb-7" />

            {/* Description Paragraphs */}
            <div className="max-w-[850px] mx-auto text-[14px] md:text-[15px] leading-7 text-gray-600 space-y-4 text-justify md:text-center">
              <p>
                Over the years, Aparna Architect Group has successfully completed a wide range of
                residential, commercial, hospitality, healthcare, and mixed-use developments. Each project
                stands as a testament to our commitment to quality construction, intelligent planning, and
                architectural excellence.
              </p>
              <p>
                Our completed projects are strategically located across Patna and other prominent cities,
                offering superior connectivity, modern amenities, and long-term value. With a strong focus
                on customer satisfaction, timely delivery, and engineering precision, we continue to create
                landmarks that enhance lifestyles and urban living.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Filter Controls (Tabs & Search) ── */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8 bg-white p-4 rounded-2xl border border-[#eaeaea] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSearchQuery(''); // clear search on category switch
                    }}
                    className={`flex items-center gap-2 py-2 px-3.5 rounded-xl text-[12px] font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#00a2ff] text-white shadow-md shadow-[#00a2ff]/10 scale-[1.02]'
                        : 'bg-gray-100 hover:bg-gray-200/85 text-gray-600 hover:text-gray-900 border border-transparent'
                    }`}
                  >
                    <IconComponent size={13} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-[280px]">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search size={15} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full bg-gray-50 hover:bg-gray-100/80 focus:bg-white border border-gray-200 focus:border-[#00a2ff] text-gray-800 placeholder-gray-400 text-[12px] pl-9 pr-4 py-2 rounded-xl outline-none transition-all duration-300"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Table (Fits phone screens and wraps text perfectly) ── */}
        <ScrollReveal delay={150}>
          <div className="overflow-hidden bg-white rounded-xl border border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-300">
                  <th className="py-3 px-2 text-center font-montserrat font-bold text-[12px] md:text-[14px] text-gray-800 border-r border-gray-300 w-[32%] md:w-[30%]">
                    Category
                  </th>
                  <th className="py-3 px-2 text-center font-montserrat font-bold text-[12px] md:text-[14px] text-gray-800 border-r border-gray-300 w-[43%] md:w-[45%]">
                    Project Name
                  </th>
                  <th className="py-3 px-2 text-center font-montserrat font-bold text-[12px] md:text-[14px] text-gray-800 w-[25%]">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, idx) => {
                    // Check if this row is the first of its category in the *filtered* list
                    const showCategory =
                      idx === 0 ||
                      project.category !== filteredProjects[idx - 1].category;

                    return (
                      <tr key={idx} className="border-b border-gray-300 last:border-0 hover:bg-gray-50/55 transition-colors duration-150">
                        {/* Category Column */}
                        <td className="py-3 px-2.5 font-montserrat text-[11px] md:text-[13px] font-bold text-gray-800 border-r border-gray-300 align-middle leading-[1.3] break-words">
                          {showCategory ? project.category : ''}
                        </td>
                        {/* Project Name Column */}
                        <td className="py-3 px-2.5 font-montserrat text-[11px] md:text-[13px] font-semibold text-gray-600 border-r border-gray-300 align-middle leading-[1.3] break-words">
                          {project.name}
                        </td>
                        {/* Location Column */}
                        <td className={`py-3 px-2.5 font-montserrat text-[11px] md:text-[13px] text-gray-500 align-middle leading-[1.3] break-words ${project.location === '—' ? 'text-center' : 'text-left'}`}>
                          {project.location}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={3} className="py-12 text-center text-[13px] text-gray-400">
                      No completed projects found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
