import React, { useState } from 'react';
import './ResultsDevelopment.scss';

const ResultsDevelopment = ({ data }) => {
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
    <section className="results-development">
      <div className="results-development__container">

        {/* Left Slider */}
        <div className="results-development__slider">
          <div className="results-development__slider-wrapper">
            <div className="results-development__image-placeholder">
              <span>Results Chart {currentImageIndex + 1}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="results-development__controls">
            <button
              className="results-development__nav-btn results-development__nav-btn--prev"
              onClick={handlePrevImage}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className="results-development__nav-btn results-development__nav-btn--next"
              onClick={handleNextImage}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="results-development__content">
          <span className="results-development__label">{data.label}</span>
          <h2 className="results-development__title">{data.title}</h2>

          {data.keyResults && (
            <div className="results-development__results">
              <h3 className="results-development__results-title">Key Results (so far)</h3>
              <ul className="results-development__results-list">
                {data.keyResults.map((result, index) => (
                  <li key={index} className="results-development__result-item">
                    <svg className="results-development__check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#6B7FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.ongoing && (
            <div className="results-development__ongoing">
              <h3 className="results-development__ongoing-title">Ongoing Development:</h3>
              <p className="results-development__ongoing-text">{data.ongoing}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ResultsDevelopment;