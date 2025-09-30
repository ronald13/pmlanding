import React from 'react';
import { Link } from 'gatsby';
import { caseStudyData } from '../../data/caseStudy';
import './CaseStudyCard.scss';

const CaseStudyCard = () => {
  return (
    <section className="case-study">
      <div className="case-study__container">

        {/* Left Content */}
        <div className="case-study__content">
          <span className="case-study__label">{caseStudyData.label}</span>

          <h2 className="case-study__title">
            {caseStudyData.title}
            <br />
            <span className="case-study__subtitle">{caseStudyData.subtitle}</span>
          </h2>

          <div className="case-study__summary">
            <h3>Summary:</h3>
            <p>{caseStudyData.summary}</p>
          </div>

          <ul className="case-study__goals">
            {caseStudyData.goals.map((goal, index) => (
              <li key={index} className="case-study__goal">
                <svg className="case-study__check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#6B7FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {goal}
              </li>
            ))}
          </ul>

          <Link to="/case-study" className="case-study__link">
            View full case study →
          </Link>
        </div>

        {/* Right Images */}
        <div className="case-study__images">
          <div className="case-study__image-wrapper case-study__image-wrapper--sidebar">
            <div className="case-study__image-placeholder">
              <span>HRM Sidebar</span>
            </div>
          </div>

          <div className="case-study__image-wrapper case-study__image-wrapper--profile">
            <div className="case-study__image-placeholder">
              <span>Profile View</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudyCard;