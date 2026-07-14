import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isHome = location.pathname === '/';
      
      if (isHome) {
        const banner = document.getElementById('overlap-banner');
        if (banner) {
          const rect = banner.getBoundingClientRect();
          const headerElement = document.querySelector('header');
          const headerHeight = headerElement ? headerElement.offsetHeight : 80;
          
          const shouldBeVisible = rect.top > headerHeight;
          setIsVisible(prev => {
            if (prev !== shouldBeVisible) return shouldBeVisible;
            return prev;
          });
        } else {
          // Fallback if banner is not rendered yet
          const isMobile = window.innerWidth < 768;
          const heroHeight = isMobile ? window.innerHeight * 0.8 : window.innerHeight * 0.95;
          const shouldBeVisible = window.scrollY <= heroHeight - 80;
          setIsVisible(prev => {
            if (prev !== shouldBeVisible) return shouldBeVisible;
            return prev;
          });
        }
      } else {
        // For other pages, hide navbar when scrolled down past 80px
        const shouldBeVisible = window.scrollY <= 80;
        setIsVisible(prev => {
          if (prev !== shouldBeVisible) return shouldBeVisible;
          return prev;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Floor Plans', path: '/floor-plans' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Specification', path: '/specification' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm py-1 border-b border-neutral-light transition-all duration-500 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2">
            <Logo className="scale-90 sm:scale-100 origin-left" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-navbar text-[14px] xl:text-[15px] font-normal transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-black hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark hover:bg-neutral-light focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white border-t border-neutral-light`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-navbar block px-3 py-3 rounded-md text-base font-normal transition-all ${
                  isActive
                    ? 'text-white bg-primary'
                    : 'text-black hover:bg-neutral-light hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
