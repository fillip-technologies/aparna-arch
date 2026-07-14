import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-[#F1F5ED]/20 text-center px-4 font-sans">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-neutral-light/80 space-y-6 flex flex-col items-center">
        {/* Check Icon */}
        <div className="p-4 rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-16 w-16" />
        </div>
        
        {/* Texts */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-primary uppercase tracking-wide">Thank You!</h1>
          <p className="text-sm text-neutral-dark/85 font-medium">Your inquiry has been successfully received.</p>
          <p className="text-xs text-neutral-dark/65 leading-relaxed font-light">
            Our marketing team will get in touch with you shortly on your provided phone number to assist you further.
          </p>
        </div>
        
        {/* Redirect button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md hover:shadow-lg"
        >
          <Home className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
