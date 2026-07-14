import React from 'react';
import logoImg from '../assets/AA-logo.png.webp';

export default function Logo({ light = false, className = '' }) {
  return (
    <img 
      src={logoImg} 
      alt="Aparna Architect Logo" 
      className={`h-12 w-auto object-contain transition-all duration-300 ${
        light ? 'brightness-0 invert' : ''
      } ${className}`}
    />
  );
}
