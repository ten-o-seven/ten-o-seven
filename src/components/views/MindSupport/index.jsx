import React from 'react';
import DefineProblem from './DefineProblem';
import Hero from './Hero';
import HeroSubSection from './HeroSubSection';
import UserFlow from './UserFlow';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function MindSupport() {
  return (
    <div className="container flex flex-column" style={{marginTop: 100}}>
      <Hero />
      <HeroSubSection />
      <UserFlow />
      <DefineProblem />
    </div>
  );
}
