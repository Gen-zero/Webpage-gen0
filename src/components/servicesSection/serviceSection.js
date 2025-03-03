import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './servicesSection.css';
import webImage from '../../assets/images/web-development.jpg'; // Use your actual image path

gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const totalScroll = wrapper.scrollWidth - section.clientWidth;

    gsap.to(wrapper, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="services-section">
      <div ref={wrapperRef} className="services-wrapper">
        {/* Panel 1 - WEB DEVELOPMENT */}
        <div className="service-page">
          {/* Container for the BOOK NOW button and service text */}
          <div className="service-content">
            <button className="service-book-button">BOOK NOW</button>
            <div className="service-text">
              <div className="service-title-line1">WEB</div>
              <div className="service-title-line2">DEVELOPMENT</div>
            </div>
          </div>
          <div className="service-image-box">
            <img src={webImage} alt="Web Development" className="service-image" />
          </div>
        </div>
        {/* Panels 2 - 4 (placeholders or your content) */}
        <div className="service-page">Panel 2</div>
        <div className="service-page">Panel 3</div>
        <div className="service-page">Panel 4</div>
      </div>
    </section>
  );
}

export default ServicesSection;
