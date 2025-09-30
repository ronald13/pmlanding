import React, { useState } from 'react';
import './StageSection.scss';

const StageSection = ({ data, isDark = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? data.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === data.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={`stage-section ${isDark ? 'stage-section--dark' : ''}`}>
      <div className="stage-section__container">

        {/* Header */}
        <div className="stage-section__header">
          <span className="stage-section__label">{data.label}</span>
          <h2 className="stage-section__title">{data.title}</h2>
          <p className="stage-section__description">{data.description}</p>
        </div>

        {/* Slider */}
        <div className="stage-section__slider">
          <div className="stage-section__image-placeholder">
            <span>{data.title} - Slide {currentImageIndex + 1}</span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="stage-section__controls">
          <button
            className="stage-section__nav-btn stage-section__nav-btn--prev"
            onClick={handlePrevImage}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className="stage-section__nav-btn stage-section__nav-btn--next"
            onClick={handleNextImage}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Key Results */}
        {data.keyResults && (
          <div className="stage-section__results">
            <h3 className="stage-section__results-title">Key Results (so far)</h3>
            <ul className="stage-section__results-list">
              {data.keyResults.map((result, index) => (
                <li key={index} className="stage-section__result-item">
                  <svg className="stage-section__check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#6B7FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ongoing Development */}
        {data.ongoing && (
          <div className="stage-section__ongoing">
            <h3 className="stage-section__ongoing-title">Ongoing Development:</h3>
            <p className="stage-section__ongoing-text">{data.ongoing}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default StageSection;