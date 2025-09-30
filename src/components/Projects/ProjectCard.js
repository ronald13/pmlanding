import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <span className="project-card__category">{project.category}</span>
    </div>
  );
};

export default ProjectCard;