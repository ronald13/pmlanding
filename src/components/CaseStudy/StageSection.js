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
                  <svg className="stage-section__check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12C19 13.4776 18.5324 14.9173 17.6642 16.113C16.796 17.3086 15.5717 18.1989 14.1667 18.6562C12.7616 19.1136 11.2479 19.1146 9.84223 18.6591C8.43657 18.2037 7.21109 17.315 6.34129 16.1206C5.47149 14.9261 5.00198 13.487 5.00001 12.0094C4.99803 10.5318 5.46368 9.09141 6.33028 7.8946C7.19688 6.69779 8.41998 5.80591 9.82441 5.34667C11.2289 4.88743 12.7426 4.88439 14.1489 5.33799" stroke="#D4D3F4" strokeWidth="2"/>
                    <path d="M9 11L12 14L19 7" stroke="#4640DE" strokeWidth="2"/>
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