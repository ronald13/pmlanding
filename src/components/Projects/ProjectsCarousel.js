import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import './ProjectsCarousel.scss';

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <section className="projects-carousel">
      <div className="projects-carousel__container">

        {/* Header */}
        <div className="projects-carousel__header">
          <div>
            <h2 className="projects-carousel__title">Other Projects & Expertise</h2>
            <p className="projects-carousel__subtitle">Discover more than 30 projects at different scale</p>
          </div>

          {/* Navigation Arrows */}
          <div className="projects-carousel__controls">
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

        {/* Cards Grid */}
        <div className="projects-carousel__track">
          <div
            className="projects-carousel__slides"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {projectsData.map((project) => (
              <div key={project.id} className="projects-carousel__slide">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="projects-carousel__progress">
          <span className="projects-carousel__progress-text">
            {currentIndex + 1} - {Math.min(currentIndex + cardsPerView, projectsData.length)} of {projectsData.length}
          </span>
        </div>

      </div>
    </section>
  );
};

export default ProjectsCarousel;