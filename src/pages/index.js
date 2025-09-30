import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Hero/HeroSection';
import SkillsSection from '../components/Skills/SkillsSection';
import CaseStudyCard from '../components/CaseStudy/CaseStudyCard';

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <CaseStudyCard />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anna Ihnatsiuk - Project Manager</title>;