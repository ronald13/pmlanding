import React from 'react';
import { Link } from 'gatsby';
import { caseStudyData } from '../../data/caseStudy';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './CaseStudyCard.scss';

const CaseStudyCard = () => {
  const [labelRef, labelVisible] = useScrollAnimation({ once: true });
  const [titleRef, titleVisible] = useScrollAnimation({ once: true });
  const [summaryRef, summaryVisible] = useScrollAnimation({ once: true });
  const [goalsRef, goalsVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  return (
    <section id="case-study" className="case-study">
      <div className="case-study__container">

        <div className="case-study__content">
          <span
            ref={labelRef}
            className={`case-study__label animate-on-scroll animate-on-scroll--fade-in ${labelVisible ? 'is-visible' : ''}`}
          >
            {caseStudyData.label}
          </span>

          <h2
            ref={titleRef}
            className={`case-study__title animate-on-scroll animate-on-scroll--fade-in-up ${titleVisible ? 'is-visible' : ''}`}
          >
            {caseStudyData.title}
            <br />
            <span className="case-study__subtitle">{caseStudyData.subtitle}</span>
          </h2>

          <div
            ref={summaryRef}
            className={`case-study__summary animate-on-scroll animate-on-scroll--fade-in-up ${summaryVisible ? 'is-visible' : ''}`}
          >
            <h3>Summary:</h3>
            <p>{caseStudyData.summary}</p>
          </div>

          <ul ref={goalsRef} className="case-study__goals">
            {caseStudyData.goals.map((goal, index) => (
              <li
                key={index}
                className={`case-study__goal animate-on-scroll animate-on-scroll--fade-in-left animate-delay-${index + 1} ${goalsVisible ? 'is-visible' : ''}`}
              >
                <svg className="case-study__check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12C19 13.4776 18.5324 14.9173 17.6642 16.113C16.796 17.3086 15.5717 18.1989 14.1667 18.6562C12.7616 19.1136 11.2479 19.1146 9.84223 18.6591C8.43657 18.2037 7.21109 17.315 6.34129 16.1206C5.47149 14.9261 5.00198 13.487 5.00001 12.0094C4.99803 10.5318 5.46368 9.09141 6.33028 7.8946C7.19688 6.69779 8.41998 5.80591 9.82441 5.34667C11.2289 4.88743 12.7426 4.88439 14.1489 5.33799" stroke="#D4D3F4" strokeWidth="2"/>
                  <path d="M9 11L12 14L19 7" stroke="#4640DE" strokeWidth="2"/>
                </svg>
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="case-study__images">
          <img
            ref={imageRef}
            src="/case_study.png"
            alt="Case Study: HRM Project"
            className={`case-study__image animate-on-scroll animate-on-scroll--fade-in-right ${imageVisible ? 'is-visible' : ''}`}
          />
        </div>

      </div>
    </section>
  );
};

export default CaseStudyCard;