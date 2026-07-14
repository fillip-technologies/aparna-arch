import React from 'react';
import aparnaVideo from '../../../assets/videos/aparna-videos.mp4';

export default function ConstructionUpdate() {
  return (
    <section className="py-24 bg-[#F1F5ED]/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Title text info */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block">Under Construction</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide leading-tight">
              Aparna Architect<br />
              <span className="text-neutral-dark font-light text-2xl md:text-3xl block mt-1">Construction Update</span>
            </h2>
            <div className="h-[3px] w-20 bg-primary mx-auto lg:mx-0 mt-4 rounded-full"></div>
            <p className="text-sm text-neutral-dark/75 leading-relaxed pt-2">
              Stay updated with the latest construction milestones. Tower brickwork, internal finishes, and structural developments are updated periodically.
            </p>
          </div>

          {/* Video Player */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neutral-light bg-black">
              <video
                className="w-full h-full object-cover"
                src={aparnaVideo}
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
