import React from 'react';
import Hero from './Hero';
import HeroSubSection from './HeroSubSection';
import Opportunities from './Opportunities';
import UserResearch from './UserResearch';
import UserStories from './UserStories';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Project Page
 */
export default function PacificParadise() {
  return (
    <div className="container flex flex-column" >
      <Hero />
      <HeroSubSection />
      <UserResearch />
      <Opportunities />
      <UserStories />
    </div>
  );
}
