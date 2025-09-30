import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Hero/HeroSection';
import SkillsSection from '../components/Skills/SkillsSection';
import CaseStudyCard from '../components/CaseStudy/CaseStudyCard';
import StageSection from '../components/CaseStudy/StageSection';
import RequirementsDesign from '../components/CaseStudy/RequirementsDesign';
import ExecutionMonitoring from '../components/CaseStudy/ExecutionMonitoring';
import ResultsDevelopment from '../components/CaseStudy/ResultsDevelopment';
import ProjectsCarousel from '../components/Projects/ProjectsCarousel';

import { initiationPlanningData } from '../data/initiationPlanning';
import { requirementsDesignData } from '../data/requirementsDesign';
import { monitoringData } from '../data/monitoring';
import { resultsData } from '../data/results';

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <CaseStudyCard />

      {/* Project Stages - каждый со своим компонентом */}
      <StageSection data={initiationPlanningData} />
      <RequirementsDesign data={requirementsDesignData} />
      <ExecutionMonitoring data={monitoringData} />
      <ResultsDevelopment data={resultsData} />

      <ProjectsCarousel />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anna Ihnatsiuk - Project Manager</title>;