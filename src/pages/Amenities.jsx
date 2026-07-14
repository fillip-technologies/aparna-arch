import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

// Import local assets
import slide1 from '../assets/Final-Exterior-View/Clubhouse pool view_Updated 01.jpg';
import slide2 from '../assets/Final-Exterior-View/Landscape-pool-view.jpg';

export default function Amenities() {
  const navigate = useNavigate();

  const openAirCol1 = [
    'Banquet Hall',
    'Convenience Store',
    'Provision for Pharmacy',
    "Provision for Salon Driver's Utility Area",
    'Pet Zone',
    'Rain Water Harvesting',
    'Sewage Treatment Plant',
    'Water Treatment Plant',
    'Recycled Water for Gardening',
    'Driveway Light',
    'Multipurpose Hall',
    'Society Association Room',
  ];

  const openAirCol2 = [
    'Provision for Grocery Shop',
    'Provision for Laundry',
    'Gas Pipeline by GAIL',
    'Automatic High Speed Elevator',
    'Separate Service Elevator',
    'Provision for ATM',
    'Energy Efficient Lighting',
    'Guest Room',
    'Generator Backup for Common Area'
  ];

  const clubHouseCol1 = [
    'Health Club',
    'Outdoor Fitness Station',
    'Badminton Court',
    'Lawn Tennis Court',
    'Swimming Pool',
    'Pool Table',
    'Mini Indoor T.T Court',
    'Basketball Court',
    'Gymnasium'
  ];

  const clubHouseCol2 = [
    'Indoor Cricket',
    'Yoga Lawn',
    'Day Care',
    'Sandpit for Kids',
    'Acupressure Walkway',
    'Jogging Track',
    'Kids Play Zone',
    'Skating Track',
    'Outdoor Kids Play Area'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: slide2, // Landscape Pool view cam
      title: 'The Ashoka City',
      subtitle: 'Get an Unique range of amenities in Aparna Architect to make living Luxurious',
    },
    {
      image: slide1, // Clubhouse pool view cam
      title: '3800 SQFT',
      subtitle: 'Club House',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

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
      {/* Hero Slider */}
      <section className="relative h-[calc(100vh-72px)] w-full overflow-hidden bg-neutral-dark z-0">
        {/* Slider Track (Flex container for horizontal sliding) */}
        <div
          className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
          style={{ transform: `translate3d(-${currentSlide * 50}%, 0, 0)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-1/2 h-full flex-shrink-0"
            >
              {/* Background Image using img tag for maximum reliability and performance */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
                loading="eager"
              />
              {/* Subtle Overlay to make text pop while keeping the image clear */}
              <div className="absolute inset-0 bg-black/25 z-10" />

              {/* Slider Content */}
              <div className="absolute inset-0 flex items-center z-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full text-left">
                  <div className="max-w-2xl text-white select-none">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold tracking-wide leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-2xl font-montserrat font-light tracking-wide mt-2 md:mt-4 drop-shadow-sm text-white/90">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors cursor-pointer focus:outline-none"
        >
          <svg className="h-8 w-8 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors cursor-pointer focus:outline-none"
        >
          <svg className="h-8 w-8 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Curved Wave Transition Overlay (placed below the slider to prevent image overlap) */}
      <div className="w-full h-8 md:h-12 bg-white pointer-events-none relative z-20 -mt-[1px]">
        <svg
          className="w-full h-full text-primary fill-current translate-y-[2px]"
          viewBox="0 0 1440 74"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C240,40 480,60 720,60 C960,60 1200,40 1440,0 L1440,74 L0,74 Z"></path>
        </svg>
      </div>

      {/* Main Content */}
      {/* 1. Green Section: Open Air/Garden Amenities list on left, Club House Amenities Title on right */}
      <section className="relative pt-20 pb-24 bg-primary text-white z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Open to Air Amenities List (2 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-x-8 gap-y-3 text-white/90 text-xs sm:text-sm font-montserrat font-light leading-relaxed">
            <div className="space-y-2.5">
              {openAirCol1.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
            <div className="space-y-2.5">
              {openAirCol2.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </div>

          {/* Right: Title */}
          <div className="lg:col-span-4 flex flex-col justify-center items-end text-right">
            <h2 className="font-montserrat tracking-wide leading-tight text-right">
              <span className="block text-4xl sm:text-5xl lg:text-[56px] text-white">
                <span className="font-bold">Ashoka</span> <span className="font-light">City</span>
              </span>
              <span className="block text-xl md:text-2xl font-light text-white/60 mt-2">
                Amenities
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* 2. White Section: Open to Air Title on left, Club House Amenities list on right */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Title */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start text-left">
            <h2 className="font-montserrat tracking-wide leading-tight text-left">
              <span className="block text-4xl sm:text-5xl lg:text-[56px] text-primary">
                <span className="font-bold">Sport , Fitness & Kids</span> <span className="font-light"></span>
              </span>
              <span className="block text-xl md:text-2xl font-light text-neutral-dark/40 mt-2">
                Amenities
              </span>
            </h2>
          </div>

          {/* Right: Sport, Fitness & Kids Amenities List (2 Columns, Right-aligned text) */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-x-8 gap-y-3 text-neutral-dark/95 text-xs sm:text-sm font-montserrat font-light leading-relaxed text-right">
            <div className="space-y-2.5">
              {clubHouseCol1.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
            <div className="space-y-2.5">
              {clubHouseCol2.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Us Section */}
      <section className="py-24 bg-white border-t border-neutral-light">
        <div className="max-w-6xl mx-auto px-4">
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
                  <p className="text-[15px] text-neutral-dark font-montserrat font-normal tracking-wide">
                    Corporate Address: 203, Hitech Arcade, Rajendra Path, Opposite - CDA Building, Patna 800001
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-neutral-dark flex-shrink-0">
                    <Phone className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <p className="text-[15px] text-neutral-dark font-montserrat font-normal tracking-wide">
                    WhatsApp: 0612-2320022 &nbsp;|&nbsp; Mobile: +91-9955805687
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-neutral-dark flex-shrink-0">
                    <Mail className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <p className="text-[15px] text-neutral-dark font-montserrat font-normal tracking-wide">
                    info@aparnaarchitect.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right Block: Form */}
            <div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div>
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

                <div>
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

      {/* 4. Google Map Section */}
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
    </div>
  );
}
