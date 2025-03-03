import React, { useState, useEffect } from 'react';
import './heroSection.css';
import heroImage from '../../assets/images/heero.jpg';
import logo from '../../assets/images/logo.png'; // Company logo

function HeroSection() {
  const words = ['CODE', 'BUILD', 'DESIGN', 'IDEATE', 'BUILD', 'DESIGN'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);

  // Initialize the displayed word on mount
  useEffect(() => {
    setDisplayedWord(words[0]);
  }, []);

  // Function to run the text scramble (shuffle) animation
  const scrambleWord = (finalWord) => {
    let iteration = 0;
    const totalIterations = finalWord.length;
    const scrambleInterval = setInterval(() => {
      let newText = '';
      for (let i = 0; i < finalWord.length; i++) {
        if (i < iteration) {
          newText += finalWord[i];
        } else {
          // Generate a random uppercase letter
          newText += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
      setDisplayedWord(newText);
      iteration++;
      if (iteration > totalIterations) {
        clearInterval(scrambleInterval);
        setDisplayedWord(finalWord);
      }
    }, 50); // Update every 50ms for the shuffling effect
  };

  // Update the word every 1.79 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const nextIndex = (prev + 1) % words.length;
        scrambleWord(words[nextIndex]);
        return nextIndex;
      });
    }, 1790);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="image-box">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="overlay-text">
          LET US <span className="dynamic-word">{displayedWord}</span> FOR YOU.
        </div>
        <div className="cta-container">
          <button className="cta-button about">ABOUT US</button>
          <img src={logo} alt="Company Logo" className="cta-logo" />
          <button className="cta-button works">OUR WORKS</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
