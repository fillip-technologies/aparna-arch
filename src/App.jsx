import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

// Pages import
import Home from './pages/Home/index';
import Amenities from './pages/Amenities';
import FloorPlans from './pages/FloorPlans';
import Gallery from './pages/Gallery';
import Specification from './pages/Specification/index';
import Developer from './pages/Developer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';

// ScrollToTop helper to reset window scroll position on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation Bar */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/floor-plans" element={<FloorPlans />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/specification" element={<Specification />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>

        {/* Footer Area */}
        <Footer />

        {/* Floating Help Widget */}
        {/* <FloatingChat /> */}
      </div>
    </Router>
  );
}
