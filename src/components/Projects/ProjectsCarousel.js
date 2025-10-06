import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './ProjectsCarousel.scss';

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  const cardsPerView = 3;
  const maxIndex = Math.max(0, projectsData.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProjects = projectsData.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section id="projects" className="projects-carousel">
      <div className="projects-carousel__container">

        <div
          ref={headerRef}
          className="projects-carousel__header"
        >
          <div>
            <h2 className={`projects-carousel__title animate-on-scroll animate-on-scroll--fade-in-up ${headerVisible ? 'is-visible' : ''}`}>
              Other Projects & Expertise
            </h2>
            <p className={`projects-carousel__subtitle animate-on-scroll animate-on-scroll--fade-in-up animate-delay-1 ${headerVisible ? 'is-visible' : ''}`}>
              Discover more than 30 projects at different scale
            </p>
          </div>

          <div className={`projects-carousel__controls animate-on-scroll animate-on-scroll--fade-in ${headerVisible ? 'is-visible' : ''}`}>
            <button
              className="projects-carousel__arrow projects-carousel__arrow--prev"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous projects"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className="projects-carousel__arrow projects-carousel__arrow--next"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next projects"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div ref={cardsRef} className="projects-carousel__track">
          <div
            className="projects-carousel__slides"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {projectsData.map((project, index) => (
              <div key={project.id} className="projects-carousel__slide">
                <ProjectCard
                  project={project}
                  index={index - currentIndex}
                  isVisible={cardsVisible}
                />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ProjectsCarousel;