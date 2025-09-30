import React from 'react';
import Badge from '../UI/Badge';
import { skills, tools } from '../../data/skills';
import './SkillsSection.scss';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-block">
          <h2 className="skills-title">Skills</h2>
          <div className="badge-grid">
            {skills.map((skill, index) => (
              <Badge key={index} text={skill} />
            ))}
          </div>
        </div>

        <div className="skills-block">
          <h2 className="skills-title">Tools</h2>
          <div className="badge-grid">
            {tools.map((tool, index) => (
              <Badge key={index} text={tool} variant="tool" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;