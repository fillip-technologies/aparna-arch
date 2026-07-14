import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs() {
  const navigate = useNavigate();

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
    <div className="bg-white min-h-[calc(100vh-72px)] py-12 md:py-16 text-neutral-dark font-sans flex flex-col justify-start">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Contact Us Title */}
        <h1 className="text-4xl md:text-5xl font-light font-montserrat text-neutral-dark mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Block: Info */}
          <div className="space-y-10 lg:pr-8">
            <div className="flex items-start gap-8">
              <div className="text-black mt-1 flex-shrink-0">
                <MapPin className="h-6 w-6 stroke-[1.5]" />
              </div>
              <p className="text-[16px] text-neutral-dark font-montserrat font-normal tracking-wide leading-relaxed">
                Corporate Address: 203, Hitech Arcade, Rajendra Path, Opposite - CDA Building, Patna 800001
              </p>
            </div>

            <div className="flex items-start gap-8">
              <div className="text-black mt-1 flex-shrink-0">
                <Phone className="h-6 w-6 stroke-[1.5]" />
              </div>
              <p className="text-[16px] text-neutral-dark font-montserrat font-normal tracking-wide leading-relaxed">
                WhatsApp: 0612-2320022 &nbsp;|&nbsp; Mobile: +91-9955805687
              </p>
            </div>

            <div className="flex items-start gap-8">
              <div className="text-black mt-1 flex-shrink-0">
                <Mail className="h-6 w-6 stroke-[1.5]" />
              </div>
              <p className="text-[16px] text-neutral-dark font-montserrat font-normal tracking-wide leading-relaxed">
                info@aparnaarchitect.com
              </p>
            </div>
          </div>

          {/* Right Block: Form */}
          <div>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-montserrat font-normal text-neutral-dark mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-neutral-dark/30 bg-white text-sm outline-none focus:border-primary rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-normal text-neutral-dark mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-neutral-dark/30 bg-white text-sm outline-none focus:border-primary rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-normal text-neutral-dark mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full px-4 py-2.5 border border-neutral-dark/30 bg-white text-sm outline-none focus:border-primary rounded-none"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-normal text-neutral-dark mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-neutral-dark/30 bg-white text-sm outline-none resize-none focus:border-primary rounded-none"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="bg-[#9C2426] hover:bg-red-800 text-white font-montserrat font-medium py-2 px-10 text-sm tracking-wide transition-colors min-w-[120px] h-[38px] flex items-center justify-center rounded-none"
                >
                  {formSubmitted ? 'Submitting...' : 'Send'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Horizontal Line separating Form and Map */}
      <div className="w-full border-t border-neutral-light/60 my-12" />

      {/* Map Section contained within maximum width grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full mb-12">
        <div className="w-full h-96 overflow-hidden bg-neutral-light shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35289.34630767912!2d85.18787359617238!3d25.590719823497338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a09dd6bcd109%3A0x4dbe2b47b5edb300!2sThe%20Great%20Ashoka%20City!5e0!3m2!1sen!2sin!4v1783763528977!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="The Great Ashoka City Location"
          />
        </div>
      </div>
    </div>
  );
}
