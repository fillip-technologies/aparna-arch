import React from 'react';

export default function MapSection() {
  return (
    <section className="relative h-96 w-full overflow-hidden border-t border-neutral-light bg-neutral-light">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35289.34630767912!2d85.18787359617238!3d25.590719823497338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a09dd6bcd109%3A0x4dbe2b47b5edb300!2sThe%20Great%20Ashoka%20City!5e0!3m2!1sen!2sin!4v1783763528977!5m2!1sen!2sin"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="The Great Ashoka City Location"
      />
    </section>
  );
}
