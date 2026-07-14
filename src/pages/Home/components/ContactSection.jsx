import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const navigate = useNavigate();

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
                    className="w-full px-4 py-2.5 rounded border border-neutral-dark/30 bg-white text-sm focus:ring-1 focus:ring-primary outline-none animate-none"
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
  );
}
