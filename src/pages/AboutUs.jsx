import React, { useEffect, useRef, useState } from 'react';

// Import local assets
import hallImg from '../assets/Final-Exterior-View/Gate-view day_Update 02.jpg';
import amphitheaterImg from '../assets/Final-Exterior-View/Amphiteater view_Updated 03.jpg';
import poolImg from '../assets/Final-Exterior-View/Fountain-Area-4_Updated.jpg';
import aparnaVideo from '../assets/videos/aparna-videos.mp4';

// Lightweight component-level intersection observer scroll reveal wrapper
function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translate3d(0, 40px, 0)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState(0);

  const businessActivities = [
    {
      title: 'Planning',
      desc: 'We provide strategic project planning services that focus on optimal land utilization, regulatory compliance, functionality, and sustainability. Our planning process ensures a strong foundation for successful project execution.'
    },
    {
      title: 'Design',
      desc: 'Our expert design team crafts modern, aesthetically pleasing, and highly functional architectural concepts tailored to the needs of our clients.'
    },
    {
      title: 'Construction of Buildings',
      desc: 'We deliver top-tier building construction services using premium materials, state-of-the-art machinery, and experienced execution to ensure strength and quality.'
    },
    {
      title: 'Townships Development',
      desc: 'We specialize in developing integrated townships that feature premium infrastructure, green avenues, utility spaces, and complete community living.'
    },
    {
      title: 'Supervision & Project Management',
      desc: 'Our project managers oversee construction milestones, quality control, timeline compliance, and safety standards for seamless delivery.'
    }
  ];

  const facilities = [
    {
      title: 'Refreshing Swim',
      desc: 'Go for a refreshing swim in our crystal clear pool and rejuvenate yourself.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: 'none', stroke: '#0E4828', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <path d="M2 6c.6.5 1.2 1 2.5 1C6 7 7 6 9 6s3 1 4.5 1c1.3 0 2-.5 2.5-1M2 12c.6.5 1.2 1 2.5 1C6 13 7 12 9 12s3 1 4.5 1c1.3 0 2-.5 2.5-1M2 18c.6.5 1.2 1 2.5 1C6 19 7 18 9 18s3 1 4.5 1c1.3 0 2-.5 2.5-1" />
          <path d="M17 12h5M17 6h5M17 18h5" />
        </svg>
      )
    },
    {
      title: 'Quiet Reading Corner',
      desc: 'Choose a quiet, peaceful corner to lose yourself in your favorite book.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: 'none', stroke: '#0E4828', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: 'Gymnasium',
      desc: 'Work out with state-of-the-art equipment at our fully equipped fitness center.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: 'none', stroke: '#0E4828', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <path d="M18 8h4M2 8h4M6.5 12h11M18 4h2M4 4h2M18 16h2M4 16h2" />
          <rect x="6" y="6" width="12" height="12" rx="2" />
        </svg>
      )
    },
    {
      title: 'Aerobics Room',
      desc: 'Tone up your body and boost your flexibility at the dedicated Aerobics Studio.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: 'none', stroke: '#0E4828', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: 'Amphitheatre & Billiards',
      desc: 'Display your performance skills at the open amphitheatre or enjoy a game of Billiards.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: 'none', stroke: '#0E4828', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12a4 4 0 0 1 8 0" />
          <path d="M12 2v20M2 12h20" />
        </svg>
      )
    },
    {
      title: 'Jacuzzi Spa',
      desc: 'Unwind after a tiring day in the soothing warm waters of our luxury Jacuzzi.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: 'none', stroke: '#0E4828', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    }
  ];

  return (
    <div className="font-sans text-neutral-dark bg-white" style={{ minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          height: '85vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(14, 72, 40, 0.65), rgba(14, 72, 40, 0.4)), url("${poolImg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div style={{ textAlign: 'center', padding: '0 20px', color: '#fff', zIndex: 2 }}>
          <h1
            className="font-montserrat"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              margin: '0 0 10px 0',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            About Us
          </h1>
          <p
            className="font-montserrat"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              fontWeight: 300,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#97C693',
            }}
          >
            Aparna Architect
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: INTRODUCTION & PHILOSOPHY
          ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 0 80px 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <ScrollReveal>
              <div>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#008250',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  Our Philosophy
                </span>
                <h2
                  className="font-montserrat"
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                    fontWeight: 700,
                    color: '#0E4828',
                    lineHeight: 1.25,
                    marginBottom: '28px',
                  }}
                >
                  Engineering Excellence & Value for Money
                </h2>
                <div style={{ width: '60px', height: '3px', backgroundColor: '#97C693', marginBottom: '28px' }} />
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.75,
                    color: '#444',
                    marginBottom: '20px',
                    textAlign: 'justify',
                  }}
                >
                  The Aparna Group believes in developing and constructing aesthetically designed, functionally efficient residential and commercial complexes of international quality, offering <strong>“more value for money”</strong>.
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.75,
                    color: '#444',
                    textAlign: 'justify',
                  }}
                >
                  We believe our buildings should reflect engineering excellence with our view to provide complete customer satisfaction. It is our intention that the quality of our product & services should result in complete value for our clients. While rendering our construction services, we emphasize on Environmental, Health and Safety standards as an integral part of our business practices.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal delay={150}>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  height: '420px',
                }}
                className="hover-zoom-container"
              >
                <img
                  src={hallImg}
                  alt="Aparna Living Hall Interior"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  className="zoom-image"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '15px solid rgba(255,255,255,0.15)',
                    borderRadius: '20px',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: MINUTE DETAILS & MASTERPIECE
          ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 0 100px 0', backgroundColor: '#fcfcfc', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Image (Appears first on desktop) */}
            <div className="order-2-mobile">
              <ScrollReveal>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    height: '420px',
                  }}
                  className="hover-zoom-container"
                >
                  <img
                    src={amphitheaterImg}
                    alt="Aparna Amphitheater Area"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    className="zoom-image"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      border: '15px solid rgba(255,255,255,0.15)',
                      borderRadius: '20px',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="order-1-mobile">
              <ScrollReveal delay={150}>
                <div>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#008250',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    Keen Eye For Detail
                  </span>
                  <h2
                    className="font-montserrat"
                    style={{
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                      fontWeight: 700,
                      color: '#0E4828',
                      lineHeight: 1.25,
                      marginBottom: '28px',
                    }}
                  >
                    Crafting Grand Masterpieces
                  </h2>
                  <div style={{ width: '60px', height: '3px', backgroundColor: '#97C693', marginBottom: '28px' }} />
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: '#444',
                      marginBottom: '20px',
                      textAlign: 'justify',
                    }}
                  >
                    Every magnificent structure or a monument is not only admired for its grandness but is also acclaimed for the minute details that the creator ensured. We at Aparna have a keen eye for details and firm belief in optimizing things at very fine levels.
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: '#444',
                      textAlign: 'justify',
                    }}
                  >
                    At Aparna Architect, every minuscule aspect has been inspected comprehensively so as to match your taste and style. Rest assured: your new home is to going to be one of the finest masterpieces from the experienced creator, <strong>“APARNA ARCHITECT”</strong>.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3.5: OUR CORE BUSINESS ACTIVITIES (ACCORDION)
          ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 0', backgroundColor: '#fcfcfc', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '45px' }}>
              <h2
                className="font-montserrat"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                <span style={{ color: '#00a2ff' }}>Our Core Business</span>{' '}
                <span style={{ color: '#1e293b' }}>Activities...</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid #eaeaea',
                overflow: 'hidden',
                padding: '8px 24px',
              }}
            >
              {businessActivities.map((activity, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      borderBottom: idx === businessActivities.length - 1 ? 'none' : '1px solid #eaeaea',
                      padding: '20px 8px',
                    }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        padding: 0,
                      }}
                    >
                      <span
                        className="font-montserrat"
                        style={{
                          fontSize: '15px',
                          fontWeight: isOpen ? '600' : '400',
                          color: isOpen ? '#333' : '#666',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {activity.title}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: '18px',
                          height: '18px',
                          fill: 'none',
                          stroke: '#333',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <div
                      style={{
                        maxHeight: isOpen ? '200px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p
                        className="font-montserrat"
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.7,
                          color: '#555',
                          marginTop: '16px',
                          marginBottom: '4px',
                          textAlign: 'justify',
                        }}
                      >
                        {activity.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: REJUVENATION & WELLNESS FACILITIES
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '100px 0',
          backgroundImage: `linear-gradient(rgba(14, 72, 40, 0.8), rgba(14, 72, 40, 0.8)), url("${poolImg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: '#fff',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* Header */}
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#97C693',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                Rejuvenation & Wellness
              </span>
              <h2
                className="font-montserrat"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.25,
                  marginBottom: '24px',
                }}
              >
                Endless Ways to Refresh Yourself
              </h2>
              <div style={{ width: '80px', height: '3px', backgroundColor: '#97C693', margin: '0 auto 28px' }} />
              <p
                style={{
                  maxWidth: '750px',
                  margin: '0 auto',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                At APARNA, you will have numerous ways to rejuvenate yourself. Go for a refreshing swim or choose a quiet corner with your favorite book. You can also workout at a fully equipped Gymnasium or tone up at the Aerobics Room. We encourage you to display your skills at the amphitheatre and Billiards table. If you are too tired for all the above, we have a Jacuzzi to soothe you down and help you freshen up for a beautiful day ahead.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            {facilities.map((fac, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div
                  className="facility-card"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '16px',
                    padding: '36px 30px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.4s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      padding: '12px',
                      borderRadius: '12px',
                      marginBottom: '24px',
                    }}
                  >
                    {fac.icon}
                  </div>
                  <h3
                    className="font-montserrat"
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#fff',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {fac.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.75)',
                      margin: 0,
                    }}
                  >
                    {fac.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STYLES & ANIMATIONS
          ═══════════════════════════════════════════════════════ */}
      <style>{`
        /* Hover zoom image effect */
        .hover-zoom-container:hover .zoom-image {
          transform: scale(1.06);
        }

        /* Facility card hover animation */
        .facility-card:hover {
          transform: translateY(-8px);
          background-color: rgba(255, 255, 255, 0.09) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
        }

        /* Mobile specific ordering */
        @media (max-width: 767px) {
          .order-2-mobile {
            order: 2;
          }
          .order-1-mobile {
            order: 1;
          }
        }
      `}</style>

    </div>
  );
}
