import React from 'react';
import Badge from '../UI/Badge';
import { skills, tools } from '../../data/skills';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './SkillsSection.scss';

const SkillsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ once: true });
  const [skillsRef, skillsVisible] = useScrollAnimation({ once: true, threshold: 0.1 });
  const [toolsTitleRef, toolsTitleVisible] = useScrollAnimation({ once: true });
  const [toolsRef, toolsVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  return (
    <section className="skills-section">
      <div className="skills-container">

        <div className="skills-block">
          <h2
            ref={titleRef}
            className={`skills-title animate-on-scroll animate-on-scroll--fade-in-up ${titleVisible ? 'is-visible' : ''}`}
          >
            Skills
          </h2>
          <div ref={skillsRef} className="badge-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`animate-on-scroll animate-on-scroll--scale-in animate-delay-${(index % 8) + 1} ${skillsVisible ? 'is-visible' : ''}`}
              >
                <Badge text={skill} />
              </div>
            ))}
          </div>
        </div>

        <div className="skills-block">
          <h2
            ref={toolsTitleRef}
            className={`skills-title animate-on-scroll animate-on-scroll--fade-in-up ${toolsTitleVisible ? 'is-visible' : ''}`}
          >
            Tools
          </h2>
          <div ref={toolsRef} className="badge-grid">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`animate-on-scroll animate-on-scroll--scale-in animate-delay-${(index % 10) + 1} ${toolsVisible ? 'is-visible' : ''}`}
              >
                <Badge text={tool} variant="tool" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;