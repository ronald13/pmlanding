import React from 'react';
import './RequirementsDesign.scss';

const RequirementsDesign = ({ data }) => {
  return (
    <section className="requirements-design">
      <div className="requirements-design__container">

        {/* Header */}
        <div className="requirements-design__header">
          <span className="requirements-design__label">{data.label}</span>
          <h2 className="requirements-design__title">{data.title}</h2>
          <p className="requirements-design__description">{data.description}</p>
        </div>

        {/* Images Grid */}
        <div className="requirements-design__images">
          {/* Left Column - 2 images */}
          <div className="requirements-design__column requirements-design__column--left">
            <div className="requirements-design__image-wrapper">
              <img
                src={data.images[0]}
                alt={`${data.title} - Design 1`}
                className="requirements-design__image"
              />
            </div>
            <div className="requirements-design__image-wrapper">
              <img
                src={data.images[1]}
                alt={`${data.title} - Design 2`}
                className="requirements-design__image"
              />
            </div>
          </div>

          {/* Right Column - 1 large image */}
          <div className="requirements-design__column requirements-design__column--right">
            <div className="requirements-design__image-wrapper requirements-design__image-wrapper--full">
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