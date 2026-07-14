import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

// Import local gallery images from Final-Exterior-View
import imgFountain from '../assets/Final-Exterior-View/Fountain-Area-4_Updated.jpg';
import imgGate from '../assets/Final-Exterior-View/Gate-view day_Update 02.jpg';
import imgCentral from '../assets/Final-Exterior-View/Central-garden-view.jpg';
import imgSeating from '../assets/Final-Exterior-View/Garden Seating Area_Updated.jpg';
import imgLandscapePool from '../assets/Final-Exterior-View/Landscape-pool-view.jpg';
import imgClubhousePool from '../assets/Final-Exterior-View/Clubhouse pool view_Updated 01.jpg';
import imgAmphitheater from '../assets/Final-Exterior-View/Amphiteater view_Updated 03.jpg';
import imgCricket from '../assets/Final-Exterior-View/Cricket Ground View Cam 2_Updated.jpg';
import imgBadminton from '../assets/Final-Exterior-View/Badminton court view_Updated (1).jpg';
import imgBuddha from '../assets/Final-Exterior-View/Buddha_area.jpg';
import imgMandir from '../assets/Final-Exterior-View/MANDIR_AREA_VIEW_option (1).jpg';
import imgOpenGreen from '../assets/Final-Exterior-View/Road-garden-view.jpg';
import imgRoadGarden from '../assets/Final-Exterior-View/Road-garden-view.jpg';
import imgAerial from '../assets/Final-Exterior-View/Aerial_Evenng_view_v05_.jpg';
import imgLiving from '../assets/Final-Exterior-View/Living.jpg';
import imgEwsBlock from '../assets/Final-Exterior-View/Garden_With_EWS_Block_View.jpg';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryItems = [
    { id: 1, img: imgFountain, title: 'Fountain & Pool Dusk View' },
    { id: 2, img: imgGate, title: 'Entrance Gate Day View' },
    { id: 3, img: imgCentral, title: 'Central Garden and Walkways' },
    { id: 4, img: imgSeating, title: 'Garden Seating Pavilion' },
    { id: 5, img: imgLandscapePool, title: 'Landscape Swimming Pool' },
    { id: 6, img: imgClubhousePool, title: 'Clubhouse Infinity Pool' },
    { id: 7, img: imgAmphitheater, title: 'Open Air Amphitheater' },
    { id: 8, img: imgCricket, title: 'Net Cricket Practice Pitch' },
    { id: 9, img: imgBadminton, title: 'Outdoor Badminton Court' },
    { id: 10, img: imgBuddha, title: 'Buddha Statue & Meditation Court' },
    { id: 11, img: imgMandir, title: 'Community Mandir Area' },
    { id: 12, img: imgOpenGreen, title: 'Open Green Lawn Spaces' },
    { id: 13, img: imgRoadGarden, title: 'Internal Road & Landscaping' },
    { id: 14, img: imgAerial, title: 'Evening Aerial Master View' },
    { id: 15, img: imgLiving, title: 'Clubhouse Indoor Lounge' },
    { id: 16, img: imgEwsBlock, title: 'Garden View with Residential Towers' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-white py-12 md:py-16 text-neutral-dark min-h-[calc(100vh-72px)] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Title Section matching reference exactly */}
        <h1 className="text-4xl md:text-5xl font-light text-primary-dark text-center mb-10 tracking-tight font-montserrat">
          Project <span className="font-extrabold text-primary">Views</span>
        </h1>

        {/* Main Image Slider Frame */}
        <div className="relative group w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-neutral-light shadow-sm border border-neutral-light">
          <img
            src={galleryItems[currentIndex].img}
            alt={galleryItems[currentIndex].title}
            className="w-full h-full object-cover transition-opacity duration-300 ease-in-out cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
          />

          {/* Navigation Arrows overlayed */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10 stroke-[1.5]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10 stroke-[1.5]" />
          </button>

          {/* Title and Zoom icon overlay at the bottom */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-sm font-navbar tracking-wide">{galleryItems[currentIndex].title}</span>
            <button
              className="p-1.5 rounded-full bg-white/20 text-white pointer-events-auto hover:bg-white/40 transition-colors"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Thumbnails Row */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-neutral-light justify-start sm:justify-center">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-14 sm:w-28 sm:h-18 flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-200 border-2 ${index === currentIndex
                ? 'border-primary opacity-100 scale-95'
                : 'border-transparent opacity-60 hover:opacity-100'
                }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all focus:outline-none"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
          >
            <ChevronLeft className="h-12 w-12 stroke-[1.5]" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full flex flex-col justify-center items-center relative p-2">
            <img
              src={galleryItems[currentIndex].img}
              alt={galleryItems[currentIndex].title}
              className="max-h-[80vh] max-w-full object-contain shadow-2xl"
            />
            <div className="text-center mt-4 text-white/90 font-navbar tracking-wide">
              {galleryItems[currentIndex].title}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
          >
            <ChevronRight className="h-12 w-12 stroke-[1.5]" />
          </button>
        </div>
      )}
    </div>
  );
}
