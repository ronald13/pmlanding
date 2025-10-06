import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './ExecutionMonitoring.scss';

const ExecutionMonitoring = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contentRef, contentVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [sliderRef, sliderVisible] = useScrollAnimation({ once: true, threshold: 0.1 });
  const [resultsRef, resultsVisible] = useScrollAnimation({ once: true, threshold: 0.2 });

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

        <div ref={contentRef} className="execution-monitoring__content">
          <span className={`execution-monitoring__label animate-on-scroll animate-on-scroll--fade-in ${contentVisible ? 'is-visible' : ''}`}>
            {data.label}
          </span>
          <h2 className={`execution-monitoring__title animate-on-scroll animate-on-scroll--fade-in-up ${contentVisible ? 'is-visible' : ''}`}>
            {data.title}
          </h2>
          <p className={`execution-monitoring__description animate-on-scroll animate-on-scroll--fade-in-up animate-delay-1 ${contentVisible ? 'is-visible' : ''}`}>
            {data.description}
          </p>

          {data.keyResults && (
            <div ref={resultsRef} className="execution-monitoring__results">
              <h3 className={`execution-monitoring__results-title animate-on-scroll animate-on-scroll--fade-in-up ${resultsVisible ? 'is-visible' : ''}`}>
                Key Results (so far)
              </h3>
              <ul className="execution-monitoring__results-list">
                {data.keyResults.map((result, index) => (
                  <li
                    key={index}
                    className={`execution-monitoring__result-item animate-on-scroll animate-on-scroll--fade-in-left animate-delay-${index + 1} ${resultsVisible ? 'is-visible' : ''}`}
                  >
                    <svg className="execution-monitoring__check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12C19 13.4776 18.5324 14.9173 17.6642 16.113C16.796 17.3086 15.5717 18.1989 14.1667 18.6562C12.7616 19.1136 11.2479 19.1146 9.84223 18.6591C8.43657 18.2037 7.21109 17.315 6.34129 16.1206C5.47149 14.9261 5.00198 13.487 5.00001 12.0094C4.99803 10.5318 5.46368 9.09141 6.33028 7.8946C7.19688 6.69779 8.41998 5.80591 9.82441 5.34667C11.2289 4.88743 12.7426 4.88439 14.1489 5.33799" stroke="#D4D3F4" strokeWidth="2"/>
                      <path d="M9 11L12 14L19 7" stroke="#4640DE" strokeWidth="2"/>
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div ref={sliderRef} className="execution-monitoring__slider">
          <div className={`execution-monitoring__slider-wrapper animate-on-scroll animate-on-scroll--scale-in ${sliderVisible ? 'is-visible' : ''}`}>
            <img
              src={data.images[currentImageIndex]}
              alt={`${data.title} - Slide ${currentImageIndex + 1}`}
              className="execution-monitoring__image"
            />
          </div>

          {data.images.length > 1 && (
            <div className={`execution-monitoring__controls animate-on-scroll animate-on-scroll--fade-in ${sliderVisible ? 'is-visible' : ''}`}>
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
          )}
        </div>

      </div>
    </section>
  );
};

export default ExecutionMonitoring;