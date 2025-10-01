import React from 'react';
import { Link } from 'gatsby';
import { caseStudyData } from '../../data/caseStudy';
import './CaseStudyCard.scss';

const CaseStudyCard = () => {
  return (
    <section id="case-study" className="case-study">
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
            <p>{caseStudyData.summary}</p>
          </div>

          <ul className="case-study__goals">
            {caseStudyData.goals.map((goal, index) => (
              <li key={index} className="case-study__goal">
                <svg className="case-study__check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12C19 13.4776 18.5324 14.9173 17.6642 16.113C16.796 17.3086 15.5717 18.1989 14.1667 18.6562C12.7616 19.1136 11.2479 19.1146 9.84223 18.6591C8.43657 18.2037 7.21109 17.315 6.34129 16.1206C5.47149 14.9261 5.00198 13.487 5.00001 12.0094C4.99803 10.5318 5.46368 9.09141 6.33028 7.8946C7.19688 6.69779 8.41998 5.80591 9.82441 5.34667C11.2289 4.88743 12.7426 4.88439 14.1489 5.33799" stroke="#D4D3F4" strokeWidth="2"/>
                  <path d="M9 11L12 14L19 7" stroke="#4640DE" strokeWidth="2"/>
                </svg>
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images */}
        <div className="case-study__images">
            <img src="/case_study.png" alt="Project Management Infographic" className="" />
        </div>

      </div>
    </section>
  );
};

export default CaseStudyCard;