import React from 'react';
import Logo from './Logo';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-white/10 pb-8">

          {/* Left Block: Logo & Address */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-md">
            <Logo className="scale-95 origin-left" />
            <p className="text-[12px] tracking-wide text-neutral-light/70 font-light">
              Corporate Address: 203, Hitech Arcade, Rajendra Path, Opposite - CDA Building, Patna 800001
            </p>
          </div>

          {/* Right Block: Contact, Socials & RERA */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm tracking-widest font-medium">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary-light" />
                <a href="tel:06122320022" className="hover:text-secondary-light transition-colors">
                  WhatsApp: 0612-2320022
                </a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <a href="tel:+919955805687" className="hover:text-secondary-light transition-colors">
                Mobile: +91-9955805687
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs tracking-wider font-light text-neutral-light/80">
              <span>Email:</span>
              <a href="mailto:kumarkamleshsingh99@gmail.com" className="hover:text-secondary-light transition-colors">
                kumarkamleshsingh99@gmail.com
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a href="mailto:thegreatashokacity1@gmail.com" className="hover:text-secondary-light transition-colors">
                thegreatashokacity1@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest text-neutral-light/60 font-light">Follow Us :</span>
              <div className="flex space-x-3">
                {/* Facebook SVG */}
                <a href="https://www.facebook.com/share/1UR8WZBKW3/
" target="_blank" rel="noreferrer" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all hover:scale-105 flex items-center justify-center">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                {/* Instagram SVG */}
                <a href="https://www.instagram.com/thegreatashokacity?igsh=cDN4MzM4bW9ta2F0" target="_blank" rel="noreferrer" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all hover:scale-105 flex items-center justify-center">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* Linkedin SVG */}
                {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all hover:scale-105 flex items-center justify-center">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a> */}
                {/* Youtube SVG */}
                {/* <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all hover:scale-105 flex items-center justify-center">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163c-.272-1.021-1.077-1.826-2.099-2.099C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.399.564C1.579 4.337.774 5.142.502 6.163.003 8.007 0 12 0 12s.003 3.993.502 5.837c.272 1.022 1.077 1.827 2.099 2.099 1.841.564 9.399.564 9.399.564s7.558 0 9.399-.564c1.022-.272 1.827-1.077 2.099-2.099.5-1.844.5-5.837.5-5.837s-.003-3.993-.5-5.837zM9.5 15.5v-7l6.5 3.5-6.5 3.5z" />
                  </svg>
                </a> */}
                {/* Whatsapp SVG */}
                <a href="https://wa.me/919955805687" target="_blank" rel="noreferrer" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all hover:scale-105 flex items-center justify-center">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.52 3.449C18.25 1.185 15.228 0 12.015 0 5.485 0 0.175 5.309 0.175 11.84c0 2.115 0.552 4.18 1.603 5.992L0 24l6.391-1.677c1.745 0.952 3.71 1.454 5.71 1.454h0.013c6.53 0 11.84-5.309 11.84-11.84 0-3.213-1.185-6.236-3.449-8.508zM12.015 22.083c-1.85 0-3.662-0.5-5.244-1.447l-0.376-0.223-3.896 1.022 1.041-3.803-0.245-0.388c-1.036-1.644-1.583-3.535-1.583-5.462 0-5.748 4.677-10.426 10.426-10.426 2.784 0 5.4 1.085 7.365 3.054 1.969 1.97 3.054 4.581 3.054 7.365 0 5.748-4.678 10.426-10.426 10.426zM17.06 14.542c-0.312-0.156-1.848-0.912-2.135-1.017-0.286-0.106-0.495-0.156-0.702 0.144-0.207 0.3-0.803 1.017-0.984 1.225-0.181 0.208-0.362 0.234-0.674 0.078-0.312-0.156-1.318-0.486-2.51-1.551-0.927-0.827-1.554-1.848-1.735-2.16-0.181-0.312-0.019-0.48 0.137-0.635 0.141-0.14 0.312-0.365 0.468-0.547 0.156-0.181 0.208-0.312 0.312-0.521 0.104-0.208 0.052-0.39-0.026-0.547-0.078-0.156-0.702-1.691-0.963-2.315-0.249-0.589-0.505-0.509-0.697-0.518-0.181-0.009-0.39-0.01-0.6-0.01-0.208 0-0.547 0.078-0.833 0.39-0.286 0.312-1.092 1.066-1.092 2.6 0 1.534 1.118 3.016 1.274 3.224 0.156 0.208 2.193 3.348 5.313 4.696 0.743 0.323 1.323 0.516 1.775 0.656 0.747 0.237 1.427 0.204 1.963 0.124 0.598-0.09 1.848-0.755 2.108-1.484 0.26-0.729 0.26-1.353 0.181-1.484-0.078-0.13-0.286-0.208-0.598-0.364z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* RERA */}
            {/* <div className="flex flex-col items-center md:items-end space-y-1">
              <span className="text-[11px] tracking-[0.2em] font-medium text-neutral-light/75 uppercase">
                WBRERA/P/DAR/2024/001373
              </span>
              <a href="http://www.rera.wb.gov.in" target="_blank" rel="noreferrer" className="text-[11px] tracking-widest hover:underline text-secondary-light">
                www.rera.wb.gov.in
              </a>
            </div> */}
          </div>

        </div>

        {/* Absolute Bottom Copyright */}
        <div className="flex justify-center pt-6 text-[10px] tracking-widest text-neutral-light/40 uppercase">
          <span>Copyright @ aparnaarchitect @ 2026</span>
        </div>
      </div>
    </footer>
  );
}
