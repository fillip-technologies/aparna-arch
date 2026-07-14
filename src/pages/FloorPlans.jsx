import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ZoomIn, X, MapPin, Phone, Mail } from 'lucide-react';

// Import local floor plan assets
import planImg1 from '../assets/images/2bhk.png';
import planImg2 from '../assets/images/2bhk2.png';
import planImg3 from '../assets/images/map-3.png';
import planImg4 from '../assets/images/3bhk.png';
import planImg5 from '../assets/images/map-2.png';
import planImg6 from '../assets/Final-Exterior-View/Clubhouse pool view_Updated 01.jpg';
import planImg7 from '../assets/Final-Exterior-View/Landscape-pool-view.jpg';
import masterPlanImg from '../assets/map.png';
import tourVideo from '../assets/videos/tour-video.mp4';
import headerBg from '../assets/Final-Exterior-View/Living.jpg';

export default function FloorPlans() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState('2 BHK');

  const plans = [
    { size: 'View', type: '2.5 BHK Premium', phase: '', img: planImg1, category: '2 BHK' },
    { size: 'View', type: '2.5 BHK Premium', phase: '', img: planImg2, category: '2 BHK' },
    { size: 'View', type: '3 BHK Deluxe', phase: '', img: planImg3, category: '3 BHK' },
    { size: 'View', type: '3 BHK Deluxe', phase: '', img: planImg4, category: '3 BHK' },
    { size: 'View', type: '3 BHK Luxury', phase: '', img: planImg5, category: '3 BHK' },

  ];

  const filteredPlans = plans.filter((plan) => plan.category === activeTab);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;

    setFormSubmitted(true);
    setTimeout(() => {
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="font-sans text-neutral-dark bg-white">
      {/* 1. Header Section with Video Background */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center text-white">
        {/* Background Video */}
        <video
          src={tourVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
        />
        {/* Dark overlay to make text highly readable */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Centered Typography Overlay */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-light tracking-wide drop-shadow-md">
            Explore Spacious Homes
          </h1>
          {/* <p className="text-sm md:text-base tracking-[0.25em] font-montserrat font-bold uppercase mt-3 drop-shadow-sm text-white/90">
            At NS Alti-Level
          </p> */}
        </div>
      </section>

      {/* 2. Master Plan Section */}
      <section className="py-20 bg-white border-b border-neutral-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-dark/80 mb-6 font-montserrat">
            MASTER PLAN
          </h2>
          <div className="w-full flex justify-center">
            <img
              src={masterPlanImg}
              alt="Master Plan Layout of Aparna Architect"
              className="max-w-full h-auto object-contain rounded-lg shadow-sm border border-neutral-light/50"
            />
          </div>
        </div>
      </section>

      {/* 3. Address of Convenience Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section heading above the two-column layout */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-montserrat font-light text-neutral-dark leading-tight">
              Address of <span className="font-semibold italic">Convenience</span>
            </h2>
            <p className="text-sm text-neutral-dark/60 font-montserrat mt-4 leading-relaxed max-w-2xl">
              Nestled in the heart of the city, our royal complex offers unparalleled location
              advantages. Enjoy convenient access to cultural landmarks, premium shopping, and
              prestigious schools. Experience the epitome of luxury living with the world at your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-0 items-stretch rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '540px' }}>

            {/* Left — Illustrated Map Image */}
            <div className="relative bg-[#e8e4dc] overflow-hidden">
              <img
                src={masterPlanImg}
                alt="Location Map - Address of Convenience"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: '480px' }}
              />
            </div>

            {/* Right — Location Advantages dark teal card */}
            <div className="bg-[#1a4a3e] px-8 py-10 text-white flex flex-col justify-start">
              <h3 className="text-xl font-montserrat font-semibold tracking-wide mb-1">
                Location Advantages
              </h3>
              <div className="w-10 h-0.5 bg-white/30 mb-7" />
              <ul className="space-y-[10px]">
                {[
                  { icon: '🛕', label: 'Jalla Hanuman Mandir', time: '4 Minutes' },
                  { icon: '🏥', label: 'Big Apollo Spectra Hospital', time: '5 Minutes' },
                  { icon: '🌉', label: 'Agamkuan Over Bridge', time: '6 Minutes' },
                  { icon: '🚉', label: 'Patna Sahib Railway Station', time: '6 Minutes' },
                  { icon: '🚉', label: 'Gulzarbagh Railway Station', time: '7 Minutes' },
                  { icon: '🚌', label: 'Transport Nagar', time: '8 Minutes' },
                  { icon: '🏘️', label: 'Pahari Village', time: '9 Minutes' },
                  { icon: '📍', label: 'Pahari Zero Mile', time: '10 Minutes' },
                  { icon: '🌉', label: 'Mahatma Gandhi Setu', time: '12 Minutes' },
                  { icon: '🏥', label: 'Ford Hospital', time: '12 Minutes' },
                  { icon: '🛣️', label: 'Kankarbagh Main Road', time: '20 Minutes' },
                  { icon: '✈️', label: 'Jay Prakash Narayan Airport', time: '30 Minutes' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 text-[13px] font-montserrat border-b border-white/10 pb-[10px] last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm flex-shrink-0 w-5 text-center opacity-80">{item.icon}</span>
                      <span className="text-white/85">{item.label}</span>
                    </div>
                    <span className="text-white/45 text-[11px] whitespace-nowrap flex-shrink-0 font-light">– {item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Floor Plan Video Tour Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat tracking-wide mb-12 text-[#0E4828]">
            <span className="font-extrabold">Floor Plan</span> <span className="font-light"></span>
          </h2>

          <div className="max-w-xl mx-auto bg-[#0E4828] rounded-[50px] p-6 sm:p-8 flex items-center justify-center shadow-lg">
            <div className="w-full aspect-video rounded-[30px] overflow-hidden bg-black">
              <video
                src={tourVideo}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Floor Plans Tabbed Section */}
      <section className="py-20 bg-[#283646] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Tab Headers */}
          <div className="flex justify-center space-x-8 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveTab('2 BHK')}
              className={`font-montserrat uppercase tracking-wider text-sm font-semibold pb-2 px-6 transition-all duration-200 border-b-2 ${activeTab === '2 BHK'
                ? 'border-white text-white font-bold'
                : 'border-transparent text-white/50 hover:text-white'
                }`}
            >
              2.5 BHK
            </button>
            <button
              onClick={() => setActiveTab('3 BHK')}
              className={`font-montserrat uppercase tracking-wider text-sm font-semibold pb-2 px-6 transition-all duration-200 border-b-2 ${activeTab === '3 BHK'
                ? 'border-white text-white font-bold'
                : 'border-transparent text-white/50 hover:text-white'
                }`}
            >
              3 BHK
            </button>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-8 justify-center mt-12">
            {filteredPlans.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPlan(plan)}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#1E293B]/60 border border-white/15 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-white/30 relative overflow-hidden group shadow-md"
              >
                {/* Faint Plan Background Image */}
                <img
                  src={plan.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                />

                {/* Foreground Text */}
                <div className="relative z-10 px-3 select-none">
                  <span className="block text-white font-montserrat font-bold text-lg sm:text-xl">
                    {plan.size}
                  </span>
                  <span className="block text-white/60 font-montserrat font-light text-xs sm:text-sm mt-0.5">

                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Us Section */}
      <section className="py-24 bg-white border-t border-neutral-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Block: Info */}
            <div className="space-y-12 flex flex-col justify-center lg:pr-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-montserrat font-light text-neutral-dark tracking-wide">
                  Contact Us
                </h2>
              </div>

              {/* Info Rows */}
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="text-neutral-dark flex-shrink-0">
                    <MapPin className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <p className="text-[15px] text-neutral-dark font-montserrat font-normal tracking-wide text-left">
                    Corporate Address: 203, Hitech Arcade, Rajendra Path, Opposite - CDA Building, Patna 800001
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-neutral-dark flex-shrink-0">
                    <Phone className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <p className="text-[15px] text-neutral-dark font-montserrat font-normal tracking-wide text-left">
                    WhatsApp: 0612-2320022 &nbsp;|&nbsp; Mobile: +91-9955805687
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-neutral-dark flex-shrink-0">
                    <Mail className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <p className="text-[15px] text-neutral-dark font-montserrat font-normal tracking-wide text-left">
                    info@aparnaarchitect.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right Block: Form */}
            <div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-montserrat font-medium text-neutral-dark/70 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-neutral-dark/30 bg-white text-sm focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-montserrat font-medium text-neutral-dark/70 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-neutral-dark/30 bg-white text-sm focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-xs uppercase tracking-wider font-montserrat font-medium text-neutral-dark/70 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full px-4 py-2.5 rounded border border-neutral-dark/30 bg-white text-sm focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs uppercase tracking-wider font-montserrat font-medium text-neutral-dark/70 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-neutral-dark/30 bg-white text-sm focus:ring-1 focus:ring-primary outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    disabled={formSubmitted}
                    className="bg-[#9C2426] hover:bg-red-800 text-white font-montserrat font-medium py-2 px-10 text-sm tracking-wide transition-colors min-w-[120px] h-[38px] flex items-center justify-center rounded"
                  >
                    {formSubmitted ? (
                      <span>Submitting...</span>
                    ) : (
                      <span>Send</span>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Google Map Section */}
      <section className="relative h-96 w-full overflow-hidden border-t border-neutral-light bg-neutral-light">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35289.34630767912!2d85.18787359617238!3d25.590719823497338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a09dd6bcd109%3A0x4dbe2b47b5edb300!2sThe%20Great%20Ashoka%20City!5e0!3m2!1sen!2sin!4v1783763528977!5m2!1sen!2sin"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="The Great Ashoka City Location"
        />
      </section>

      {/* Lightbox Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedPlan(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="max-w-4xl max-h-[80vh] w-full flex flex-col justify-center items-center bg-white rounded-2xl overflow-hidden shadow-2xl p-6 relative">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-primary">{selectedPlan.size}</h3>
              <p className="text-xs text-neutral-dark/60 font-light uppercase tracking-wider">{selectedPlan.type} — {selectedPlan.phase}</p>
            </div>

            <div className="flex-1 w-full flex items-center justify-center p-2 overflow-hidden bg-neutral-light/50 rounded-xl">
              <img
                src={selectedPlan.img}
                alt={`${selectedPlan.size} Full Plan`}
                className="max-h-[60vh] max-w-full object-contain"
              />
            </div>

            <div className="mt-4 flex gap-4">
              <a
                href={selectedPlan.img}
                download={`${selectedPlan.size}-floor-plan.jpg`}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF/JPEG</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
