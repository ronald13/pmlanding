import React, { useState } from 'react';
import './ExecutionMonitoring.scss';

const ExecutionMonitoring = ({ data }) => {
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
    <section className="execution-monitoring">
      <div className="execution-monitoring__container">

        {/* Left Content */}
        <div className="execution-monitoring__content">
          <span className="execution-monitoring__label">{data.label}</span>
          <h2 className="execution-monitoring__title">{data.title}</h2>
          <p className="execution-monitoring__description">{data.description}</p>

          {data.keyResults && (
            <div className="execution-monitoring__results">
              <h3 className="execution-monitoring__results-title">Key Results (so far)</h3>
              <ul className="execution-monitoring__results-list">
                {data.keyResults.map((result, index) => (
                  <li key={index} className="execution-monitoring__result-item">
                    <svg className="execution-monitoring__check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#6B7FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Slider */}
        <div className="execution-monitoring__slider">
          <div className="execution-monitoring__slider-wrapper">
            <div className="execution-monitoring__image-placeholder">
              <span>Monitoring Dashboard {currentImageIndex + 1}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="execution-monitoring__controls">
            <button
              className="execution-monitoring__nav-btn execution-monitoring__nav-btn--prev"
              onClick={handlePrevImage}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className="execution-monitoring__nav-btn execution-monitoring__nav-btn--next"
              onClick={handleNextImage}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExecutionMonitoring;