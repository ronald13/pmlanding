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
          {data.images.map((image, index) => (
            <div key={index} className="requirements-design__image-wrapper">
              <div className="requirements-design__image-placeholder">
                <span>Design Document {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RequirementsDesign;