import React from 'react';
import aparnaVideo from '../../../assets/videos/aparna-videos.mp4';

export default function ProjectOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-2 block">Experience it now</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 tracking-wide">Project Overview</h2>

        {/* Local Video Player container */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-neutral-light bg-black group">
          <video
            src={aparnaVideo}
            className="w-full h-full"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
