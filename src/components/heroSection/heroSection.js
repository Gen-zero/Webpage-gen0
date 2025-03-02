import React, { useState, useEffect } from 'react';
import './heroSection.css';
import heroImage from '../../assets/images/hero.jpg';

function HeroSection() {
  const words = ['CODE', 'BUILD', 'DESIGN', 'IDEATE', 'BUILD', 'DESIGN'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change to the next word
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
      // Trigger glitch effect
      setGlitch(true);
      // Remove glitch effect after 0.5 seconds
      setTimeout(() => setGlitch(false), 500);
    }, 1790); // Change word every 1.79 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="image-box">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="overlay-text">
          LET US{' '}
          <span
            key={words[currentWordIndex]}
            className={`dynamic-word ${glitch ? 'glitch' : ''}`}
          >
            {words[currentWordIndex]}
          </span>{' '}
          FOR YOU.
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
