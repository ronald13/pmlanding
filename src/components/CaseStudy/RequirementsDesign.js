import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './RequirementsDesign.scss';

const RequirementsDesign = ({ data }) => {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });
  const [imagesRef, imagesVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  return (
    <section className="requirements-design">
      <div className="requirements-design__container">

        <div ref={headerRef} className="requirements-design__header">
          <span className={`requirements-design__label animate-on-scroll animate-on-scroll--fade-in ${headerVisible ? 'is-visible' : ''}`}>
            {data.label}
          </span>
          <h2 className={`requirements-design__title animate-on-scroll animate-on-scroll--fade-in-up ${headerVisible ? 'is-visible' : ''}`}>
            {data.title}
          </h2>
          <p className={`requirements-design__description animate-on-scroll animate-on-scroll--fade-in-up animate-delay-1 ${headerVisible ? 'is-visible' : ''}`}>
            {data.description}
          </p>
        </div>

        <div ref={imagesRef} className="requirements-design__images">
          <div className="requirements-design__column requirements-design__column--left">
            <div className={`requirements-design__image-wrapper animate-on-scroll animate-on-scroll--fade-in-up ${imagesVisible ? 'is-visible' : ''}`}>
              <img
                src={data.images[0]}
                alt={`${data.title} - Design 1`}
                className="requirements-design__image"
              />
            </div>
            <div className={`requirements-design__image-wrapper animate-on-scroll animate-on-scroll--fade-in-up animate-delay-1 ${imagesVisible ? 'is-visible' : ''}`}>
              <img
                src={data.images[1]}
                alt={`${data.title} - Design 2`}
                className="requirements-design__image"
              />
            </div>
          </div>

          <div className="requirements-design__column requirements-design__column--right">
            <div className={`requirements-design__image-wrapper requirements-design__image-wrapper--full animate-on-scroll animate-on-scroll--fade-in-up animate-delay-2 ${imagesVisible ? 'is-visible' : ''}`}>
              <img
                src={data.images[2]}
                alt={`${data.title} - Design 3`}
                className="requirements-design__image"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RequirementsDesign;