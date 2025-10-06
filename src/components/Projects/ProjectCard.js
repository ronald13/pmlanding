import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project, index = 0, isVisible = false }) => {
  return (
    <div
      className={`project-card animate-on-scroll animate-on-scroll--fade-in-up animate-delay-${Math.abs(index % 3) + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <span className="project-card__category">{project.category}</span>
    </div>
  );
};

export default ProjectCard;