import React from 'react';
import ProjectsNavigator from '../../common/ProjectsNavigator';
import {ROUTE_PATH} from '../../constants';
import Conclusion from './Conclusion';
import DefineProblem from './DefineProblem';
import Design from './Design';
import Hero from './Hero';
import HeroSubSection from './HeroSubSection';
import Hifi from './Hifi';
import Lofi from './Lofi';
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
      <Lofi />
      <Design />
      <Hifi />
      <Conclusion />
      <ProjectsNavigator
        style={{marginTop: 200, marginBottom: 100}}
        prev={ROUTE_PATH.PACIFIC_PARADISE}
      />
    </div>
  );
}
